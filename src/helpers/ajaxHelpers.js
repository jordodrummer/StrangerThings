import {postsRoute, postRoute} from '../routes.jsx'

export const fetchPosts = async () => {
  try {
    const response = await fetch(postsRoute);
    const result = await response.json();
    console.log(result)
    return result.data.posts
  } catch (error) {
    console.log(error)
  }
}

export const fetchPost = async (postId) => {
  try {
    const response = await fetch(postRoute(postId));
    const result = await response.json();
    return result.data.post
  } catch (error) {
    console.log(error)
  }
}