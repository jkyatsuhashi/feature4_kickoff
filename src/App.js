import * as ENV from './environments.js'
import Child from './Child.js'
import Parse from 'parse';
import { useState, useEffect } from 'react';

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY)
Parse.serverURL=ENV.SERVER_URL

async function getData(){
  const data = Parse.Object.extend("PlayerData")
  const query = new Parse.Query(data);

  try{
    const results = await query.find()

    const playerData = results.map((player) => {
      return {
        name: player.get("name"),
        gamesPlayed: player.get("gamesPlayed"),
        goals: player.get("goals"),
        assists: player.get("assists")
      };
    });


  return playerData

  } catch (error){
    console.log("Error fetching player data", error)
  }
}

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData(){
      const playerData = await getData()
      setData(playerData)
    }
    fetchData()
  }, [])

  
  return (
    <Child playerData={data}/>
  );
}

export default App;
