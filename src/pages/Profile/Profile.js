import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import styles from './Profile.module.css';
import {useHistory} from "react-router-dom";

function Profile() {
    const history = useHistory();
    const { user } = useContext(AuthContext);

    return (
        <div className={styles['container-profile']}>
            <h1>Hi <span className={styles.user}>{user && user.username}</span></h1>
            <p>Good to see you (again)!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus in, maxime necessitatibus officiis similique!</p>
            <div className={styles.profile}>
                <button
                    type="button"
                    onClick={() => history.push('/home')}
                >
                    Home
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/sign-in')}
                >
                    Sign In
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/sign-up')}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Profile;