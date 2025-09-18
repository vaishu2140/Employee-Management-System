import React from 'react'

const Login = ({handleLogin}) => {
  console.log(handleLogin)


  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');
  
  
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log('Form submitted');
    setEmail("")
    setPassword("");
  }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-green-600 p-20'>
            <form 
            onSubmit={(e) => {

              e.preventDefault();
              submitHandler(e);
            }}
            autoComplete='off'
            className='flex flex-col items-center justify-center '>
                <input 
                value={email}
                onChange={(e)=> {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                required className='mt-5  outline-none bg-transparent border-2 border-green-600 py-4 text-xl px-5 rounded-full placeholder:text-grey' type='email' placeholder='Enter Your email'/>
                <input value={password}
                onChange={(e)=> {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                 required className='mt-5  outline-none bg-transparent border-2 border-green-600 py-4 text-xl px-5 rounded-full placeholder:text-grey' type='password' placeholder='Enter Your Password'/>
                <button className='mt-5 text-white border-none outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
                
            </form>
        </div>
         
         
    </div>
  )
}

export default Login