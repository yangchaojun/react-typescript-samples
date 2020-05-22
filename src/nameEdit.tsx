import * as React from 'react'

interface Props {
  initialUserName: string
  editingName: string
  onNameUpdated: () => void
  onEditingNameUpdated: (newEditingName: string) => void
  disabled: boolean
}
export const NameEditComponent = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(e.target.value)
  }

  const onNameSubmit = (): void => {
    props.onNameUpdated()
  }

  return (
    <>
      <label>Update name:</label>
      <input type="text" value={props.editingName} onChange={onChange} />
      <button onClick={onNameSubmit} disabled={props.disabled}>
        Change
      </button>
    </>
  )
}
