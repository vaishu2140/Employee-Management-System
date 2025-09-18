import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-orange-400 rounded-xl'>
        <div className='flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.taskCategory}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div className='mt-2 bg-violet-500' >
        <button className='w-full'>Complete</button>
        </div>
      
      </div>
  )
}

export default CompleteTask