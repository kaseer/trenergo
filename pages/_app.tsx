import React, { useEffect, useState } from 'react'
import { AppLoading, RootElement } from '../blocks'

export default function MyApp(props: any) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return loading ? <AppLoading title="Trenergo" /> : <RootElement {...props} />
}
