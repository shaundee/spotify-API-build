import React from 'react';

import { getProviders, signIn } from "next-auth/react";


function Login( {providers} ) {
  return (
   <div className='bg-black flex flex-col items-center min-h-screen w-full justify-center '>
     <img className='w-52 mb-5' src = "http://links.papareact.com/9xl" alt=""/>
 

     {Object.values(providers).map((provider)=> (
       <div key={provider.name}>
         <button  className='bg-[#18D860] text-white p-5 rounded-xl'
          onClick={() => signIn(provider.id, { callbackUrl: "/"}
          )}

          >Login with {provider.name}</button>
       </div>
     ))}
  
<div>
<button > </button>
</div>



  </div>

  );
  
}



export default Login;


export async function getServerSideProps() {
 const providers = await getProviders();
 
 return {
  props: {  
    providers,
  },
};

};
