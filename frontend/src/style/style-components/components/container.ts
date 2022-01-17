import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1200px) {
    max-width: 1650px !important;
    width: calc(98% - 30px) !important;
    margin: 0 auto;
  }
  /* //desktop */
  @media (min-width: 1200px) and (max-width: 1650px) {
    max-width: 1650px !important;
    width: calc(60% - 30px) !important;
    margin: 0 auto;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 1650px !important;
    width: calc(80% - 30px) !important;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: 1650px !important;
    width: calc(90% - 30px) !important;
    margin: 0 auto;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 1650px !important;
    width: calc(90% - 0px) !important;
    margin: 0 auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  @media (max-width: 576px) {
    max-width: 1650px !important;
    width: calc(90% - 0px) !important;
    margin: 0 auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
