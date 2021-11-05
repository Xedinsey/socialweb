import React from 'react';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            followed: false,
            fullname: 'Dmitry',
            status: 'I am a boss',
            location: 'Russia'
        },
            {
                id: 2,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
                followed: true,
                fullname: 'Alex',
                status: 'I am a boss',
                location: 'Russia'
            },
            {
                id: 3,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
                followed: false,
                fullname: 'Sergey',
                status: 'I am a boss',
                location: 'Russia'
            },
            {
                id: 4,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
                followed: true,
                fullname: 'Natasha',
                status: 'I am a boss',
                location: 'Russia'
            },
            {
                id: 5,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
                followed: false,
                fullname: 'Olga',
                status: 'I am a boss',
                location: 'Russia'
            },
        ]);
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
                        <img src={u.photoUrl} alt="" style={{width: 40 + 'px'}}/>
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
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}
export default Users;