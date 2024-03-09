export default function PageName() {
  return (
    <div>
      <div className="w-full ">
        <h1>wLogin Signup Round button</h1>
        <div className="py-4 grid place-items-end border ">
          <div
            id="signupLoginBtnElement"
            className=" relative rounded-full w-[140px] sm:w-[160px] flex justify-end items-center"
          >
            <button className="absolute top-0 left-0 py-2 sm:px-4 text-center text-sm sm:text-base w-[85px] sm:w-[93px] rounded-full text-white font-semibold  bg-blue-700  hover:bg-blue-800 hover:text-white  z-10 ">
              Sign Up
            </button>
            <button className="relative py-2 px-2 sm:px-4 w-[95px] sm:w-[105px] bg-blue-300  hover:bg-blue-800 rounded-full  text-sm sm:text-base text-end text-black hover:text-white  font-semibold     z-0">
              Log In
            </button>
          </div>
          <br />
          <div id="signupLoginBtnElement" className="custom-container">
            <button className="custom-btn-signup bg-red-dark">Sign Up</button>
            <button className="custom-btn-login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
