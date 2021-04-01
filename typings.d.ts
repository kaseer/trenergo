interface Profile {
  sub: string
  lastLogin: string
  email: string
  name: string
  picture: string
}

interface Keyboard {
  status: string
  keyword: string
}

interface Keywords {
  [key: string]: Keyboard
}

interface UserType {
  profile?: Profile

  keywords: Keyboards

  [key: string]: boolean | any
}
