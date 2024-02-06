import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="wave-container flex flex-col items-center justify-center relative overflow-hidden">
      <div className="wave wave1 z-0"></div>
      <div className="wave wave2 z-0"></div>
      <div className="wave wave3 z-0"></div>
      <div className="content text-center flex items-center justify-between z-10 relative" style={{ top: '-100px' }}>
        <div className="text-left pr-8 top-5 relative z-1">
          <h4 className="name font-bold text-gray-700 ">Hi, I'm</h4>
          <h2 className="name text-4xl font-bold bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Rens Belga Acuña</h2>
          <h2 className="name text-4xl font-bold bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">A fullstack Web Developer</h2>
          <div className="flex mt-4">
            <a href="https://www.facebook.com/renswashie.acunabelga" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl mx-2 text-gray-700 hover:text-blue-400 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl mx-2 text-gray-700 hover:text-blue-400 cursor-pointer" />
            </a>
            <a href="https://github.com/rens20" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl mx-2 text-gray-700 hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>
        <img
          src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/423105489_7361860187204761_5789048530733235543_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHpW94-pgtiEgxWqvTyLwP0MY-zDqJ47qExj7MOonjuofupE0VydmECG6VIrxAEtm3HROu0iqiVd191_N3d7tK8&_nc_ohc=Yv6NEUEyXSYAX_nzMzS&_nc_ht=scontent.fmnl25-1.fna&oh=03_AdQluYCMNs13YEkvOWlOAzZ-nPFe0pEw9ayJBOkHN3_nxA&oe=65E864AE"
          className="max-w-xs h-auto rounded-lg align-top hidden sm:block"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
