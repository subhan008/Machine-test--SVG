import {useEffect} from 'react'
import {useNavigate,Link} from "react-router-dom";

function Home() {

    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("userToken"))
    console.log(token,'----------');
     useEffect(()=>{
      if(!token){
      navigate('/login')
    }
     },[])
    const onLogout = ()=>{
        console.log('cccc');
        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
                            
        navigate('/login')
      }
  return (
    <div>
      <div className="">
        <img className="mt-28" style={{width:'39rem',height:'12rem',marginLeft:'28rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEus6u4SH_kyAuDMPRLJim1regX5hQ2KDASQ&usqp=CAU" alt="" />
        <div>
            <h1 onClick={()=>{onLogout()}} className="text-blue-700 underline cursor-pointer">logout</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
