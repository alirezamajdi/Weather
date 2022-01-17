import styled from 'styled-components'

interface Props {
  color?: string
  background?: string
  margin?: string
  border?: string
  padding?: string
}
export const Timer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'YekanBakh';
  .timer_number {
    display: block;
    font-size: 25px;
    position: relative;
    top: 6px;
  }
  .timer_number.active {
    top: 3px;
  }
  .timer_text {
    font-size: 14px;
    cursor: pointer;
    position: relative;
    top: -7px;
  }
  .icon img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
`
