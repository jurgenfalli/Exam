import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';


const Details = () => {

  const id = useParams();
  const [pet, setPet] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/displayOne/${id.id}`)
    .then(res => {
        console.log(res);
        setPet(res.data);
    })
    .catch(err => console.log(err))
}, [])

const handleLike = (btn) =>{
  axios.put(`http://localhost:8000/api/update/${id.id}`, {
    likes: pet.likes+=1
  })
    .then(res => {
      console.log(res);
      btn.disabled = true;
      document.getElementById('likeNr').innerText = `${pet.likes} like(s)`;
    })
    .catch(err => console.log(err));
}

const handleDel = () => {
  axios.delete(`http://localhost:8000/api/delete/${id.id}`)
  .then(res=> {
    console.log(res);
    navigate('/');
  })
  .catch(err => console.log(err))
}

  return (
    <div>
        <div className="navbar navbar-light m-1 p-3">
          <h1 className='fs-1'>Pet Shelter</h1>
          <Link to={'/'} >back to home</Link> 
        </div>
        <div className='d-flex justify-content-between px-3'>
          <h3>Details about: {pet.name}</h3>
          <button onClick={e => handleDel()} type="button" className="btn btn-primary">Adopt {pet.name}</button>
        </div>
        <div className='border border-dark mx-3 mt-3 p-3'>
          <div className='d-flex justify-content-start'>
            <h4 className='me-5'>Pet Type: </h4>
            <p className='fs-4'>{pet.type}</p>
          </div>
          <div className='d-flex justify-content-start' >
            <h4 className='me-5' >Description:</h4>
            <p className='fs-4'>{pet.description}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <h4 className='me-5' >Skills: </h4>
            <p className='fs-4' style={{marginLeft: "60px"}}>{pet.skill1} </p>
            <p className='fs-4' style={{marginLeft: "60px"}}>{pet.skill2} </p>
            <p className='fs-4' style={{marginLeft: "60px"}}>{pet.skill3} </p>
          </div>
          <button onClick={e => handleLike(e.target)} type="button" className="btn btn-success">Like</button>
          <span id="likeNr" className='ms-5'>{pet.likes} like(s)</span>
        </div>
    </div>
  )
}

export default Details;