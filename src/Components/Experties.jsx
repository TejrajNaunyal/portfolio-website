import bannerBackground from "../assets/banner.svg";
const Experties = () => {
  return (
    <div className=" bg-gray-200">
      <div className="pt-6">
        <h1 className="text-center text-3xl pb-10 mb-10  underline  font-bold">
          My Experties
        </h1>
      </div>
      <div className="flex">
        <div
          className="w-full text-white text-center "
          style={{
            background: `url(${bannerBackground})`,
            backgroundSize: "cover",
            height: "430px",
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className=" w-2/3">
              <h1 className="text-2xl font-semibold ">
                My Expertise On Technologies
              </h1>
              <p className="text-left mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                eos at? Expedita harum itaque quo!
              </p>
              <button className="mt-5 bg-black hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
  <div className="flex justify-center pl-10 ml-10 w-2/3 flex-wrap space-x-3">
    <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">core java</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">Git Hub</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">React</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">CSS</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 my-3 py-2 font-semibold rounded-full text">HTML</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-3 mx-2 py-2 font-semibold rounded-full text">PHP</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-3 mx-2 py-2 font-semibold rounded-full text">Android Studio</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">Visual Studio</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">Figma</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">Python</p>
    <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">JavaScript</p>
  </div>
</div>

      </div>
    </div>
  );
};
export default Experties;
