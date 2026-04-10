import Link from 'next/link';
import React from 'react';

const UsersPage =async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    console.log(users)
    return (
        <div>
            {users.map(user=> <div className='border rounded-2xl p-8 text-center' key={user.id}>
<h2 className='text-2xl font-bold'>{user.name}</h2>
<Link className='btn btn-accent' href={`/users/${user.id}`}>Show details</Link>
            </div>)}
        </div>
    );
};

export default UsersPage;