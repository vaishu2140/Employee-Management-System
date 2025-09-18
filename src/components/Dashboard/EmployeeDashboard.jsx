import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  
  return (
    <div className=' p-10 bg-[#1c1c1c] h-screen'>
        
          <Header data={data}/><br/>
          
          <TaskListNumber data={data}/><br/>
          <TaskList data={data}/><br/>
          
          
          
          <h1></h1>
        
    </div>
  )
}

export default EmployeeDashboard