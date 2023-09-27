import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

function Landing() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()  
  
  return (
    <div class="container">
        <div class="row">
          <div class="search__wrap">
            <h1 className='red__home'> Find Your Movie!</h1>
            <div class="input__wrap">
              <input 
                type="text" 
                placeholder="Search for movies!!" 
                onChange={(event) => {setSearch(event.target.value)}}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/${search}`)
                  }
                }} />   
              <Link to={`/${search}`}>         
              <FontAwesomeIcon icon="magnifying-glass" className='icon' />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Landing