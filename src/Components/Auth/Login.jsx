import React , {useState} from "react";

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("email is ", email);
    // console.log("password is ", password);
    handleLogin(email,password);
    setPassword('');
    setEmail('');
  }


  return (
    <div className="bg-black  flex w-screen items-center justify-center h-screen text-3xl font-semibold ">
      <div className=" h-[28rem] w-[30rem] mt-15 border-2 border-teal-500 rounded-2xl">
        <form 
            onSubmit={(e) => { 
              submitHandler(e)
            }}
          className="flex flex-col items-center justify-center h-full">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent text-white outline-none border-teal-500 border-2 rounded-full py-3 mb-10 placeholder:text-gray-500 px-5 text-[1.7rem]"
            type="email" placeholder="Your Email" required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-transparent text-white outline-none border-teal-500 border-2 rounded-full  py-3 mb-8 placeholder:text-gray-500 px-5 text-[1.7rem]"
            type="password" placeholder="Password" required
          />

          <div className="flex w-[25rem] justify-between mb-8 px-4 text-lg">
            <label className="flex items-center text-white ">
              <input type="checkbox" className="mr-2 " />
              Remember me
            </label>
            <a href="#" className="text-teal-500 hover:underline ">
              Forgot Password?
            </a>
          </div>

          <button className=" h-16 w-32 text-black  bg-teal-500 text-[23px] rounded-full px-2 py-3 mb-5 
            hover:scale-105 transition-transform duration-200 ease-in-out">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
