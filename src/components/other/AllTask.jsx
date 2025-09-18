import React from 'react'
import { useContext } from 'react';
import {AuthContext } from '../../context/AuthProvider'

const AllTask = ({data}) => {

  const authData= useContext(AuthContext)
 
  



  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 '>
      <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded' >
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>
      

      
     <div className='h-[80%] overflow-auto'>
         {authData.employees.map(function(elem, idx){


    return  <div key={ idx}className='border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded' >
        <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskNumbers.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-pink-400'>{elem.taskNumbers.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-yellow-500'>0</h5>
      
      </div>
      
})}
      
     </div>
        
        
    </div>
  )
}

export default AllTask