import { AiOutlineCodepenCircle } from "react-icons/ai";

function LogInContainer() {
  return (
    <div className=" relative flex flex-col justify-center items-center w-full h-screen bg-slate-700 bg-[url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center shadow-2xl bg-white/30 rounded-2xl backdrop-blur-sm ">
        <div className="h-auto mt-10 mb-10 flex flex-row justify-center items-center text-5xl">
        <AiOutlineCodepenCircle /> <h1 className="font-bold font-poppins text-3xl">Log In</h1>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-10 px-10"
        >
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Email"
            className="w-72 border-[2px] border-gray-600 px-2 rounded-lg py-2 border-b-[6px] border-b-gray-500 placeholder:font-poppins"
            required
          />
          <input
            type="password"
            name="userName"
            id="userName"
            placeholder="Password"
            className="w-72 border-[2px] border-gray-600 px-2 rounded-lg py-2 border-b-[6px] border-b-gray-500 placeholder:font-poppins"
            required
          />
          <div className="mb-1 mt-5 px-2  rounded-2xl flex flex-col justify-center items-center gap-5">
            <button
              type="submit"
              className="bg-white relative px-8 py-3 border-gray-600 border-2 rounded-md font-poppins border-b-[6px] border-b-gray-500 active:translate-y-[2px] active:border-b-[4px]
                        duration-200 font-semibold hover:bg-gray-300 transition-all
                        "
            >
              Log-in
            </button>

            <div className="px-5 py-5 font-poppins">
              <p className="text-white">
                Don@apost have an account?{" "}
                <a href="#" className="text-blue-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInContainer;