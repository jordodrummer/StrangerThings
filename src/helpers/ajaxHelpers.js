// import {postsRoute, postRoute} from '../routes.jsx'


export const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C`;

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    console.log(result, "posts from ajaxHelpers.jsx line 8")
    return result.data.posts
  } catch (error) {
    console.log(error)
  }
}

export const fetchPost = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    const result = await response.json();
    return result.data.post
  } catch (error) {
    console.log(error)
  }
}

export const login = async (formData) => {

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: formData.email,
          password: formData.password
        }
      })
    });
    const result = await response.json();
    if (!result.error) {
      localStorage.setItem('token', JSON.stringify(result.data.token))
      return result.data
    } else {
      return result
    }
  } catch (err) {
    console.error(err);
  }
}

export const registerUser = async (formData) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: formData.email,
          password: formData.password
        }
      })
    });
    const result = await response.json();
    if (result.data.token) {
      localStorage.setItem('token', JSON.stringify(result.data.token))
      return result.data
    }
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
  } catch (err) {
    console.error(err);
  }
}

export const myData = async () => {
  
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}