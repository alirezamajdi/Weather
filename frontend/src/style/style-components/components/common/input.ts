import styled from 'styled-components'
interface Props {
  width?: string
  color?: string
  background?: string
  shadow?: string
  height?: string
  radius?: string
  border?: string
}
export const InputDiv = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  border: ${(props) => props.border ?? '2px solid #ddd'};
  border-radius: ${(props) => props.radius ?? '10px'};
  margin: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0 1em;
  input {
    font-size: 1em;
    transition: all 0.3s ease;
    font-weight: bold;
    border: none !important;
    background: ${(props) => props.background ?? 'transparent'};
    width: 100%;
    box-shadow: ${(props) => props.shadow ?? 'none'};
    color: ${(props) => props.color ?? '#555'};
    height: ${(props) => props.height ?? '50px'};
  }

  .icon {
    padding-left: 5px;
  }
  .icon img {
    width: 20px;
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
`
export const InputCodeDiv = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  input {
    border: 3px solid #2f2e2e;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    width: 55px !important;
    height: 66px !important;
    border-radius: 15px !important;
    font-family: 'YekanBakh';
    background: ${(props) => props.background ?? 'transparent'};
  }
  .styles_react-code-input-container__tpiKG {
    width: auto !important;
  }
  .styles_react-code-input__CRulA {
    justify-content: space-between;
    display: flex;
    direction: ltr;
  }
  .styles_react-code-input__CRulA > input:focus + input {
    border-left: 3px solid #2f2e2e !important;
  }
  .styles_react-code-input__CRulA > input:last-child {
    border-right: 3px solid #2f2e2e;
  }
  .styles_react-code-input__CRulA > input:focus {
    outline: none;
    border: 3px solid #f1b411 !important;
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
`
