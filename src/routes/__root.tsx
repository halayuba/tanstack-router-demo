import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavbarLayout from '../components/layout/nav-bar'
import { QueryClient } from '@tanstack/react-query'
import { AuthContext } from '../hooks/useAuth'

type RouterContext = {
  authentication: AuthContext
  queryClient: QueryClient
}
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <NavbarLayout />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
