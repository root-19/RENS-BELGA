

const Home = () => {
  return (
    <div className="wave-container flex flex-col items-center justify-center relative overflow-hidden">
      <div className="wave wave1 z-0"></div>
      <div className="wave wave2 z-0"></div>
      <div className="wave wave3 z-0"></div>
      <div className="content text-center flex items-center justify-between z-10 relative" style={{ top: '-100px' }}>
       <div className="text-left pr-8 top-5 relative z-1">
  <h4 className="name font-bold text-gray-700 ">Hi, I'm</h4>
  <h2 className="name text-4xl font-bold text-slate-950 bg-clip-text sm:text-4xl text-1xl">Rens Belga Acuña</h2>
  <h2 className="name text-4xl font-bold bg-clip-text  text-slate-950 sm:text-4xl text-2xl">A fullstack Web Developer</h2>


          <div className="flex items-center mt-4">
    <div className="flex items-center justify-center">
      <a href="mailto:wasieacuna@email.com" className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Send Email</a>
    
    </div>


          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Home;
