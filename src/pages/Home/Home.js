import React from 'react';
import {useHistory} from "react-router-dom";


function Home() {
    const history = useHistory();

    return (
        <div>
        <div>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur dolores excepturi laborum
                officiis totam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, consectetur ducimus ipsam nulla quasi
                ratione! Aperiam cumque delectus, deserunt magnam nostrum officia perspiciatis similique ut!</p>
        </div>
            <button
                type="button"
                onClick={() => history.push('/sign-up')}
            >
                Sign up
            </button>
            <button
                type="button"
                onClick={() => history.push('/profile')}
            >
                Profile
            </button>
            <button
                type="button"
                onClick={() => history.push('/sign-in')}
            >
                Sign In
            </button>
        </div>

    );
}

export default Home;