import react from 'react'


const TaskListNumber = ({data}) => {
  return (
    <>
      <div className='flex justify-between w-full gap-5 mb-6'>
        <div className='rounded-xl h-40 w-[45%] py-6 px-10 bg-red-400'>
          <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl h-40 w-[45%] py-6 px-10 bg-blue-400'>
          <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='rounded-xl h-40 w-[45%] py-6 px-10 bg-green-400'>
          <h2 className='text-2xl font-semibold'>{data.taskNumbers.active}</h2>
          <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className='rounded-xl h-40 w-[45%] py-6 px-10 bg-yellow-400'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      </div>
    </>
  )
}

export default TaskListNumber
