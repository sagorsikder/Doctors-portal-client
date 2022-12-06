import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return data;
        }
    })

    const handleMakeAdmin=(id)=>{

        console.log('admin id : ',id)
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data=>{
            alert('make admin successfully')
            if(data.modifiedCount>0){
                refetch();
            }
        })

    }
    return (
        <div>
          <h1 className='text-3xl text-center'>All Users</h1>
          <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
     {
        users.map((user,i)=><tr key={user._id}>
            <th>{i}</th>
            <td>Sagor sikder</td>
            <td>{user?.email}</td>
            <td>{ user?.role !=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-secondary'>Make Admin</button>}</td>
            <td> <button className='btn btn-success'>Delete</button></td>
          </tr>)
     }

     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;