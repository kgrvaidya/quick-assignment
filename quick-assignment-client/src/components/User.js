import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Spinner from './Spinner'
import { getUser} from '../redux/actions/userAction'
import { startLoading, endLoading } from '../redux/actions/spinnerAction';

import '../style/User.css';

const UserComponent = ({user, getUser, startLoading, endLoading, spinner}) => {

    const userId = useParams().id;

    useEffect(() => {
        startLoading()

        axios.get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            const userData = res.data.data
            getUser(userData);
            endLoading()
        })
        .catch((err) => {
            console.log(err);
            endLoading()
        })
    }, [])

    const LargeCard = ({user}) => {
        return (
            <div className="main-card-center">
                <h3> {user.first_name + ' ' + user.last_name} </h3>
                <div className="card user-card" style={{"width": "18rem"}}>
                    <img src={user.avatar} className="card-img-top" alt="user profile" />
                    <div className="card-body">
                        <p className="card-text">{user.first_name}</p>
                        <p className="card-text">{ user.last_name} </p>
                        <p className="card-text">{user.email} </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            { spinner.isLoading ? <Spinner /> : <LargeCard user={user} /> }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user : state.user.user,
        spinner : state.spinner
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser : (user) => dispatch(getUser(user)),
        startLoading : () => dispatch(startLoading()),
        endLoading : () => dispatch(endLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);