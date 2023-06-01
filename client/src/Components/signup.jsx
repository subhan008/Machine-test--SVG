import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function signup() {

    const navigate = useNavigate()
    const [signup,setSignup] = useState({})
    const [invalid,setInvalid] = useState('')

    console.log(signup,'signpppppp');

 const handleOnchange = (e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }

  const onSubmit = ()=>{

    if(!signup.fname=="" || !signup.lname=="" ){
        console.log('ccccc');
       axios.post('http://localhost:8000/signup',signup).then((res)=>{
        if(res.data.userAdded){
          navigate('/login')
        }
        else{
          console.log('sasasasa');
          setInvalid(res.data.message)
        }
      })
    }
    else setInvalid('Invalid Entry')
     
  }
  return (

<div>

    <form class="w-full max-w-lg " style={{marginLeft:'31rem',marginTop:"9rem"}}>
       <h1 className="text-4xl font-semibold text-blue-500 mb-10">Signup</h1> 
       { invalid &&
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
  <span class="block sm:inline">{invalid}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3" >
    <a href="" onClick={()=>{setInavlid()}}>
    <svg class="fill-current h-6 w-6 text-red-500"  role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </a>
  </span>
  
</div> }
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input onChange={handleOnchange} name="fname" class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input onChange={handleOnchange} name="lname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Phone
      </label>
      <input onChange={handleOnchange} name="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="123"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input onChange={handleOnchange} name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="@"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input onChange={handleOnchange} name="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gri" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
   <a onClick={()=>{navigate('/login')}} className='text-blue-500 ml-7 hover:underline cursor-pointer underline' >Login</a>
  </div>
  
</form><button onClick={()=>{onSubmit()}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-7">
  Signup
</button>
</div>
  )
}

export default signup
