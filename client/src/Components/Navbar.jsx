import React from 'react'
import {useNavigate,Link} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const onLogout = ()=>{
        console.log('cccc');
        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
                            
        navigate('/login')
      }
  return (   
    
      <nav className="nav  bg-blue-300 h-16 w-full" >
        <div className="p-6 ">
          <h2 className="float-left text-3xl font-semibold ml-16 cursor-pointer" onClick={()=>{navigate('/')}} style={{marginTop:'-11px'}}>SRV <span className="text-fuchsia-800 mr-5">infoTech</span></h2>
        </div>
        <button onClick={()=>{if(window.confirm('Are you sure')){ onLogout() }}} style={{marginTop:'-36px'}} class="mr-14 float-right bg-transparent hover:bg-slate-950 text-slate-950 font-semibold hover:text-white py-2 px-4 border border-slate-950 hover:border-transparent rounded">
      Logout
      </button> 
      </nav>
   
  )
}

export default Navbar
