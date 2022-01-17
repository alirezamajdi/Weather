import React from 'react'
import {
  Button,
  Previous,
} from 'style/style-components/components/common/button'

import { AiOutlineLeft } from 'react-icons/ai'
interface Props {
  icon?: any
  type?: any
  title: string
  color?: string
  shadow?: string
  width?: string
  background?: string
  radius?: string
  height?: string
  bghover?: string
  margin?: string
  link?: string
  onClick?: () => void
}

const Index: React.FC<Props> = (props) => {
  return (
    <>
      {props.type === 'next' ? (
        <p>next</p>
      ) : props.type === 'previous' ? (
        <Previous>
          <span>{props.title}</span>
          <span>
            <AiOutlineLeft />
          </span>
        </Previous>
      ) : (
        <Button
          width={props.width}
          color={props.color}
          shadow={props.shadow}
          background={props.background}
          radius={props.radius}
          bghover={props.bghover}
          height={props.height}
          onClick={props.onClick}
          margin={props.margin}
        >
          {props.icon != undefined && (
            <span className='icon'> {props.icon}</span>
          )}
          {props.title}
        </Button>
      )}
    </>
  )
}
export default Index
