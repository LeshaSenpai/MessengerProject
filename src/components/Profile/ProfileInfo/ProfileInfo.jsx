import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.coverPhoto}>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
                    alt="Cover"
                />
            </div>
            <div className={s.descriptionBlock}>
                <p>Ava + Description</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
