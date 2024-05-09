import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1')({
  component: Layout1,
})

function Layout1() {
  return (
    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-2xl text-primary">
      <h2 className="text-center text-2xl font-semibold text-indigo-700">
        Layout
      </h2>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  )
}
