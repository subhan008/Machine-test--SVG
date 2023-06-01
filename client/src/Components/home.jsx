import {useEffect,useState} from 'react'
import {useNavigate,Link} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function Home() {
const [usersData,setUsersData] = useState([])
const [editProfileModal,setEditProfileModal] = useState(false)
const [editProfile,setEditProfile] = useState({})

console.log(usersData,'6555555');

    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("userToken"))
    const localUser = JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
      setEditProfile(localUser)

    },[])
    console.log(editProfile,'----------');
     useEffect(()=>{
      if(!token){
      navigate('/login')
    }
     },[])

     useEffect(()=>{
      axios.get(`http://localhost:8000/`).then((res)=>{
         setUsersData(res.data.usersData)
     })
     },[])

  const  handleOnDelete = (id)=>{
    axios.delete(`http://localhost:8000/delete-user/${id}`).then((res)=>{
      location.reload();
     })
  }
  const  handleOnChange = (e)=>{
    setEditProfile({...editProfile,[e.target.name]:e.target.value})
  }
  const  handleOnEdit = (e)=>{
    axios.put('http://localhost:8000/edit-profile',editProfile).then((res)=>{
      location.reload();
     })
  }
  

  return (
    <>
   <Navbar/>
    <div>
      <div className="flex ml-20 mt-6">
        
           <button style={{marginLeft:'68rem'}} onClick={()=>{setEditProfileModal(true)}} class="mt-6 ml-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Edit Profile
            </button>
            <button style={{marginLeft:'1rem'}} class="mt-6 ml-60 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download UserList"/>
            </button>
            
      </div>
 
    <div class="flex flex-col ml-32 mt-14" style={{width:'80rem'}}>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light" id="table-to-xls">
          <thead
            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Last Name</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Phone</th>
              <th scope="col" class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
          {usersData.map((element)=>{
            return <tr
            class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
            <td class="whitespace-nowrap px-6 py-4 text-lg">{element.fname}</td>
            <td class="whitespace-nowrap px-6 py-4 text-lg">{element.lname}</td>
            <td class="whitespace-nowrap px-6 py-4 text-lg">{element.email}</td>
            <td class="whitespace-nowrap px-6 py-4 text-lg">{element.phone}</td>
            <td class="whitespace-nowrap px-6 py-4">
        
          <button onClick={()=>{if(window.confirm('Are you sure')){ handleOnDelete(element._id) }}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Delete
          </button>
            </td>
          </tr>
          })}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    {editProfileModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" style={{height:"30rem",width:'28rem'}}>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold ml-36">
                    Edit Profile
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setEditProfileModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/} 
                <div class="w-full max-w-xs">
                <form class="w-full max-w-lg " style={{marginLeft:'25px',marginTop:"1rem",width:'25rem'}}>
       
       
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input value={editProfile.fname} onChange={handleOnChange}  name="fname" class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input  value={editProfile.lname} onChange={handleOnChange} name="lname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Phone
      </label>
      <input value={editProfile.phone} onChange={handleOnChange}  name="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="123"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input value={editProfile.email} onChange={handleOnChange} name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="@"/>
    </div>
  </div>
 
 
  
</form>
  
</div>

                {/*footer*/}
                <div className="flex  items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                
                  <button style={{marginRight:"156px",marginTop:'-11px'}} onClick={handleOnEdit}
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Home
