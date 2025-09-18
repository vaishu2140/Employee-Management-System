import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'


const AdminDashboard = ({props}) => {
  return (
    <div >
        <Header /><br/>      
        <CreateTask/><br/>
        <AllTask/><br/>
        <h1></h1>
    </div>
  )
}

export default AdminDashboard