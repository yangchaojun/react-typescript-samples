import * as React from 'react'
const { useState, useEffect } = React
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker
} from './components'
import { Color } from './model/color'

export const App = () => {
  const [name, setName] = useState('initialName')
  const [editingNmae, setEditingName] = useState('defaultUserName')
  const [color, setColor] = useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  })

  const loadUsername = () => {
    setTimeout(() => {
      setName('name from async call')
      setEditingName('name from async call')
    }, 500)
  }

  useEffect(() => {
    loadUsername()
  }, [])

  const setUsernameState = () => {
    setName(editingNmae)
  }

  return (
    <>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingNmae}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingNmae === '' || editingNmae === name}
      />
    </>
  )
}
