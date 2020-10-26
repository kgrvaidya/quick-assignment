import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import '../style/UserList.css';

const UserList = () => {
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])

    const sortUsers = (sortOption) => {
        switch(sortOption) {
            case 'none' : {
                setUserList(userList.sort((a,b) => a.id < b.id))
                break;
            }
            case 'firstName' : {
                setUserList(userList.sort((a,b) => a.first_name < b.first_name))
                break;
            }
            case 'lastName' : {
                setUserList(userList.sort((a,b) => a.last_name < b.last_name))
                break;
            }
            default : {
                return
            }
        }
    }

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
            {loading ? <Spinner /> : <UserListSection userList={userList} sortUser={sortUsers}/> }
            
        </div>
    )
}

const UserListSection = ({userList, sortUser }) => {
    userList = userList ? userList : []
    return (
        <section class="userGridContainer">
            <div class="userListContent">
                <h3> Users </h3>
                <div class="dropdown-right">
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" value="none" onClick={() => sortUser('none')}>None</button>
                                <button class="dropdown-item" type="button" value="firstName" onClick={() => sortUser('firstName')}>First Name</button>
                                <button class="dropdown-item" type="button" value="lastName" onClick={() => sortUser('lastName')}>Last Name</button>
                            </div>
                        </div>
                    </div>
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
                <img src={user.avatar} class="avatar" alt={user.first_name} />
                <a href={`/user/${user.id}`}>
                    <div class="card-body">
                        <p class="card-text">{user.first_name}</p>
                        <p class="card-text">{user.last_name}</p>
                    </div>
                </a>
            </div>
    )
}
export default UserList;