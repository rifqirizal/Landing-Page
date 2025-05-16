export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string[]
  date: string
  author: string
  category: string
  image: string
  tags?: string[]
}

export interface CommentFormData {
  name: string
  email: string
  message: string
}
