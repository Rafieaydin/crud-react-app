import { useState } from "react";
import axios from "axios";
import {useNavigate}  from 'react-router-dom';

const Create = () => {
    const go  = useNavigate();
    const [username, SetUsername] = useState([]);
    const [password, SetPassword] = useState([]);

    const PostData = (e) => {
        e.preventDefault();
        var data = {
            'username' : username,
            'password' : password
        }

        axios.post('http://localhost:3000/', data).then(response => {
            // redirect back
            go('/');
        }).catch(erorr => {
            console.log(erorr.data)
        })
    
    }

    const SetPasswords = (val) => {
        SetPassword(val.target.value)
    }
    return (
        <div>
        <form onSubmit={ PostData }>
            <div className="field">
                <label className="label">Username</label>
                <input 
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    // cara 2
                    onChange={(e)=>{SetUsername(e.target.value)}}
                />
            </div>
            <div className="field">
                <label className="label">Password</label>
                <input 
                    className="input"
                    type="text"
                    placeholder="Password"
                    value={password}
                    // cara 1
                    onChange={SetPasswords}
                />
            </div>
            <div className="field">
                <button type="submit" className="button is-primary">Save</button>
            </div>
        </form>
    </div>
    );
}

export default Create;

