
import React from 'react'

import type { Posts } from '../../types/posts'

type Props = {
  loading: boolean,
  posts: Posts,
  onNewPost: () => void,
}

export default function PostsHeading({
  loading,
  posts,
  onNewPost
}: Props) {
  return (
    <div>
      <div className="posts-heading">
        <h2 className="posts-heading__title">Users</h2>
        <button

          onClick={onNewPost}
          disabled={loading}
        >
          New Users 
        </button>
      </div>
    </div>
  )
}
