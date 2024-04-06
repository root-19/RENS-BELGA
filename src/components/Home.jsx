

const Home = () => {
  return (
    <div className="wave-container flex flex-col items-center justify-center relative overflow-hidden">
      <div className="wave wave1 z-0"></div>
      <div className="wave wave2 z-0"></div>
      <div className="wave wave3 z-0"></div>
      <div className="content text-center flex items-center justify-between z-10 relative" style={{ top: '-100px' }}>
       <div className="text-left pr-8 top-5 relative z-1">
  <h4 className="name font-bold text-gray-700 ">Hi, I'm</h4>
  <h2 className="name text-4xl font-bold bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 bg-clip-text sm:text-4xl text-base">Rens Belga Acuña</h2>
  <h2 className="name text-4xl font-bold bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 bg-clip-text sm:text-4xl text-base">A fullstack Web Developer</h2>


          <div className="flex items-center mt-4">
<a href="file:///path-to-your-cv.pdf" download target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4 sm:w-auto w-full truncate">
  Download CV
</a>


          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Home;
