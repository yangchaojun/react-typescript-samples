import * as React from 'react'
import { Color } from '../model/color'

interface Props {
  color: Color
  onColorUpdated: (color: Color) => void
}

const updateColor = (props: Props, colorId: keyof Color) => (value: number) => {
  props.onColorUpdated({
    ...props.color,
    [colorId]: value
  })
}

export const ColorPicker = (props: Props) => (
  <div>
    <ColorSliderComponent
      value={props.color.red}
      onValueChange={updateColor(props, 'red')}
    />
    <br />
    <ColorSliderComponent
      value={props.color.green}
      onValueChange={updateColor(props, 'green')}
    />
    <br />
    <ColorSliderComponent
      value={props.color.blue}
      onValueChange={updateColor(props, 'blue')}
    />
    <br />
  </div>
)

interface PropsColorSlider {
  value: number
  onValueChange: (newValue: number) => void
}

const ColorSliderComponent = (props: PropsColorSlider) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={(event) => props.onValueChange(+event.target.value)}
      />
      {props.value}
    </div>
  )
}
