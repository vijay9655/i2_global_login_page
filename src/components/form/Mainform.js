import axios from "axios"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"


export default function Mainform() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const router=useRouter();

  const onSubmit = (data) => {

    if(data){
      axios.post("https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login",{
        data
      }).then((res)=>{
        if(res.status==201){
          router.push("/"); 
        }
        
      })
    }
  }


const companydetails=[

  {
    name:"Company_Name",
    pattern:"",
    type:"",
    length:""
  },
  {
    name:"GSTIN_Number",
    pattern:{ value:/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/, 
      message: "Please enter a GST number"},type:"",
    length:""
  },

  {
    name:"Import_Export_Code",
    pattern:"",type:"",
    length:""
  },

  {
    name:"Phone_Number",
    pattern:{ value: /^[0-9]+$/, 
      message: "Please enter a valid number"},
    type:"",
    length:10
  },
  {
    name:"E_mail_ID",
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Please enter a valid email"
    },
    type:"",
    length:""
  },
  {
    name:"Website",
    pattern:"",type:""
  },
  
]

    const textArea=["Address_Line_1","Address_Line_2"]
    const addressdetails=[{
        name:"City",
        pattern:"",
        type:"",
        length:""
    },
    {
        name:"State",
        pattern:"",
        type:"",
        length:""

    },
    {
        name:"Pincode",
        pattern:{ value: /^[0-9]+$/, 
            message: "Please enter a valid number"},
        type:"",
        length:6

    }
    
]
const contactperson=[
    {
        name:"POC_Name",
        pattern:"",
        type:"",
        length:""
    },
    {
        name:"Job_Title",
        pattern:"",
        type:"",
        length:""
    },
    {
        name:"Contact_Number_1",
        pattern:{ value: /^[0-9]+$/, 
            message: "Please enter a valid number"},
        type:"number",
        length:10
    },
    {
        name:"Contact_Number_2",
        pattern:{ value: /^[0-9]+$/, 
            message: "Please enter a valid number"},
        type:"number",
        length:10

    },
    {
        name:"Contact_E_mail_ID",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Please enter a valid email"
        },
        type:"emai",
        length:""
        
    },
   
                        
    
]
const addressdetails1 = [{
    name:"Authorised_Person_Name",
    pattern:"",
    type:""
},

{
    name:"Authorised_Person_Designation",
    pattern:"",
    type:""

},
{
    name:"Authorised_Person_Contact_Number",
    pattern:{ value: /^[0-9]+$/, 
        message: "Please enter a valid number"},
    type:"number"

},
{
    name:"Authorised_Person_Contact_Number1",
    pattern:{ value: /^[0-9]+$/, 
        message: "Please enter a valid number"},
    type:"number"

}
,

]


    
  return (
  
<div>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">Company Details</div>

    <form  onSubmit={handleSubmit(onSubmit)}>
        <div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">
   {companydetails.map((e)=>( <div key={`${e.name}`}>
      <input  
      placeholder={`${e.name}*`}
       className="w-full h-8 ps-2"
        {...register(e.name, { required: true,pattern:e.pattern,maxLength:e.length,minLength:e.length})}
        aria-invalid={errors.e ? "true" : "false"}
      />
      {errors[e?.name]?.type === "required"|| "pattern" && (
        <p style={{color:"red"}} className="text-red" role="alert">{errors[e?.name]?.message!=""?errors[e?.name]?.message:`${e.name} is required`}</p>
      )}
</div>))}

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">Address Details</div>


<div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 dark:bg-white text-sm text-black font-medium">
   {textArea.map((e)=>( <div key={e}>
      <textarea 
      placeholder={`${e}*`}
       className="w-full h-20 ps-2"
        {...register(e, { required: true })}
        aria-invalid={errors.e ? "true" : "false"}
      />
     {errors[e?.name]?.type === "required"|| "pattern" && (
        <p style={{color:"red"}} className="text-red" role="alert">{errors[e?.name]?.message!=""?errors[e?.name]?.message:`${e.name} is required`}</p>
      )}
</div>))}


</div>
<div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">

{addressdetails.map((e)=>( <div key={`${e.name}`}>
      <input 
      placeholder={`${e.name}*`}
       className="w-full h-10 ps-2"
        {...register(e.name, { required: true,pattern:e.pattern,maxLength:e.length,minLength:e.length })}
        aria-invalid={errors.e?.name ? "true" : "false"}
      />
     {errors[e?.name]?.type === "required"|| "pattern" && (
        <p style={{color:"red"}} className="text-red" role="alert">{errors[e?.name]?.message!=""?errors[e?.name]?.message:`${e.name} is required`}</p>
      )}
</div>))}
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">Contact Person</div>

<div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">

{contactperson.map((e)=>( <div key={`${e.name}`}>
      <input 
   
      placeholder={`${e.name}*`}
       className="w-full h-10 ps-2"
        {...register(e.name, { required: true ,pattern: e.pattern,maxLength:e.length,minLength:e.length})}
        aria-invalid={errors.e?.name ? "true" : "false"}
      />
     {errors[e?.name]?.type === "required"|| "pattern" && (
        <p style={{color:"red"}} className="text-red" role="alert">{errors[e?.name]?.message!=""?errors[e?.name]?.message:`${e.name} is required`}</p>
      )}
</div>))}
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">Address Details</div>

<div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 dark:bg-white text-sm text-black font-medium">

{addressdetails1.map((e)=>( <div key={`${e.name}`}>
      <input 
      // type={e?.type!=""?e.type:""}
      placeholder={`${e.name}*`}
       className="w-full h-10 ps-2"
        {...register(e.name, { required: true ,pattern:e.pattern,maxLength:e.length,minLength:e.length})}
        aria-invalid={errors.e?.name ? "true" : "false"}
      />
     {errors[e?.name]?.type === "required"||errors[e?.name]?.type === "pattern" && (
        <p style={{color:"red"}} className="text-red" role="alert">{errors[e?.name]?.message!=""?errors[e?.name]?.message:`${e.name} is required`}</p>
      )}
</div>))}
</div>
      
      
      
<div className="grid grid-cols-1 text-center text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-white text-sm text-black font-medium">
  <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 space-x-4">
    <Link href={"/"} className="dark:bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-200" type="button">
      Cancel
    </Link>
    <button className="dark:bg-black text-white px-4 py-2 rounded-md hover:bg-black-800" type="submit">
      Save & Continue
    </button>
  </div>
</div>

      
    </form>
    </div>
  )
}