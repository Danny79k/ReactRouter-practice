import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from './UseFetch'

export const BlogCarachter = () => {
    const params = useParams()
    const url = `https://rickandmortyapi.com/api/character/${params.id}`
    const { data, loading, error } = useFetch(url)

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error</div>

    return (
        <div className='card'>
            <Link to='/blog' className='btn btn-success'>Volver</Link>
            <div>
                <img src={data.image} alt={data.name} className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-text'>{data.name}</h5>
                    <p className='card-text'>{data.species}</p>
                </div>
            </div>
        </div>
    )
}
