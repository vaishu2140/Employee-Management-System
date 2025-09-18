import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/other/Header'

import TaskListNumber from './components/other/TaskListNumber'
import TaskList from './components/TaskList/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData
      
    }
    
  }, [] )
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
        
  //       setUser(loggedInUser.role)
  //     }
    
  //   }
  // }, [authData])



//   const handleLogin = (email, password) => {
//     if (email === 'admin@me.com' && password === '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } 
//     else if (authData){
//       const employee = authData.employees.find((e) => email === e.email && password === e.password)
//       if (employee) {
        
//         setUser('employee')
//         setloggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({
//   role: 'employee', data:'employee'   // or employee.name (depending on your JSON)
// }))
//     }
//     }
//     else {
//       alert('Invalid credentials')
//     }
//   }





const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
  } 
  else if (authData) {
    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setloggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee, // better to save actual employee info
        })
      );
    } else {
      alert("Invalid credentials"); // ✅ catches wrong employee info
    }
  } 
  else {
    alert("Invalid credentials"); // ✅ catches when no authData exists
  }
};







  useEffect(() => {
   setLocalStorage();
    getLocalStorage();
  }, []);

    


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:" "}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/>:""}
      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />:""}
   
    {/* {<Login />} */}
    {/* {{  <EmployeeDashboard/>} 
    {<AdminDashboard />} } */}
   
   
   
    </>
  )
}

export default App



