import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CharactersContext } from '../App';

export const BlogCarachter = () => {
    const params = useParams()
    const {charactersList} = useContext(CharactersContext)
    let paramtetrized = charactersList[params.id]
    console.log(paramtetrized)

    return (
        <div className='card'>
            <Link to='/blog' className='btn btn-success'>Volver</Link>
            <div>
                <img src={paramtetrized.image} alt={paramtetrized.name} className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-text'>{paramtetrized.name}</h5>
                    <p className='card-text'>{paramtetrized.species}</p>
                </div>
            </div>
        </div>
    )
}
