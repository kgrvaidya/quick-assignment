import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import '../style/UserList.css';

const UserList = () => {
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get('https://reqres.in/api/users?delay=3')
        .then((res) => {
            setUserList(res.data.data)
            console.log('Res data : ', userList)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {loading ? <Spinner /> : <UserListSection userList={userList}/> }
            
        </div>
    )
}

const DropDown = () => {
    return (
        <div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Sort
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item" href="#">Action</li>
                        <li class="dropdown-item" href="#">Another action</li>
                        <li class="dropdown-item" href="#">Something else here</li>
                </div>
                </div>
        </div>
    )
}

const UserListSection = ({userList}) => {
    userList = userList ? userList : []
    return (
        <section class="userGridContainer">
            <div class="userListContent">
                <h3> Users </h3>
                <div class="dropdown-right">
                    <DropDown />
                </div>
                <div class="UserCardGrid">
                    { userList.map(user => <SmallCard key={user.id} user={user} />) }
                </div>
            </div>
        </section>
    )
}
const SmallCard = ({user}) => {
    return (
        <div class="card user-card">
                <img src={user.avatar} class="avatar" alt={user.first_name} width="100px" height="100px" />
                <div class="card-body">
                    <p class="card-text">{user.first_name}</p>
                    <p class="card-text">{user.last_name}</p>
                </div>
            </div>
    )
}
export default UserList;