import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    // const {data: users = [], refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:5000/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // });
  const[users,setUsers] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },
        [])

    const handleSellerVerify = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(' successfully verified')
              
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Verify</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.rule}</td>
            <td>{ user?.rule !== 'buyer' && <button onClick={() => handleSellerVerify(user._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;