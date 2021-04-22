import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Library } from '../library'
import { Col, Row } from 'antd'
import { Card } from '../../components/card'
import styled from '@emotion/styled'
import { AddWorkout } from '../../components/addWorkout'
import Title from 'antd/lib/typography/Title'


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'transparent' : 'transparent',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'transparent' : 'transparent',
  padding: grid,
  width: '100%',
})

class Drags extends Component {
  state = {
    items: [{ id: "item-13", content: "apple" }, { id:"item-14", content: 'orange' }],
    selected: []
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    workoutSource: 'items',
    workoutOrigin: 'selected'
  }

  getList = id => this.state[this.id2List[id]]

  onDragEnd = result => {
    const { source, destination } = result
    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items: any = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      let state: any = { items }

      if (source.droppableId === 'workoutOrigin') {
        state = { selected: items }
      }

      this.setState(state)
    } else {
      const result: any = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )

      this.setState({
        items: result.workoutSource,
        selected: result.workoutOrigin
      })
    }
  }
   addOrigin = (
    <AddOriginContainer>
     <AddWorkout onClick={() => this.setState({ ...this.state, selected: [{ id: "item-89", content: "untitle" }]})}/>
    </AddOriginContainer>
  )
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext  onDragEnd={this.onDragEnd}>
        <div>
          <Droppable droppableId="workoutOrigin" >
            {(provided, snapshot) => (
              this.state.selected.length === 0 ?
                (<ContentContainer ref={provided.innerRef}>{this.addOrigin}</ContentContainer>) :
                (<ContentContainer
                  ref={provided.innerRef}
                >
                  {this.state.selected.length !== 0 && <Draggable
                    key={this.state.selected[this.state.selected.length - 1].id}
                    draggableId={this.state.selected[this.state.selected.length - 1].id}
                    index={this.state.selected[this.state.selected.length - 1].id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}>
                       <WorkOutContainer>
                         <TopBar>
                           <BarMenu>
                             <Title level={4}>{this.state.selected[0].content}</Title>
                             <IconMenu>
                               <div><img src="icons/filter2.svg" alt="filter"/></div>
                               <div><img src="icons/download.svg" alt="download"/></div>
                               <div><img src="icons/delete.svg" alt="delete"/></div>
                             </IconMenu>
                           </BarMenu>
                           <IconMenu>
                             <div><img src="icons/back.svg" alt="download"/></div>
                             <div><img src="icons/forward.svg" alt="delete"/></div>
                           </IconMenu>
                         </TopBar>
                       </WorkOutContainer>
                      </div>
                    )}
                  </Draggable>}
                  {provided.placeholder}
                </ContentContainer>)

            )}
          </Droppable>
        </div>

        <Droppable droppableId="workoutSource">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              <Library items={(this.state.items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}>
                  {(provided, snapshot) => (
                    <Col
                      md={12}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}>
                        <Card item={item}/>
                    </Col>
                  )}
                </Draggable>
              )))}/>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default Drags

const ContentContainer = styled.div`
  background: #1c1c1e !important;
  padding: 24px;
  height: 100vh;
`;
const AddOriginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BarMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 100px;
  background-color: #000000;
  .ant-typography{
    margin: 0;
  }
`;
const IconMenu = styled.div`
  display: flex;
  div{
    cursor: pointer;
    width: 30px;
    height: 100%;
  }
`;
const WorkOutContainer = styled.div`
  //background: #13c2c2;
`;
const TopBar = styled.div`
 display: flex;
 align-items: center;
`;