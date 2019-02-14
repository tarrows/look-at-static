import * as React from 'react'

type Props = {
  id: string;
  name: string;
  age: number;
  dept: string;
}

const UserProfile: React.SFC<Props> = ({ id, name }) => (
  <>
    <div>{id}</div>
    <div>{name}</div>
  </>
)

export default UserProfile
