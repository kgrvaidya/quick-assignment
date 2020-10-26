// import { useState, useEffect } from 'react';
import '../style/User.css';

const UserComponent = () => {

    //const [user, getUser] = useState({})

    const LargeCard = () => {
        return (
            <div class="main-card-center">
                <div class="card" style={{"width": "18rem"}}>
                    <img src="..." class="card-img-top" alt="user Image" />
                    <div class="card-body">
                        <p class="card-text">First name</p>
                        <p class="card-text">Last name</p>
                        <p class="card-text">Email</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <LargeCard />
        </div>
    )
}
export default UserComponent;