import styled from 'styled-components'

interface Props {
  width?: string
  color?: string
  background?: string
  shadow?: string
  height?: string
  radius?: string
  bghover?: string
  padding?: string
  border?: string
  size?: string
  bold?: string
  margin?: string
  priceColor?: string
  active?: boolean
}
export const Box1 = styled.div<Props>`
  display: block;
  text-align: center;
  border: ${(props) => props.border ?? '2px solid'};
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => (props.active ? '#000' : '#f1b411')};
  margin: 10px 0px;
  cursor: pointer;
`
export const Box2 = styled.div<Props>`
  display: block;
  width: 300px;
  height: 50px;

  margin: 10px 0px;
  padding: 0px 10px;
  .top {
    display: flex;
    align-items: flex-end;
  }
  .bottom {
    padding-top: 10px;
  }
  .bottom span {
    display: block;
  }
  h4 {
    margin-bottom: 0 !important;
    padding-left: 10px;
  }
  img {
    width: 45px;
    height: 45px;
  }
`
