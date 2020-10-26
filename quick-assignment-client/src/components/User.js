import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Spinner from './Spinner'

import '../style/User.css';

const UserComponent = () => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const userId = useParams().id;

    useEffect(() => {
        // console.log('User Id : ', userId.id)
        setLoading(true)

        axios.get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            console.log(res.data.data)
            setUser(res.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        })
    }, [])

    const LargeCard = ({user}) => {
        return (
            <div class="main-card-center">
                <h3> {user.first_name + ' ' + user.last_name} </h3>
                <div class="card user-card" style={{"width": "18rem"}}>
                    <img src={user.avatar} class="card-img-top" alt="user Image" />
                    <div class="card-body">
                        <p class="card-text">{user.first_name}</p>
                        <p class="card-text">{ user.last_name} </p>
                        <p class="card-text">{user.email} </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            { loading ? <Spinner /> : <LargeCard user={user} /> }
        </div>
    )
}
export default UserComponent;