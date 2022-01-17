import styled from 'styled-components'

export const Head = styled.div`
  background: linear-gradient(to top, #8757f3, #6a2bc2);
  font-family: 'YekanBakh';
  display: flex;
  align-items: center;
  height: 200px;
  .icon {
    padding-bottom: 25px;
  }
  .icon img {
    width: 20px;
    height: 20px;
  }
  .head-img {
    width: 110px;
    height: 110px;
  }
  .head-label {
    color: #dfdfdf;
  }
  .head-title {
    color: #fff;
    font-weight: bold;
    width: 70%;
    padding-top: 5px;
    font-size: 23px;
  }
  @media (max-width: 575.98px) {
    .head-title {
      width: 100%;
      font-size: 17px;
    }
    .head-img {
      width: 90px;
      height: 90px;
    }
  }
`
