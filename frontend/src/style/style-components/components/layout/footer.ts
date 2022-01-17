import styled from 'styled-components'

export const Footer = styled.div`
  background: #292929;
  height: 130px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 70px;
  .links {
    padding-top: 50px;
  }
  .links img {
    width: 25px;
    height: 25px;
  }

  .title {
    font-family: 'YekanBakh';
    text-align: center;
    color: #666666;
    font-size: 16px;
  }
  .logo {
    background: #f1b509;
    position: absolute;
    top: -50px;
    right: calc(50% - 50px);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    box-shadow: 1px 1px 15px #f1b411d1;
  }
  .logo::after {
    position: absolute;
    content: '';
    width: 110px;
    height: 110px;
    background: #f1b5092e;
    z-index: -1;
    border-radius: 50%;
  }
  .logo img {
    width: 40px;
  }
  @media (max-width: 575.98px) {
    margin-top: 35px;
    .links a:nth-child(2) {
      padding-left: 80px;
    }
    .logo {
      width: 90px;
      height: 90px;
      right: calc(50% - 45px);
      top: -40px;
    }
    .logo::after {
      width: 100px;
      height: 100px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-top: 50px;
    .links a:nth-child(2) {
      padding-left: 80px;
    }
    .logo {
      width: 90px;
      height: 90px;
      right: calc(50% - 45px);
      top: -40px;
    }
    .logo::after {
      width: 100px;
      height: 100px;
    }
  }
`
