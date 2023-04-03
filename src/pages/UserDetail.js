import React, {useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../components/CardUser/CardUser";
//import CardUser from "../CardUser/CardUser";

const UserdDetail = () => {
    const [user, setUser] = useState({});
    console.log(user);

    let {id} = useParams();
    console.log (id);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
            setUser(res.data) 
        );
    },[id]);

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}}>
            <h1>User Detail</h1> 
            <CardUser data={user}></CardUser>
        </div>
    )
}

export default UserdDetail;