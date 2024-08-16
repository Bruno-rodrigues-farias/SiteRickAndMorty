import { useEffect, useState } from "react";
import './style.css';
function App() {

  const [siteRickandMorty, setSiteRickandMorty] = useState([]);


  useEffect(()=>{
    function loadApi(){
      let url = 'https://rickandmortyapi.com/api/character'
      fetch(url)
      .then((response)=> response.json())
      .then((json)=>{
        console.log(json)
        setSiteRickandMorty(json.results);
      })
    }

    loadApi();
  }, []);
  return (
    
<div className="div-principal">
    {siteRickandMorty.map((obj)=>{
      return(
       <div className="div-secundaria">
      
       <p key={obj.key} className="nomePesonagem">{obj.name}</p>


  <img src={obj.image} alt="" className="imagem" />
  <p className="localidade">{obj.location.name}</p>
  
       </div>
       
      )
    })}
   </div>
  );
}

export default App;
