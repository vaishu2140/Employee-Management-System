import React, { useState } from 'react'



const CreateTask = () => {
        const[taskTitle,setTaskTitle]=useState('')
        const[taskDescription,setTaskDescription]=useState('')
        const[taskDate,setTaskDate]=useState('')
        const[assignTo,setAssignTo]=useState('')
         const[category,setCategory]=useState('')

        const [newTask, setNewTask]=useState({})


    const submitHandler = (e)=>{
        e.preventDefault()

        setNewTask({taskTitle,taskDescription,taskDate,category,active:false, newTask:true, failed:false, completed:false})
        const data = JSON.parse(localStorage.getItem('employees'))
        
        data.forEach(function(elem){
           if(assignTo == elem.firstName){
            elem.tasks.push(newTask)
            //elem.taskNumbers.newTask= elem.taskNumbers.newTask+1
            
            
           }

        })
        localStorage.setItem('employees',JSON.stringify(data))
        
        
       { setTaskTitle("")
        setCategory("")
        setTaskDate("")
        setTaskDescription("")
        setAssignTo("")}

        



    }



  return (


    <div className='h-screen  w-full p-10'>

         

        {/* {\\Form} */}
        <div className='h-screen  w-full p-10'>
        
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            
            
            className='flex flex-wrap w-full  items-start justify-between flex-col gap-5'>
                <div className='w-1/2'>
                    <div>
                <div>        
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4\5 rounded outline-none bg transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'></input>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'> Date</h3>
                <input 
                value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}

                className='text-sm py-1 px-2 w-4\5 rounded outline-none bg transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
                <div><h3 className='text-sm text-gray-300 mb-0.5' >Assign To</h3>
                
                <input 
                
                value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    
                    className='text-sm py-1 px-2 w-4\5 rounded outline-none bg transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'></input></div>
                <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                
                <input 
                
                value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}


                className='text-sm py-1 px-2 w-4\5 rounded outline-none bg transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev,etc'></input></div>
                    </div>
                    <div className='w-1/2 text-sm text-gray-300 mb-0.5'><h3>Description</h3>
                <textarea 
                
                value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    
                    className='text-sm py-1 px-2 w-4\5 rounded outline-none bg transparent border-[1px] border-gray-400 mb-4' name ="" id="" cols="30" rows="10" ></textarea>
                </div>
                </div> 
                </div>
                    
                
                
                <div><button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button></div>
            </form>
        </div>
        
    </div>
    </div>
  )
}

export default CreateTask