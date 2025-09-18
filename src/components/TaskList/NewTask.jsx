import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.taskCategory}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
       
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div className='mt-4'>
        <button className='bg-blue-900 w-full'>Accept Task</button>
      </div>
      
      </div>
  )
}

export default NewTask