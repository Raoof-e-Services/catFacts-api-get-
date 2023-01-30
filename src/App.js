// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import './index.css';
function App() {
  const [fact,setFacts] = useState('')


  useEffect(()=>{
    getFacts();
  },[])
  const getFacts = async () => {
    console.log('api calling ~ line no 11 ~ App.js');
    try {
      const response = await fetch('https://catfact.ninja/fact')
      const ResponseCatsinfo = await response.json();
      console.log(ResponseCatsinfo);
      setFacts(ResponseCatsinfo.fact);//here fact is the data from api
    } catch (error) {
      console.error(error,'......');
    } finally {
     
    }
  };
  return (
    <div className="App">
       <h1>Cat Facts</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='facts'>
          <p className='fact_paragraph'>
           {fact}
          </p>
          <div className='fact_button'>
             <button
             onClick={getFacts}
             >Facts</button>
             </div>
  
        </div>
      
    </div>
  );
}

export default App;
