import  { React,useContext,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';


const SignUp = () => {

     const {createUser} = useContext(AuthContext)
     const navigate = useNavigate();
     const [userEmail,setUserEmail] = useState('')
     const [token] = useToken(userEmail)


     if(token){

      navigate('/')
     }



    const handleSubmit = event => {
      event.preventDefault()
      const form =  event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;



      createUser(email,password)
      .then(res =>{
        const user = res.user;
        saveUser(user)
        form.reset()
       
      })
      .catch(err=>console.log(err))


      const saveUser = user=>{

        fetch('http://localhost:5000/users',{

        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data=>{
        
          setUserEmail(email)
          
        })
      }
 
     
    }

  
  
    return (
        <div className='flex justify-center items-center h-[600px] my-8'>
          

        <div className='w-96 p-7'>
        <form onSubmit={handleSubmit}>
            <h3 className='text-4xl font-semibold text-center'>Sign Up</h3>
            <br />

            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Name</span>

  </label>
  <input type="text" placeholder="Enter your name " name='name' className="input input-bordered w-full" />

 
</div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Email</span>

  </label>
  <input type="text" placeholder="Enter your email " name='email'  className="input input-bordered w-full" />

</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Password</span>

  </label>
  <input type="password" placeholder="Enter your password " name='password' className="input input-bordered w-full" />
  <label className="label"><span className="label-text">Forget password?</span> </label>

</div>


      <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
    </form>
    <p>Already have an account? <Link to='/login' className='text-secondary'>login</Link> </p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'>Continue With google</button>
        </div>
        </div>
    );
};

export default SignUp;