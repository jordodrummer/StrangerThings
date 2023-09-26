import { Paper, Typography, Box, Button } from "@mui/material"
import { useOutletContext } from "react-router-dom"

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

export default function Posts(){
    const postState = useOutletContext();
    console.log(postState)
return(<>            
{postState.posts.map((post) => <PostCard key = {post._id} post={post}/>)}
</>)
}
