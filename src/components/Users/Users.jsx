import React from 'react';
import * as axios from "axios";
import userPhoto from '../../assets/images/user_image_mock.png';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }



    return <div>
        {
            props.users.map(u => <div key={u.id} style={{
                margin: 20 + 'px',
                borderRadius: 10 + 'px',
                padding: 5 + 'px',
                backgroundColor: '#ffffff',
                width: '50%',
            }}>
                <span>
                    <div style={{marginTop: 5 + 'px'}}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                             style={{width: 150 + 'px'}}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}
export default Users;