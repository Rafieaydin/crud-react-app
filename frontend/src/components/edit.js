import { useState, useEffect } from "react";
import axios from 'axios'
import {useNavigate, useParams}  from 'react-router-dom';

const Edit = () => {

    const [username, SetUsername] = useState([]); // state untuk field username
    const [password, SetPassword] = useState([]); // state untuk field passowrd
    const go = useNavigate(); // untuk router next
    const { id } = useParams(); // untuk mendapatkan id

    const getData = () => { // untuk fetch api get data
        axios.get('http://localhost:3000/user/' + id ).then(response => {
            console.log(response.data.erorr);
            if(response.data.error){
                go('/');
            }else{ 
                SetUsername(response.data.username); // untuk set edit data
                SetPassword('');
            }
            
        }).catch(erorr => {
          
        })
    }

    useEffect((e) => { // method ini bergunakan untuk mengrefresh setiap kali ada perubahan seperti mounted di vue
            getData(); 
    },[])

    const updateData = (e) => { // untuk update data
        e.preventDefault();
        const data = {
            'username' : username,
            'password' : password
        }
        axios.put('http://localhost:3000/user/'+id, data).then(response => {
            go('/')
        }).catch(erorr => {
            console.log(erorr.data);
        })
    }

    return (
        <div>
        {/* on submit - setiap kali ada yg submit */}
        <form onSubmit={ updateData }>
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
                    // cara 2 (cata 1 ada di updae)
                    onChange={(e)=> (SetPassword(e.target.value))}
                />
            </div>
            <div className="field">
                <button type="submit" className="button is-primary">Save</button>
            </div>
        </form>
    </div>
    );
}

export default Edit;