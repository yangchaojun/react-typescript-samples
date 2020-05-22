import * as React from 'react'
import { Color } from '../model/color'

interface Props {
  color: Color
}

export const ColorBrowser = (props: Props) => {
  const { red, green, blue } = props.color
  const divStyle: React.CSSProperties = {
    width: '11rem',
    height: '7rem',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }

  return <div style={divStyle} />
}
