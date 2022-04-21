import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
/*import Spinner from "../Spinner/Spinner";*/



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
{/*            <Spinner />*/}
        </div>
    )
}

export default Profile;