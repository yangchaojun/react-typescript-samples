import * as React from 'react'
const { useState } = React

interface Props {
  initialUserName: string
  onNameUpdated: (newName: string) => any
}
export const NameEditComponent = (props: Props) => {
  const [editingName, setEditingName] = useState(props.initialUserName)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value)
  }

  const onNameSubmit = (): void => {
    props.onNameUpdated(editingName)
  }

  return (
    <>
      <label>Update name:</label>
      <input type="text" value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  )
}
