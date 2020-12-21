import styled from 'styled-components'

export const CardWrap = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 10px 36px rgba(227, 230, 236, 0.6);
  width: 250px;
  margin: 10px;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 10px;
    right: 10px;
    height: 6px;
    border-radius: 0 0 6px 6px;
    background: #cfc8ff;
    transition: all 0.25s;
  }

  &:hover {
    box-shadow: none;
    transition: all 0.25s;
    cursor: pointer;
  }

  &:empty {
    height: 390px;
    flex: 0 0 calc(50% - 32px);
    width: 250px;
    margin: 32px 16px 0;
    background-color: #ddd;
    position: relative;
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    &:before {
      background: #ccc;
    }
  }

  &:nth-child(even) {
    &:before {
      background: #c4effb;
    }
    strong {
      color: ${props => props.theme.colors.secondary};
    }
  }
`
type CardImgWrapProps = {
  image: string
}

export const CardImgWrap = styled.div<CardImgWrapProps>`
  width: 210px;
  height: 140px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
  margin: 20px auto 0px;
`

export const CardBody = styled.div`
  width: 100%;
  padding: 20px;
`

export const CardCategory = styled.span`
  font-size: 10px;
  line-height: 1.1875;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent_1};
`

export const CardTitle = styled.h5`
  font-size: 16px;
  line-height: 1.1875;
  font-weight: 400;
  letter-spacing: -0.5px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.33333;
  margin: 10px 0px;
  height: 80px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.grey_dark};
`

export const CardFrom = styled.p`
  font-size: 10px;
  font-weight: 500;
  margin-top: 5px;
  color: ${props => props.theme.colors.black};
`

export const CardValue = styled.strong`
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
`
