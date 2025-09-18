import React from 'react'

const AcceptTask = ({data}) => {
  console.log();
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.taskCategory}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div>
        <div className='flex justify-between mt-4 '></div>
        <button className='bg-green-500 py-1  px-3 p-2 p text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
  )
}

export default AcceptTask