import React, { Dispatch, SetStateAction, ChangeEvent } from 'react'

import { InputDiv } from 'style/style-components/components/common//input'

type Props = {
  name?: string | undefined
  value?: string | undefined
  placeholder?: string
  icon?: any
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
  setData?: Dispatch<SetStateAction<string>> | undefined
  width?: string
  height?: string
  background?: string
  border?: string
  radius?: string
}
const Index: React.FC<Props> = ({
  value,
  onChange,
  setData,
  name,
  placeholder,
  width,
  height,
  background,
  icon,
  border,
  radius,
}) => {
  return (
    <>
      <InputDiv
        radius={radius}
        width={width}
        height={height}
        background={background}
      >
        {icon !== undefined && <div className='icon'>{icon}</div>}
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputDiv>
    </>
  )
}
export default Index
