import * as React from 'react'

const classNames = require('./hello.css')

interface Props {
  userName: string
}

export const HelloComponent = (props: Props) => {
  return <h2 className={classNames.text}>Hello {props.userName}!</h2>
}
