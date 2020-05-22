import * as React from 'react'
const { useState, useEffect } = React
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
  SidebarComponent
  // MemberTableComponent
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
  const [isVisible, setVisible] = React.useState(false)

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
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </SidebarComponent>
      {/* <MemberTableComponent /> */}
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
      <div style={{ float: 'right' }}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
    </>
  )
}
