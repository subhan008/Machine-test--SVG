import {useState,useEffect} from 'react'
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";

function login() {

  const navigate = useNavigate()
  const [login,setLogin] = useState({})
  const [loginErr,setLoginErr] = useState("")
     
     const token = JSON.parse(localStorage.getItem("userToken"))
     console.log(token,'----------');
      useEffect(()=>{
       if(token){
       navigate('/')
     }
      },[])
     
     const handleOnChange = (e)=>{
     setLogin({...login,[e.target.name]:e.target.value}) 
     }  
       
     const onSumbit = (e)=>{
       e.preventDefault()  
       console.log('dsdsds');
          axios.post('http://localhost:8000/login',login).then((res)=>{
           console.log('6555555');
         if(res.data.valid){
           localStorage.setItem("user",JSON.stringify(res.data.user))
           localStorage.setItem("userToken",JSON.stringify(res.data.token))       
                             
           navigate('/')
         }else{
           setLoginErr(res.data.message)
         }
        })
     } 

  return (
    <div class="container mx-auto p-8 flex">
    <div class="max-w-md w-full mx-auto">
        <h1 class="text-4xl text-center mb-12 font-thin"> Login</h1>

        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
        { loginErr &&
        <div class="bg-red-100 w-96 ml-10 mt-5 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
  <span class="block sm:inline">{loginErr}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3" >
    <a href="" onClick={()=>{setInavlid()}}>
    <svg class="fill-current h-6 w-6 text-red-500"  role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </a>
  </span>
  
</div> }
            <div class="p-8">
                <form method="POST" class="" action="#" onsubmit="return false;">
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
                      
                        <input onChange={handleOnChange} type="text" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                    </div>
            
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

                        <input onChange={handleOnChange} type="text" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                    </div>

                    <button class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow" onClick={onSumbit}>Login</button>
                </form>
            </div>
            
            <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <a class="font-medium text-indigo-500 cursor-pointer" onClick={()=>{navigate('/signup')}}>Create account</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default login
