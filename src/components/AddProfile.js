import React from 'react'
// import axios from 'axios';


export default function addProfile() {
    // function addAgenda(e){
    //     e.preventDefault();
    //     console.log("you have submitted")
    // }


    function handlePostQuery(e, query="some data"){
      e.preventDefault();
      console.log("Submitted")
      const data = { Agenda: 'read MongoDB' };

        fetch('http://127.0.0.1:5000/query', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        }
  

    
    
  return (
    <div>
        <h3>Add a new Agenda</h3>
        <form>
          <button onClick={handlePostQuery}>Submit</button>
        </form>
        <form action = "http://127.0.0.1:5000/add" method = "post">
          <p>Enter an Agenda:</p>
          <p><input type = "text" name = "nm" /></p>
          <p><input type = "submit" value = "submit" /></p>
        </form>  
    </div>
  )
}



    