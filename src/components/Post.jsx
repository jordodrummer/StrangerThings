// import { useState, useEffect } from "react"
// import { fetchPosts } from "../helpers/ajaxHelpers"
// import { Paper, Typography, Box, Button } from "@mui/material"
import { useParams } from "react-router"
import { useOutletContext } from "react-router"

// export default function Posts(){
//     const [posts, setPosts] = useState ([])
//     useEffect(()=>{
//         async function getPosts(){
//             try {
//                 const posts = await fetchPosts()
//                 console.log(posts)
//                 setPosts(posts)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     getPosts()
//     },[])
// return(<>            
// {posts.map((post) => (
//               <Paper key={post._id} elevation={3} sx={{ width: {xs: 1, md: 320}}}>
//                 <Box sx={{ m: 3}}>                  
//                   <Typography variant="h3">{post.title}</Typography>
//                   <Typography sx={{ mt: 2 }}>{post.description}</Typography>
//                   <Button variant='contained' sx={{ mt: 2 }}>Learn More</Button>
//                 </Box>
//             </Paper>))}
// </>)
// }
const PostCard = ({post}) => {
    return (
        <Paper key={post._id} elevation={3} sx={{ width: {xs: 1, md: 320}}}>
                <Box sx={{ m: 3}}>                  
                  <Typography variant="h3">{post.title}</Typography>
                  <Typography sx={{ mt: 2 }}>{post.description}</Typography>
                  <Button variant='contained' sx={{ m: 2 }}>Details</Button>
                </Box>
            </Paper>
    )
}
export default function Post(){
    const postState = useOutletContext();
    console.log(postState)
return(<>            
{postState.posts._id((post) => <PostCard key = {post._id} post={post}/>)}
</>)
}

// const Post = () =>  {
//     const {posts, setPosts} = useOutletContext()
//     const {postsId} = useParams()

//     const post = posts.filter((p) => p.id === postsId)

//     const handleDelete = () => {
//         // delete fetch
//         // setPosts(newPosts) // fetchPosts()
//     }
//     return (
//         <>
//             <div></div>
//         </>
//     )
// }

// export default Post