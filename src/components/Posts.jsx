import { Paper, Typography, Box, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { fetchPosts } from "../helpers/ajaxHelpers"
// import { useOutletContext } from "react-router-dom"

// const PostCard = ({post}) => {
//     console.log(post, "individual post in posts.jsx")
//     return (
//         <Paper key={post._id} elevation={3} sx={{ width: {xs: 1, md: 320}}}>
//                 <Box sx={{ m: 3}}>                  
//                   <Typography variant="h3">{post.title}</Typography>
//                   <Typography sx={{ mt: 2 }}>{post.description}</Typography>
//                   <Button variant='contained' sx={{ m: 2 }}>Details</Button>
//                 </Box>
//             </Paper>
//     )
// }


export default function Posts(){
    const [posts, setPosts] = useState ([])
    console.log(posts, "posts inside useEffect in posts.jsx line 17")
    useEffect(()=>{
        async function getPosts(){
            try {
                const posts = await fetchPosts()
                setPosts(posts)
            } catch (error) {
                console.log(error)
            }
      }
    getPosts()
  },[])
    // const allState = useOutletContext();
    // console.log(allState.postState, "posts.jsx line 18")
    return(
    <>        
    {posts.map((post)=>{
        return(
                    <Paper key={post._id} elevation={3} sx={{ width: {xs: 1, md: 320}}}>
                <Box sx={{ m: 3}}>                  
                  <Typography variant="h3">{post.title}</Typography>
                  <Typography sx={{ mt: 2 }}>{post.description}</Typography>
                  <Button variant='contained' sx={{ m: 2 }}>Details</Button>
                </Box>
            </Paper>

        )
    })}
    </>)
}
