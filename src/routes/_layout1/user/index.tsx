import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user/')({
  component: () => <div>Hello USER</div>,
})
