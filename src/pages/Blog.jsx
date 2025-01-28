import React, { useEffect, useState, useContext } from 'react';
import useFetch from '../components/UseFetch';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CharactersContext } from '../App';

export const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  
  const { setCharactersList } = useContext(CharactersContext);
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');


  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  console.log(data);

  useEffect(() => {
    if (data) {
      setCharactersList(data.results);
    }
  }, [data]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error</div>;
  const filtered = data.results.filter(personaje => 
    personaje.name.toLowerCase().startsWith(searchParams.get('filter')?.toLowerCase() || '')
  );
  return (
    <>
      <input 
        type="text" 
        onChange={handleChange} 
        className="form-control my-3" 
        value={searchParams.get("filter") || ''} 
        placeholder="Search characters..."
      />

      <div className='my-12 flex justify-evenly'>
        <div className='grid grid-cols-3 gap-16'>
          {filtered.map(personaje => (
            <div className='flex flex-row' key={personaje.id}>
              <img src={personaje.image} className='size-14 rounded-md rounded-e-none' alt={personaje.name} />
              <Link key={personaje.id} className='text-white text-center align-middle bg-blue-700 rounded-md rounded-s-none w-28' to={`/blog/${personaje.id}`}>
                {personaje.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
