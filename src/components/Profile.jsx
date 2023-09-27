import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function Profile(){
    const {token} = useContext(AuthContext)
return(
    <h1>profile</h1>
)

}