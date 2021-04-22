import styled from '@emotion/styled'

export const DashboardContainer = styled.main`
  display: grid;
  background: #1c1c1e;
  grid-template-columns: 171px auto;
  grid-template-rows: 100vh;
  @media (max-width: 600px) {
    grid-template-columns: auto 1fr;
  }
`

export const SideContainer = styled.aside`
  background: #000000;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  padding: 21px 0;

  overflow: hidden;
  .ant-menu {
    height: 100%;
    border: 0;
    padding-left: 8px;
    z-index: 1 !important;
    position: relative;
  }

  .ant-menu-item {
    //margin-bottom: 0 !important;
    //margin-top: 0 !important;
  }
  .ant-menu-item-selected {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    img {
      fill: #2f54eb !important;
      filter: contrast(10%);
    }
    #overview {
      fill: #3cff8f !important;
      background: #2f54eb;
    }
    position: relative !important;
    z-index: 2;
    .anticon:after {
      background: #2f54eb;
      width: 60px;
      height: 100px;
      z-index: 6;
    }
  }

  //li:has(+ .ant-menu-item-selected) {
  //  background: green !important;
  //}
  //.ant-menu-item-selected + li:before {
  //   content: url(/bottom.svg);
  //   width: 39px;
  //   position: absolute;
  //   top: 0;
  //   z-index: 4;
  //   right: 1px;
  //}
  //
  //  .top + li:after {
  // background-image: url(/top1.svg);
  //   width: 39px;
  //   position: absolute;
  //   top: 0px;
  //   z-index: 4;
  //   right: 1px;
  //}

  //.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected
  @media (max-width: 600px) {
    .ant-menu {
      width: 58px;
    }
  }
`
export const MainContainer = styled.aside``
