import React, { useEffect, useState } from 'react';
import useFetch from '../components/UseFetch';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState([]);
  
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

  useEffect(() => {
    if (data) {
      const filterValue = searchParams.get('filter')?.toLowerCase() || '';
      const filtered = data.results.filter(personaje => 
        personaje.name.toLowerCase().startsWith(filterValue)
      );
      setFilteredData(filtered);
    }
  }, [data, searchParams]);

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error</div>;

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
          {filteredData.map(personaje => (
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
