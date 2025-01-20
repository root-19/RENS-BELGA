import Me from "../assets/Me.jpg";
import Background from '../assets/Home-bg.jpg';
const AboutMe = () => {
  return (
    <div 
    style={{
          backgroundImage:  `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
   

      <div className="lg:w-3/2 p-4">
        <p className="text-2xl font-bold  p-2 text-indigo-500 bg-clip-text mt-4">
          About Me
         
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <img
            src={Me}
            alt="profile"
            className="max-w-xs h-auto rounded-lg mb-4 lg:mr-4 lg:mb-0"
          />
          <div className="text-left">
            <p className="mb-2 text-white font-bold text-2xl">
            My name is <span className="text-indigo-500 font-bold">Rens Belga Acuña</span>,I'm a passionate Full Stack Web Developer who thrives on innovation, problem-solving, and creating impactful applications. With a focus on both front-end and back-end development, I aim to deliver user-centric, scalable, and seamless experiences. Driven by curiosity and continuous learning, I embrace every opportunity to explore new technologies and expand my skills. For me, web development is not just a career, but a fulfilling journey of blending creativity with technical expertise, making meaningful contributions, and pushing the boundaries of what's possible.
            </p>
          </div>
        </div>



        <div className="flex flex-col mt-4 lg:flex-row text-white font-bold">
  <div className="lg:w-1/2">
    <h2 className="text-2xl font-bold text-indigo-500 p-2  bg-clip-text">
      Experience
    </h2>
    <div className="ml-6">
      <p>I have hands-on experience in web development, covering both frontend and backend aspects. Throughout my career, I've successfully completed various projects, demonstrating versatility in designing captivating user interfaces and implementing complex server functionalities.

Using modern tools and frameworks, I've tackled challenges in creating dynamic and visually appealing web applications. Additionally, I've worked on full-stack projects and served in roles similar to a capstone project. As a student commissioner, I've also overseen programming tasks, further honing my skills in the field.</p>
    </div>
  </div>

  <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6 text-indigo-500 ">
    <h2 className="text-2xl font-bold  p-2  bg-clip-text">
      Education
    </h2>
    
    <div className="ml-6">
      <div className="mb-4 text-white">
        <h2 className="text-lg font-semibold text-white">Elementary</h2>
        <p>Studied grades 1-6 at Rizza Elementary School</p>
      </div>
      <div className="mb-4 text-white">
        <h2 className="text-lg font-semibold text-white">High School</h2>
        <p>Studied grades 7-10 at Rizza National High School</p>
      </div>
       <div className="mb-4 text-white">
        <h2 className="text-lg font-semibold tex-slate-950 bg-clip-text">Senior High School</h2>
        <p>Studied senior high at  Gateways Institute of Science and Technology</p>
      </div>
    </div>
  </div>
</div>


      </div>
      <div>
      <h2 className="text-2xl font-bold text-indigo-500 p-2 ml-6 bg-clip-text">
      Technologies
    </h2>
    <div className="flex flex-wrap justify-center gap-20">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" className="w-20 h-20 " />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" className="w-20 h-20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-20 h-20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-20 h-20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className="w-20 h-20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-20 h-20"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="w-20 h-20"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-20 h-20"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-20 h-20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" className="w-20 h-20"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="w-20 h-20 "/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"className="w-20 h-20" />


    </div>
</div>

    </div>
  );
};

export default AboutMe;




