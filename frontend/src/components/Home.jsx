import React from "react";
import Buttons from "./Buttons";
function Home() {
  return (
    <div className="container  p-3 bg-[#0e0e0e] rounded-lg border-1 border-[#363535]">
      <div className="text-center p-2 text-white flex flex-col space-y-5 items-center">

        <h1 className="text-2xl font-medium">Stock prediction portal</h1>

        <p className="text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quibusdam totam quo quae similique labore aspernatur inventore porro
          iure . Dolorem culpa vitae, maiores obcaecati exercitationem in
          placeat omnis rer um iure assumenda officiis magnam esse asperiores
          velit doloribus sint iusto blanditiis recusandae, aliquid facere.
          Libero ipsa quod nostrum perferendis. Laborum, harum?
        </p>


       <Buttons text='Login' classname='border-1 border-[#5f46ff]' />
       
      </div>
    </div>
  );
}

export default Home;
