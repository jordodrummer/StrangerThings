import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';
import { useState, useEffect } from "react"
import { fetchPosts } from "./helpers/ajaxHelpers"
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';

export default function App() {

  const [posts, setPosts] = useState ([])
    useEffect(()=>{
        async function getPosts(){
            try {
                const posts = await fetchPosts()
                console.log(posts)
                setPosts(posts)
            } catch (error) {
                console.log(error)
            }
        }
    getPosts()
    },[])

const postState = {posts, setPosts}

  return (
    <>
      <CssBaseline />
     <NavBar />
     <Outlet context={postState}/>
    </>
  );
}

