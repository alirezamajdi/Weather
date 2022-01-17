import styled from 'styled-components'

interface Props {
  width?: string
  color?: string
  background?: string
  shadow?: string
  height?: string
  radius?: string
  bghover?: string
  margin?: string
  border?: string
  padding?: string
}
export const Button = styled.button<Props>`
  font-size: 1em;
  margin: ${(props) => props.margin ?? '1em 0'};
  padding: 0.25em 1em;
  transition: all 0.3s ease;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.background ?? '#f1b411'};
  width: ${(props) => props.width ?? '100%'};
  box-shadow: ${(props) => props.shadow ?? '1px 1px 15px #f1b411d1'};
  border-radius: ${(props) => props.radius ?? '10px'};
  color: ${(props) => props.color ?? '#f6f6f6'};
  height: ${(props) => props.height ?? '50px'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${(props) => props.bghover ?? '#e0a506'};
  }
  .icon {
    padding-left: 12px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 575.98px) {
    width: 100%;
    box-shadow: none !important;
  }
`
export const Previous = styled.button<Props>`
  margin: ${(props) => props.margin};
  background: ${(props) => props.background ?? '#2f2e2e'};
  border-radius: ${(props) => props.radius ?? '35px'};
  border: ${(props) => props.border ?? 'none'};
  padding: ${(props) => props.padding ?? '0.2em 0.8em 0.1em'};
  color: ${(props) => props.color ?? '#666666'};
  cursor: pointer;
  font-family: 'YekanBakh';
  svg {
    position: relative;
    top: -1px;
    right: 7px;
  }
`
