import './App.css';
import React, { useEffect, useState } from "react";
import List from './components/List'
import Details from './components/Details'

function App() {
  
  const [users, setUsers] = useState([]);
  const [currentID, setCurrentID] = useState('');
  const [data, setData] = useState({id: 0});
  
  useEffect(() => {
    console.log('mount')
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
        .then(data => setUsers(data))
  }, []);
  
   
  useEffect(() => {
    console.log('mount');
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${currentID}.json`)
      .then((response) => response.json())
        .then(data => setData(data))
  }, [currentID]);
  

  const handleClick = (evt) => {
    if (evt.target.id === currentID) {
      return null
    }
    setData({
      id: 0,
    })
    setCurrentID(evt.target.id);
  }

  return (
    <div className="App">
      <List users={users} handleClick={handleClick} />
      <Details data={data}/>
    </div>
  );
}

export default App;
