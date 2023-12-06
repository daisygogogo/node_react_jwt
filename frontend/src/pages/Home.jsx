
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
     <div className='font-bold text-lg mt-10 mb-3'>This is home page</div>   
     <div >
       <Link to="/login" className=" text-blue-700 font-bold mr-4 underline">Login</Link>
       <Link to="/register"  className=" text-blue-700 font-bold mr-4 underline" >Register</Link>
    </div> 
    </>
  );
}

export default Home;
