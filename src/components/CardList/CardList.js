import React, {useEffect, useState } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";

  
import "./CardListComponent.css";

const CardList = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
            setUsers(res.data)
            );
    },[]);
    return (
        <div className="Cards-List">
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <Link to={`/user-detail/${user.id}`}>
                            <CardUser key={user.id} data={user}/>
                        </Link>
                    </div>
            );
            })} 
        </div>
    );
};

export default CardList;