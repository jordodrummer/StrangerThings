import App from './App';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const COHORT_NAME = "2302-ACC-PT-WEB-PT-C";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const postsRoute = `${BASE_URL}/posts`
export const postRoute = (postId) => {
    return `${postsRoute}/${postId}`
}

const rootChildren = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/signin",
        element: <SignIn />
    },      
    {
        path: "/signup",
        element: <SignUp />
    },  
    {
        path: "/posts",
        element: <Posts />
    },
    {
        path: "/posts/:postsId",
        element: <Post />
    },
]

const routes = [
    {
        path: '/',
        element: <App />,
        children: rootChildren
    }
]
export default routes





// localhost:2343/posts/15
// postsId = 15
// const {postsId} = useParams() // 15
// const [singlePost] = posts.filter(post => postsId === post.id)