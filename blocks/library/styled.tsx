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
    background-color: #1c1c1e;
    border-radius: 100px;

    overflow: hidden;
    .ant-tabs-tab-active {
      border-bottom: none !important;
      width: 85px;
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
    //background: purple;
    width: 100%;
    width: 82px;
    height: 26px;
  }
  .ant-tabs-tab {
    text-align: center !important;
    margin: 0;
    padding: 0;
    color: #ededed;
  }
`
// padding: 23px;
// border-radius: 30px;
// background-color: #000000;
