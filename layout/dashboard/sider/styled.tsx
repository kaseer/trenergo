import styled from '@emotion/styled'

export const SideContainer = styled.aside`
  background: green;
`

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

export const SidebarBottom = styled.aside`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 80px;
  min-height: 300px;
  height: calc(100% - 450px);
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
