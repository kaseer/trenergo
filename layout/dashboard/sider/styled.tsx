import styled from '@emotion/styled'

export const ProfileAvatarContainer = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 28px;

  img {
    width: 65%;
  }
`

export const SideContainer = styled.aside`
  background: green;
`
export const SearchContainer = styled.aside`
  padding: 0 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0;
    margin-left: 25%;
    margin-bottom: 12px;
    width: 30px;
    height: 30px;
    background-color: #121214;
    border-radius: 100px;
  }
`

export const SidebarBottom = styled.aside`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 80px;
  min-height: 300px;
  height: calc(100% - 500px);
`
export const ProfileContainer = styled.div`
  width: 39px;
  height: 44px;
  margin-right: 24px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`

export const BottomContainer = styled.div`
  display: flex;
`
