import  { React,useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {


    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [userEmail,setUserEmail] = useState('')
    const [token] = useToken(userEmail)

    if(token){
      navigate(from,{replace:true})
    }
   
   

    const handleLogin = event => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email,password)
      .then(res=>{
        const user = res.user;

        setUserEmail(email)
       
        form.reset()
        console.log(user)
      })
      .catch(err=>console.log(err))
    }
   
    return (
        <div className='flex justify-center items-center h-[600px]'>
          

        <div className='w-96 p-7'>
        <form onSubmit={handleLogin}>
            <h3 className='text-4xl font-semibold text-center'>Login</h3>
            <br />

            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Email</span>

  </label>
  <input type="text" placeholder="Enter your email " name='email' className="input input-bordered w-full" />

 
</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Password</span>

  </label>
  <input type="password" placeholder="Enter your password " name='password' className="input input-bordered w-full" />

  <label className="label"><span className="label-text">Forget password?</span> </label>

</div>


      <input className='btn btn-accent w-full' value='Login' type="submit" />
    </form>
    <p>New to doctors portal? <Link to='/signup' className='text-secondary'>Create an account</Link> </p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'>Continue With google</button>
        </div>
        </div>
    );
};

export default Login;