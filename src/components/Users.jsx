import { useEffect,useState } from "react";
function Users()
{
    const [users,setUsers]=useState([])
    useEffect(()=>
    {
        //using fetch to make api call
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        console.log(users);
    },[])
    return(
        <>
        <h3>User Names</h3>
        <ul>
        {users.map((user)=>(<li>{user.name}</li>))}
        </ul>
        <h3>User Emails</h3>
        <ol>
        {users.map((user)=>(<li>{user.email}</li>))}
        </ol>
        </>
    )
}

export default Users;