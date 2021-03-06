import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="">
            <div>
                {/*<img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt="обои" />*/}
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="аватарка"/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>Статус:{props.profile.lookingForAJob ? ' В поиске работы' : null}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;