import styled from '@emotion/styled'

export const LibraryContainer = styled.div`
  width: 338px;
  display: grid;
  grid-template-rows: 1fr 65px;
  padding-right: 8px;
`
export const LibraryButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export const LibrarySection = styled.div`
  padding: 23px;
  border-radius: 30px;
  background-color: #000000;
  text-align: center;
  .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-nav-list {
  margin-bottom: 18px;
    background-color: #1c1c1e;
    border-radius: 100px;
    width: 234px;
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr !important;
    overflow: hidden;
    .ant-tabs-tab-active {
      border-bottom: none !important;
      width: 100%;
      //max-width: 85px;
      height: 28px;
      color: #000c17;
      border-radius: 14px;
      background-color: #3cff8f;
      .ant-tabs-tab-btn {
        color: #000c17;
      }
    }
  }
  .ant-tabs-tab-btn {
    text-align: center;
    font-size: 14px;
    
    //background: purple;
    // min-width: 50px;
    width: 100%;
    height: 26px;
  }
  .ant-tabs-tab {
    text-align: center !important;
    margin: 0;
    padding: 0;
    color: #ededed;
  }
`
export const FilterIcon = styled.div`
  padding: 6px 0;
  img{
    height: 20px;
  }
`
