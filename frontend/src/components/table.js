import { Link } from "react-router-dom";
import { useState, useEffect  } from "react";
import axios from "axios";


const Table = () => {

    const [getUser,setUser] = useState([]); // tempat untuk set dan get table user

    const fetchData = () => { // fate data user
        axios.get('http://localhost:3000/user').then(response=>{
            console.log(response);
            setUser(response.data);
        }).catch(erorr => {
           
        })
    };

    useEffect(() => {  // method ini bergunakan untuk mengrefresh setiap kali ada perubahan seperti mounted di vue
        fetchData();
    },[])
    
    const deleteData = async (id) => {
        await axios.delete('http://localhost:3000/user/'+id).then(response=>{
            console.log("success");
            fetchData();
        }).catch(erorr => {

        })
    }
    return (
        
        <div>
        <Link to="/create" className="button is-primary mt-2 mb-4">Add New</Link>
        {/* <Link to="/add" className="button is-primary mt-2">Add New</Link> */}
        <table className="table is-table is-bordered  is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {getUser.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>
                                <Link to={"/edit/" + user.id} className="button  is-small  is-warning mb-4">Edit</Link>
                                <button onClick={()=>deleteData(user.id)} className="button is-small is-danger ml-3">Delete</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
    )
}

export default Table;