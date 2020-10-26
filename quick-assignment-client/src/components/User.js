import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Spinner from './Spinner'
import { getUser} from '../redux/actions/userAction'

import '../style/User.css';

const UserComponent = ({user, getUser}) => {

    const [loading, setLoading] = useState(false)

    const userId = useParams().id;

    useEffect(() => {
        setLoading(true)

        axios.get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            const userData = res.data.data
            getUser(userData);
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
                    <img src={user.avatar} class="card-img-top" alt="user profile" />
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

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser : (user) => dispatch(getUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);