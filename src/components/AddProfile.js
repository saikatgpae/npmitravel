import React from 'react'


export default function addProfile() {
    function addAgenda(e){
        e.preventDefault();
        console.log("you have submitted")
    }
  return (
    <div>
        <h3>Add a new Agenda</h3>
        <form action="/post_form" encType="multipart/form-data" method="POST">
            <input type="text" name="username"></input>
            <input type="password" name="password"></input>
        </form>
        {/* <form action="/post_form" enctype="multipart/form-data" method="POST">
            <label>Agenda </label>
            <input name='fname' id='fname' type='text' placeholder='type an agenda'></input>
            <button onClick={addAgenda}>Submit</button>
        </form> */}
        {/* <form action="/post_form" enctype="multipart/form-data" method="POST"> 
            <input type="text" name="username">
            <input type="password" name="password">
        </form> */}
    </div>
  )
}
