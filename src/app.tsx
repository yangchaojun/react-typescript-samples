import * as React from 'react'
const { useState } = React
import { HelloComponent } from './hello'
import { NameEditComponent } from './nameEdit'

export const App = () => {
  const [name, setName] = useState('initialName')

  const setUsernameState = (newName: string) => {
    setName(newName)
  }

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        onNameUpdated={setUsernameState}
      />
    </>
  )
}
