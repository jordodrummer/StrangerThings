import React from 'react';
import { useState, useEffect } from "react"
import { fetchPosts } from "./helpers/ajaxHelpers"
import { Outlet } from 'react-router';
import { CssBaseline } from '@mui/material';
import {Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile'

export default function App() {
  // JR: make user state here

  const [token, setToken] = useState(null)
  // const [posts, setPosts] = useState ([])
  // const [user, setUser] = useState({})
  // console.log(posts, "posts inside useEffect in App.jsx line 12")
  //   useEffect(()=>{
  //       async function getPosts(){
  //           try {
  //               const posts = await fetchPosts()
  //               setPosts(posts)
  //           } catch (error) {
  //               console.log(error)
  //           }
  //       }
  //   getPosts()
  //   },[])

    // useEffect for token
    // useEffect(() => {
    //   if (token) {
    //     // get user, add it to user state
    //   }
    // }, [token])

    // replace postState with an object
    // object has posts state and user state
    // const allState = {
    //   postState: [posts, setPosts],
    //   userState: [user, setUser]
    // }


  return (
    <>
      <CssBaseline />
      {/* pass user state into NavBar and Outlet context */}
     <NavBar />  
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp setToken={setToken} />} />
        <Route path="/login" element={<SignIn setToken={setToken} />} />
        <Route path="/post/:postId" element={<Post token={token} />} />
        <Route path="/posts" element={<Posts token={token} />} />
      </Routes>        
     {/* <Outlet context={allState}/> */}

    </>
  );
}
