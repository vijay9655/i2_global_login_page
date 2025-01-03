import React, { useState } from 'react'
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useSelector,useDispatch } from 'react-redux'
import { LOGIN_STATUS } from '../../reducers/userReducers'
const Login = (props) => {

    const users = useSelector((state) => state.users); // Access state from Redux

  const dispatch=useDispatch();
  const [login,setLogin]=useState({
    label:"Email Id or mobile number",
    name:"name",
    placeholder:"Enter Email Id or Mobile Number",
    type:"login",
    btn:"Continue",
    navurl:"/signup",
    url:"/login"
  })

  
  const [error,setError]=useState(null)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const router=useRouter();

const validate=(data,type=true)=>{

  
  return users&&users.map((e)=>{
  if(type){
    if(e.data.email==data.name){

      return true;
    }
    return false;
  }
  else {

    if(e.data.email==data.name&&e.data.password==data.password){

return true
    }
    
      return false
    }
  
  
})

}
  const onSubmit = (data) => {
    let getuser= JSON.parse(localStorage.getItem("userlogin"));



  if(login.type=="login" &&validate(data,true).includes(true)){


     setLogin({
      label:"Password",
      name:"Password",
      placeholder:"Enter Password",
      type:"password",
      btn:"Login",
      navurl:"/",
      url:"/login"
    })
    setError(null);

     
// }
// if(getuser.){

// }
      // axios.post("https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login",{
      //   data
      // }).then((res)=>{
      //   if(res.status==201){
      //     router.push("/"); 
      //   }
        
      // })
    }
    
    else if(login.type=="password"&&(validate(data,false).includes(true))){
      
      localStorage.setItem("userlogin",JSON.stringify(data))
      dispatch({
        type: LOGIN_STATUS,
      })
      router.push("/")

    }
    else{
      if(login.type=="login"){
        // errors[`${login.name}`]["message"]="Wrong Email or Mobile number!"
        setError("Wrong Email or Mobile number!");
      // router.push("/")

      }
      else{
     
          // errors[`${login.name}`]["message"]="Wrong Email or Mobile number!"
          setError("Wrong password!");
      // router.push("/")

        
      }
    }

  }
  return (
    <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
    <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
      <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
        <div>
          <h4 class="text-white text-lg font-semibold">Login</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} class="md:col-span-2 w-full py-6 px-6 sm:px-16">
        <div class="mb-6">
          <h3 class="text-gray-800 text-2xl font-bold">Login</h3>
        </div>

        <div class="space-y-6">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">{login.label}</label>
            <div class="relative flex items-center">
            {login.type==="login"?  <input 
              name={login.name} type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder={login.placeholder} 
             
              {...register(login.name, { required: true ,
                // pattern:e.pattern,maxLength:e.length,minLength:e.length
              })}
              aria-invalid={errors.agentname ? "true" : "false"}
            />:  <input 
            
            name={"password"}  type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder={login.placeholder} 
            
            {...register("password", { required: true ,
            value:""
              // pattern:e.pattern,maxLength:e.length,minLength:e.length
            })}
            aria-invalid={errors.agentname ? "true" : "false"}
          />}
           {errors[login.name]?.type === "required"||errors[login.name]?.type === "pattern" && (
              <p style={{color:"red"}} className="text-red" role="alert">{errors[login.name]?.message!=""?errors[login.name]?.message:`${login.name} is required`}</p>
            )}
           
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
            {<p style={{color:"red"}} className="text-red" role="alert">{error}</p>}

          </div>

          

        </div>

        <div class="!mt-12">
          <button type="submit" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
{login.btn}
          </button>
        </div>
    {login.type=="login"&&    <p class="text-gray-800 text-sm mt-6 text-center">Not a Member yet? <a href="/signup" class="text-blue-600 font-semibold hover:underline ml-1">Join Free Now !</a></p>}
      </form>
    </div>
  </div>
  )
}

export default Login