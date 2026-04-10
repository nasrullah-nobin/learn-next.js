import React from 'react';

const UsersDetails = async ({params}) => {
   const {userId} = await params;
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
   const user = await res.json()
   console.log(user)
    return (
      <div className="card bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">Name: {user.name}</h2>
    <p>Email: {user.email}</p>
    <p>Address: {user.address?.street}</p>
    <p>Website: {user.website}</p>
    <p>Company: {user.company?.name}</p>
  </div>
</div>
    );
};

export default UsersDetails;