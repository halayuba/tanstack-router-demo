import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Card, CardBody } from '@nextui-org/react'

export const Route = createFileRoute('/_layout1')({
  component: Layout1,
  notFoundComponent: () => (
    <Card radius="none" fullWidth={true} shadow="md">
      <CardBody>
        <p>I'm not found</p>
      </CardBody>
    </Card>
  ),
})

function Layout1() {
  return (
    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-2xl text-primary">
      <h2 className="text-center text-2xl font-semibold text-indigo-700">
        this is a Layout
      </h2>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  )
}
