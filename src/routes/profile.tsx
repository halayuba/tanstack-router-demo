import { createFileRoute, redirect } from '@tanstack/react-router'
// import { isAuthenticated } from '../utils/auth'

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    /* === USING A HOOK === */
    const { isLogged } = context.authentication
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      })
    }
    /* === ONE EXAMPLE === */
    // if (!isAuthenticated()) {
    //   throw redirect({
    //     to: '/login',
    //   })
    // }
  },
  component: Profile,
})

function Profile() {
  return (
    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-2xl text-primary">
      <h2 className="text-2xl font-semibold text-indigo-700">Profile</h2>
    </div>
  )
}
