import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import '../style/UserList.css';
import { connect } from 'react-redux';
import { getUserList } from '../redux/actions/userListAction';
import { startLoading, endLoading } from '../redux/actions/spinnerAction';


const UserList = ({users, spinner, getAllUser, startLoading, endLoading}) => {
    const [sortOrder, setSortOrder] = useState('None')

    const sortUsers = (sortOption) => {
        switch(sortOption) {
            case 'none' : {
                let sorted = [...users].sort((a,b) => a.id - b.id)
                console.log('Id : ',sorted)
                getAllUser([...sorted])
                setSortOrder('None')
                break;
            }
            case 'firstName' : {
                let sorted = [...users].sort((a,b) => {
                    if(a.first_name < b.first_name) { return -1; }
                    if(a.first_name > b.first_name) { return 1; }
                    return 0;
                    })
                console.log('First Name : ',sorted)
                getAllUser([...sorted])
                setSortOrder('First Name')
                break;
            }
            case 'lastName' : {
                let sorted = [...users].sort((a,b) => {
                    if(a.last_name < b.last_name) { return -1; }
                    if(a.last_name > b.last_name) { return 1; }
                    return 0;
                })
                console.log('Last Name : ',sorted)
                getAllUser([...sorted])
                setSortOrder('Last Name')                
                break;
            }
            default : {
                return
            }
        }
    }

    useEffect(() => {
        startLoading()
        axios.get('https://reqres.in/api/users?delay=3')
        .then((res) => {
            let allUsers = res.data.data;
            getAllUser(allUsers);
            endLoading();
        })
        .catch((err) => {
            console.log(err)
            endLoading();
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {spinner.loading ? <Spinner /> : <UserListSection userList={users} sortUser={sortUsers} sortOrder={sortOrder} /> }
            
        </div>
    )
}

const UserListSection = ({userList, sortUser, sortOrder }) => {
    userList = userList ? userList : []
    return (
        <section className="userGridContainer">
            <div className="userListContent">
                <h3> Users </h3>
                <div className="dropdown-right">
                    <div>
                        <div className="dropdown">
                            <label> Current Sort Order : <span style={{'color': '#007bff'}}>{sortOrder}</span></label>
                            <button className="btn btn-secondary dropdown-toggle sort-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" value="none" onClick={() => sortUser('none')}>None</button>
                                <button className="dropdown-item" type="button" value="firstName" onClick={() => sortUser('firstName')}>First Name</button>
                                <button className="dropdown-item" type="button" value="lastName" onClick={() => sortUser('lastName')}>Last Name</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UserCardGrid">
                    { userList.map(user => <SmallCard key={user.id} user={user} />) }
                </div>
            </div>
        </section>
    )
}
const SmallCard = ({user}) => {
    return (
        <div className="card user-card">
                <img src={user.avatar} className="avatar" alt="user profile" />
                <a href={`/user/${user.id}`}>
                    <div className="card-body">
                        <p className="card-text">{user.first_name}</p>
                        <p className="card-text">{user.last_name}</p>
                    </div>
                </a>
            </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        users : state.userList.users,
        spinner : state.spinner
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllUser : (users) => dispatch(getUserList(users)),
        startLoading : () => dispatch(startLoading()),
        endLoading : () => dispatch(endLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(UserList);