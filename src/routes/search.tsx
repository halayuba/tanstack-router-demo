import { createFileRoute } from '@tanstack/react-router'

type Category = 'Electronics' | 'Clothing' | 'Books' | 'Toys'

type Filters = {
  categories?: Category[]
  hasDiscount?: boolean
  query: string
  limit: number
}

export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>): Filters => {
    return {
      query: search.query as string,
      hasDiscount: search.hasDiscount === 'true',
      categories: search.categories as Category[],
      limit: Number(search.limit) || 10,
    }
  },
  component: Search,
})

function Search() {
  const { query, limit, hasDiscount, categories } = Route.useSearch()
  return (
    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-2xl text-primary">
      <h2 className="text-2xl font-semibold text-indigo-700">Search</h2>
      <pre>
        {JSON.stringify({ query, hasDiscount, categories, limit }, null, 2)}
      </pre>
    </div>
  )
}
