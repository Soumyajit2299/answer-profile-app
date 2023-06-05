import React from 'react'

const Profile = ({userData}) => {
  return (
   <>
   <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Address</th>
              <th scope="col">PostCode</th>
              <th scope="col">Cell No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].login.username : "Username"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].dob.date :"dd/MM/yyyy"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].dob.age :"Age"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].location.country :"Country"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].location.state :"State"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].location.city :"City"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? (userData.results[0].location.street.number+","+userData.results[0].location.street.name) :"Address"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].location.postcode :"Postal Code"}</td>
              <td>{userData && userData.results && userData.results.length>0 ? userData.results[0].cell :"Cell No"}</td>
            </tr>
          </tbody>
        </table>
   </>
  )
}

export default Profile