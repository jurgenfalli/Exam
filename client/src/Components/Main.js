import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/displayAll`)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

  return (
    <div className='m-3'>
        <div className="navbar navbar-light m-1 p-3">
            <h1 className='fs-1'>Pet Shelter</h1>
            <Link to={'/pets/new'} >add a pet to the shelter</Link>
        </div>
        <h3>These pets are looking for a good home</h3>
        <table className='table table-sm table-striped table-bordered mt-5' style={{width: "40%"}}>
            <tbody>
                <tr>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Type</th>
                    <th className='p-2'>Actions</th>
                </tr>
                {
                    data.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.name}</td>
                                <td>{e.type}</td>
                                <td className='d-flex justify-content-between px-5'>
                                    <Link to={`/pets/${e._id}`}>details</Link>
                                    <Link to={`pets/${e._id}/edit`}>edit</Link>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Main;