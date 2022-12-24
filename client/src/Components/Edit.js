import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const id = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [pet, setPet] = useState({});
    const [newPet, setNewPet] = useState(
      {
        name: pet.name,
        type: pet.type,
        description: pet.description,
        skill1: pet.skill1,
        skill2: pet.skill2,
        skill3: pet.skill3
      }
    );
  
    const handlesubmit = (e) => {
      e.preventDefault();
  
      axios.put(`http://localhost:8000/api/update/${id.id}`, newPet)
        .then(res =>{
          console.log(res);
          navigate('/');
        })
        .catch(err => {
          console.log(err.response.data.errors);
          setErrors(err.response.data.errors)
          navigate(`/pets/${id.id}/edit`)
        });
  
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/displayOne/${id.id}`)
        .then(res => {
            console.log(res);
            setPet(res.data);
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <div className="navbar navbar-light m-1 p-3">
          <h1 className='fs-1'>Pet Shelter</h1>
          <Link to={'/'} >back to home</Link> 
        </div>
    <h3>Edit {pet.name}</h3>
    <form className='form needs-validation d-flex justify-content-between ' style={{width: "55%"}} onSubmit={handlesubmit}>
        <div className='d-flex vertical-align-start flex-column p-3' style={{width: "50%", height: "fit-content"}}>
            <label className='mt-3'>Pet Name</label>
            <input className='form-control' defaultValue={pet.name} type={'text'} onChange={e => setNewPet({...newPet, name: e.target.value})}/>
              {
                errors.name && <p className='error'>{errors.name.message}</p>
              }
            <label className='mt-3'>Pet Type</label>
            <input className='form-control' defaultValue={pet.type} type={'text'} onChange={e => setNewPet({...newPet, type: e.target.value})}/>

            {errors.type && <p className='error'>{errors.type.message}</p>}

            <label className='mt-3'>Pet Description</label>
            <input className='form-control' defaultValue={pet.description} type={'text'} onChange={e => setNewPet({...newPet, description: e.target.value})}/>

            {errors.description && <p className='error'>{errors.description.message}</p>}

            <button type="submit" className="mt-3 btn btn-primary">Edit Pet</button>
        </div>
        <div className='d-flex vertical-align-start flex-column p-3' style={{width: "50%", height: "fit-content"}}>
        <span>Skills (Optional):</span>
            <label className='mt-3'>Skill 1</label>
            <input className='form-control' type={'text'} defaultValue={pet.skill1} onChange={e => setNewPet({...newPet, skill1: e.target.value})}/>
            <label className='mt-3'>Skill 2</label>
            <input className='form-control' type={'text'} defaultValue={pet.skill2} onChange={e => setNewPet({...newPet, skill2: e.target.value})}/>
            <label className='mt-3'>Skill 3</label>
            <input className='form-control' type={'text'} defaultValue={pet.skill3} onChange={e => setNewPet({...newPet, skill3: e.target.value})}/>
        </div>

    </form>
</div>
  )
}

export default Edit;