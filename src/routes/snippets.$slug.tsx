import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/snippets/$slug')({
  component: Snippets,
})

function Snippets() {
  const { slug } = Route.useParams()
  return (
    <div className="wrapper">
      <h3 className="page-header">Snippets - {slug}</h3>
    </div>
  )
}
