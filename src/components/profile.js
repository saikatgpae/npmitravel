import { useState } from 'react'
import axios from "axios";

function Profile() {

   // new line start
  const [profileData, setProfileData] = useState(null)

    function getData() {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/profile",
    })
    .then((response) => {
      const res =response.data
      console.log(res.Name);
      setProfileData(({
        name: res.Name,
        qualification: res.Qualification}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div className="App">
      <header className="App-header">
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Name: {profileData.name}</p>
              <p>Qualification: {profileData.qualification}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default Profile;