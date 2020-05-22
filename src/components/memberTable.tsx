import * as React from 'react'
import { MemberEntity } from '../model/member'
import { getMembersCollection } from '../api/memberApi'

const { useState, useEffect } = React
const useMemberCollection = () => {
  const [memberCollection, setMemberCollection] = useState<MemberEntity[]>([])

  const loadMemberCollection = () => {
    getMembersCollection().then((memberCollection) => {
      setMemberCollection(memberCollection)
    })
  }

  return { memberCollection, loadMemberCollection }
}

export const MemberTableComponent = () => {
  const { memberCollection, loadMemberCollection } = useMemberCollection()

  useEffect(() => {
    loadMemberCollection()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {memberCollection.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
  )
}

const MemberRow = ({ member }: { member: MemberEntity }) => (
  <tr>
    <td>
      <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
    </td>
    <td>
      <span>{member.id}</span>
    </td>
    <td>
      <span>{member.login}</span>
    </td>
  </tr>
)
