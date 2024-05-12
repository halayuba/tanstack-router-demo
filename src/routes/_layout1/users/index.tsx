import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/users/')({
  component: () => <div>Hello USERS</div>,
})
