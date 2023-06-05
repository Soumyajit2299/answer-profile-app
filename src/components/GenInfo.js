import React from "react";

const GenInfo = ({userData}) => {
  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="card" style={{width: "18rem", marginTop: "2rem"}}>
        <img
          src={userData && userData.results && userData.results.length>0 ? userData.results[0].picture.large :"https://randomuser.me/api/portraits/men/92.jpg"}
          className="card-img-top"
          alt="User Avatar Lg"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Name:</b> {userData && userData.results && userData.results.length>0 ? userData.results[0].name.title+"."+userData.results[0].name.first+" "+userData.results[0].name.last :"John Doe"}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Gender:</b> {userData && userData.results && userData.results.length>0 ? userData.results[0].gender : "Male"}
          </li>
          <li className="list-group-item">
            <b>Email:</b> {userData && userData.results && userData.results.length>0 ? userData.results[0].email:"abc@gmail.com"}
          </li>
          <li className="list-group-item">
            <b>Phone:</b> {userData && userData.results && userData.results.length>0? userData.results[0].phone :"9931041832"}
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default GenInfo;
