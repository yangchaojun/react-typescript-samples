import { MemberEntity } from '../model/member'
import Axios, { AxiosResponse } from 'axios'

const gitHubURL = 'https://api.github.com'
const gitHubMembersUrl = `${gitHubURL}/orgs/vuejs/members`

export const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    try {
      Axios.get<MemberEntity[]>(gitHubMembersUrl).then((response) =>
        resolve(mapMemberListAPiToModel(response))
      )
    } catch (err) {
      reject(err)
    }
  })

  return promise
}

const mapMemberListAPiToModel = ({
  data
}: AxiosResponse<any[]>): MemberEntity[] =>
  data.map((gitHubMember) => ({
    id: gitHubMember.id,
    login: gitHubMember.login,
    avatar_url: gitHubMember.avatar_url
  }))
