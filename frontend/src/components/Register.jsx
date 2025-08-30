import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [userData, setUserData] = useState({
    username: " ",
    email: " ",
    password: " ",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  console.log(error);

  function handleRegistration(e) {
    e.preventDefault();

    async function sendData() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register/",
          userData
        );
        console.log("successfully registered", response.data);
        setError({});
        setSuccess(true);
      } catch (err) {
        setError(err.response.data);
        console.log("Registration error : ", err.response.data);
      }
    }
    sendData();
  }
  return (
    <div className="container max-w-[400px]">
      <h1 className="text-white text-center mb-6 text-xl font-light">
        Create an account.
      </h1>
      <div className="w-full p-3 bg-[#0e0e0e] rounded-lg">
        <form
          className="p-3 flex flex-col text-white "
          onSubmit={handleRegistration}
        >
          <div className="mb-3 p-1">
            <input
              className="form-control w-full border-b-1 border-white outline-none"
              type="text"
              name="username"
              placeholder="Enter your name.."
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
                setError({ ...error, username: "" });
              }}
            />
            {error.username && <small>{error.username[0]} </small>}
          </div>
          <div className="mb-3 p-1">
            <input
              className="form-control w-full border-b-1 border-white outline-none"
              type="email"
              name="email"
              placeholder="Enter your email.."
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                setError({ ...error, email: "" });
              }}
            />
            {error.email && <small>{error.email} </small>}
          </div>

          <div className="mb-3 p-1">
            <input
              className="form-control w-full border-b-1 border-white outline-none"
              type="password"
              name="password"
              placeholder="Enter your password.."
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
                setError({ ...error, password: "" });
              }}
            />
            {error.password && <small>{error.password} </small>}
          </div>
          <button
            type="submit"
            className="mt-6 outline-none rounded-md p-2 w-full cursor-pointer bg-[#5f46ff] hover:bg-[#000000] border-1 border-[#5f46ff]"
          >
            Register
          </button>
        </form>
       
      </div>
       {success && (
          <div
            className="bg-green-100 mt-4 border border-green-400 text-green-700 px-4 py-2 rounded-md relative"
            role="alert"
          >
            <strong class="font-bold">Successfully registered!</strong>
            
            {/* <span class="absolute top-0 bottom-0 right-0 px-4 py-2">
              <svg
                class="fill-current h-6 w-6 text-white-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span> */}
          </div>
        )}
    </div>
  );
}

export default Register;
