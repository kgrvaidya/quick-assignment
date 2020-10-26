import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import '../style/UserList.css';

const UserList = () => {
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [sortOrder, setSortOrder] = useState('None')

    const sortUsers = (sortOption) => {
        switch(sortOption) {
            case 'none' : {
                let sorted = [...userList].sort((a,b) => a.id - b.id)
                console.log('Id : ',sorted)
                setUserList([...sorted])
                setSortOrder('None')
                break;
            }
            case 'firstName' : {
                let sorted = [...userList].sort((a,b) => {
                    if(a.first_name < b.first_name) { return -1; }
                    if(a.first_name > b.first_name) { return 1; }
                    return 0;
                    })
                console.log('First Name : ',sorted)
                setUserList([...sorted])
                setSortOrder('First Name')
                break;
            }
            case 'lastName' : {
                let sorted = [...userList].sort((a,b) => {
                    if(a.last_name < b.last_name) { return -1; }
                    if(a.last_name > b.last_name) { return 1; }
                    return 0;
                })
                console.log('Last Name : ',sorted)
                setUserList([...sorted])
                setSortOrder('Last Name')                
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
            {loading ? <Spinner /> : <UserListSection userList={userList} sortUser={sortUsers} sortOrder={sortOrder} /> }
            
        </div>
    )
}

const UserListSection = ({userList, sortUser, sortOrder }) => {
    userList = userList ? userList : []
    return (
        <section class="userGridContainer">
            <div class="userListContent">
                <h3> Users </h3>
                <div class="dropdown-right">
                    <div>
                        <div class="dropdown">
                            <label> Current Sort Order : <span style={{'color': '#007bff'}}>{sortOrder}</span></label>
                            <button class="btn btn-secondary dropdown-toggle sort-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <img src={user.avatar} class="avatar" />
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