import { Button } from '@nextui-org/react'
import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../../hooks/useAuth'

export const Route = createFileRoute('/(auth)/login')({
  component: Signin,
})

function Signin() {
  const auth = useAuth()
  return (
    <div className="wrapper">
      <h3 className="page-header">Login Form</h3>
      <p>You are currently {auth.isLogged() ? 'signed in' : 'not signed in'}</p>

      {!auth.isLogged() && (
        <Button onClick={() => auth.signIn()}>Sign in</Button>
      )}
      {auth.isLogged() && (
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      )}
    </div>
  )
}
