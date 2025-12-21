import React from "react";

function Greeting() {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <h1 className=" text-white z-10">Hello </h1>
        <h1 className=" dark:text-primary-400 text-black z-10">there,</h1>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col">
        <div className="flex gap-2">
          <h2 className=" text-white z-10">I am </h2>
          <h2 className=" dark:text-primary-400 text-black z-10">Alex</h2>
        </div>

        <p className=" body-lg z-10">
          I am a Front end developer driven to deliver software tools that
          provide best experiences for users.
        </p>
      </div>
    </>
  );
}

export default Greeting;
