import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="">
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt="image" />
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="photo"/>
                </div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;