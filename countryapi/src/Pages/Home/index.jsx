import React, { useEffect, useState } from 'react'
import './style.css'
const Home = () => {
    const [api, setApi] = useState([]);
    const [search, setSearch] = useState("")
    function getapi() {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setApi(data);
        });
    }
    useEffect(() => {
      getapi();
    }, []);
    return (
        <div className='home'>
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search for a country…'/> 
        <div className='coutrycont'>
    
          {api.filter((x) => x.name.common.toLowerCase().includes(search.toLowerCase()))
          .map((x)=>{
            if(x.name.common === "Israel"){
                return (
                    <div className='plstn'>
                        <img  src="https://www.jewishvoiceforpeace.org/wp-content/uploads/2023/10/free-palestine-e1698086048530.jpeg" alt="" />
                    </div>
             
                    )
            }
            //  if( === "Lezgistan"){
            //     <img  src="https://www.jewishvoiceforpeace.org/wp-content/uploads/2023/10/free-palestine-e1698086048530.jpeg" alt="" />
            // }
            else{
              return(
                <div className='country'>
                    <img src={x.flags.png} alt="" />
                 <div className='info'>
                 <h2 >{x.name.common}</h2>
                    <div className='countryinfo'>
                    <strong>Capital:</strong> <span>{x.capital}</span><br />
                    <strong>Region:</strong> <span>{x.region}</span><br />
                    <strong>Population:</strong> <span>{x.population}</span><br />
                    </div>
                 </div>
          </div>
          )}
        })}
        
      </div>
          </div>
    );
}

export default Home