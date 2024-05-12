import { createFileRoute } from '@tanstack/react-router'
import { postsQueryOptions } from '../api/posts'
import { CircularProgress } from '@nextui-org/react'

export const Route = createFileRoute('/posts')({
  component: Posts,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions()),
  pendingComponent: () => (
    <div className="wrapper">
      <CircularProgress
        color="default"
        size="lg"
        aria-label="Loading..."
        className="flex w-full justify-center"
      />
    </div>
  ),
})

function Posts() {
  const posts = Route.useLoaderData()
  return (
    <div className="wrapper">
      <h3 className="page-header">Posts</h3>
      <div className="mt-6 flex flex-col items-center justify-center gap-2">
        {posts?.map((x) => <div key={x.id}>{x.title}</div>)}
      </div>
    </div>
  )
}
