import { queryOptions } from '@tanstack/react-query'

type Post = {
  id: string
  title: string
  body: string
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((res) => res.json())
  // .then((json) => console.log(json));
  await new Promise((r) => setTimeout(r, 2000))
  return await response.json()
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
  // .then((res) => res.json())
  // .then((json) => console.log(json));

  return await response.json()
}

export function postsQueryOptions() {
  return queryOptions({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}
