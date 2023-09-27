import React from 'react';
import { useState, useEffect } from "react"
import { fetchPosts } from "./helpers/ajaxHelpers"
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';

export default function App() {
  // JR: make user state here
  const [posts, setPosts] = useState ([])
  const [user, setUser] = useState({})

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

    // useEffect for token
    useEffect(() => {
      if (token) {
        // get user, add it to user state
      }
    }, [token])

    // replace postState with an object
    // object has posts state and user state
    const allState = {
      postState: [posts, setPosts],
      userState: [user, setUser]
    }


  return (
    <>
      <CssBaseline />
      {/* pass user state into NavBar and Outlet context */}
     <NavBar />          
     <Outlet context={allState}/>

    </>
  );
}

