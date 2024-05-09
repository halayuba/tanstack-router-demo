import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavbarLayout from '../components/layout/nav-bar'
import { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => (
      <>
        <NavbarLayout />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  },
)
