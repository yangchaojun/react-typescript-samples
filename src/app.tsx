import * as React from 'react'
const { useState, useEffect } = React
import { HelloComponent } from './hello'
import { NameEditComponent } from './nameEdit'

export const App = () => {
  const [name, setName] = useState('initialName')
  const [editingNmae, setEditingName] = useState('defaultUserName')

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
