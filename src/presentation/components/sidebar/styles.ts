import styled from 'styled-components'

export const SidebarWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 256px;
  height: 100vh;
  padding: 140px 0 72px;
  background: #ffffff;
  border-right: 1px solid #e4e4e4;

  img {
    max-width: 115px;
  }
`
export const SidebarTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 140px;
`

export const SidebarList = styled.div`
  position: relative;
  padding: 0 20px 30px;
`

export const SidebarTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33333;
  margin-bottom: 16px;
  padding-left: 20px;
  color: #808191;
  display: block;
`

export const SidebarMenu = styled.ul`
  max-height: 100%;
  overflow-y: auto;
`
type PropsItem = {
  active?: boolean
}

export const SidebarItem = styled.li<PropsItem>`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 12px;
  background: ${props =>
    props.active ? props.theme.colors.primary : 'transparent'};

  &:hover {
    button {
      color: ${props =>
        props.active ? props.theme.colors.white : props.theme.colors.primary};

      svg {
        stroke: ${props =>
          props.active ? props.theme.colors.white : props.theme.colors.primary};
      }
    }
  }

  button {
    color: ${props =>
      props.active ? props.theme.colors.white : props.theme.colors.black};
    transition: all 0.5s;

    svg {
      margin-right: 16px;
      stroke: ${props =>
        props.active ? props.theme.colors.white : props.theme.colors.black};
      stroke-width: 1.5;
      transition: all 0.5s;
    }
  }
`

export const SidebarItemLink = styled.button`
  font-size: 14px;
  font-weight: 600;
  border: unset;
  background: unset;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
  text-align: left;
  display: flex;
  align-items: center;
`
