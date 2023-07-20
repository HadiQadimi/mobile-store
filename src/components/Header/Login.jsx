import {React,useState,useEffect} from 'react'
import '../../style.css/Login.css';
function Login() {
  document.title="ورود / ثبت نام";
  const allfields={username:"" , email:"" , password:""};
  const [formdata,setformdata]= useState(allfields);
  const [formerror,setformerror]= useState({});
  const [issubmit,setissubmit]= useState(false);
  const [showprofile, setshowprofile]= useState(false);
  const handlechange=(e)=>{
    e.preventDefault();
    const {name,value}= e.target;
    setformdata({...formdata, [name]:value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
     setformerror(validate(formdata));
     setissubmit(true);
     console.log(formerror);
  }
  const validate=(values)=>{
    const errors={};
    const regex= /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    if(!values.username){
      errors.username="username is required";
    }else if(values.username.length <3){
      errors.username="username must be bigger than 3 character";
    }
    if(!values.email){
      errors.email="email is required";
    }//else if(!regex.text(values.email)){
      //errors.email="email format is incorrect";
   // }
    if(!values.password){
      errors.password="password is required";
    }else if(values.password.length < 6 ){
      errors.password="password must be least 6 character";
    }
    return errors;
  }
  useEffect(()=>{
    if(Object.keys(formerror).length === 0 & issubmit){
      console.log(formdata);
    }
  },[formerror]);
  return (
    <div className='containerform'>
      <div className='textlogin'>
        <span>فرم ورود/ ثبت نام</span>
      </div>
      {Object.keys(formerror).length === 0 & issubmit ? (
      <div className='issubmit'>...ورود موفق درحال انتقال</div>):
      (<div></div>)}
      <form onSubmit={handlesubmit}>
        <div className='username'>
        <label>نام کاربری</label><br></br>
        <input type="text" name='username' value={formdata.username}
        onChange={handlechange}
        />
        </div>
        <p>{formerror.username}</p>
        <div className='Email'>
          <label>ایمیل</label><br></br>
          <input type="email" name='email' value={formdata.email} 
          onChange={handlechange}
          />
        </div>
        <p>{formerror.email}</p>
        <div className='password'>
          <label>گذرواژه</label><br></br>
          <input type="password" name='password'  value={formdata.password}
          onChange={handlechange}
              />
        </div>
        <p>{formerror.password}</p>
        <div className='btnsubmit2'>
          <button onClick={()=>{
             {Object.keys(formerror).length === 0 & issubmit ? (
            setshowprofile(true)
            ):
           ( 
            setshowprofile(false)
           )
           }
          }}
          >ورود </button>  
           {showprofile && <p> {formdata.username} عزیز خوش آمدید</p>}
        </div>
      </form>
    </div>
  )
}

export default Login