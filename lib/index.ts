// import { Client, Agent } from '../blocks'

export function preftifyObj(user, role): UserType {
  const _user: UserType = {
    keywords: null,
    profile: {
      sub: user.claims.sub,
      email: user.claims.email,
      name: user.claims.name,
      picture: user.claims.picture,
      lastLogin: user.authTime,
    },
  }
  const action = user.claims.isTrainer
    ? 'isTrainer'
    : user.claims.isTrainee
    ? 'isTrainee'
    : null
  switch (action) {
    case 'isTrainer':
      return { ..._user, isTrainer: user.claims.isTrainer }
    case 'isTrainee':
      return { ..._user, isTrainee: user.claims.isTrainee }
    default:
      return { ..._user, [role]: true }
  }
}

export const checkCompenent = (type) => {
  if (!type) return
  const action = type.isTrainer
    ? 'isTrainer'
    : type.isTrainee
    ? 'isTrainee'
    : null
  return { isTrainer: {}, isTrainee: {} }[action]
}
