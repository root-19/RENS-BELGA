import Me from "../assets/Me.jpg";
const AboutMe = () => {
  return (
    <div>
   

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
            <p className="mb-2">
            My name is <span className="text-indigo-500">Rens Belga Acuña</span>, a passionate tech enthusiast and dedicated Full Stack Web Developer. I thrive in the world of development, where every project brings an opportunity to innovate, solve problems, and contribute to a digital landscape that continuously evolves. I believe that technology is a powerful tool for positive change, and I’m driven by the idea of building applications that make a meaningful impact on users and communities alike.

With a deep appreciation for both the creative and logical aspects of coding, I enjoy tackling complex challenges and refining solutions to deliver seamless user experiences. Whether working on the front end to craft intuitive interfaces or diving into back-end development to ensure robust functionality, I’m committed to building applications that are not only functional but also user-centric and scalable.

My journey as a developer is guided by curiosity, continuous learning, and collaboration. Every new tool, language, or framework I explore expands my ability to bring ideas to life and contributes to my growth in a field that never stops evolving. Being a developer is more than a career to me; it’s a fulfilling path where I can blend creativity with technical expertise, make lasting connections, and contribute to an ever-changing technological world.

I'm excited to keep pushing the boundaries of what's possible in web development and to continue making a difference through technology, one line of code at a time.
            </p>
          </div>
        </div>



        <div className="flex flex-col mt-4 lg:flex-row ">
  <div className="lg:w-1/2">
    <h2 className="text-2xl font-bold text-indigo-500 p-2  bg-clip-text">
      Experience
    </h2>
    <div className="ml-6">
      <p>I have hands-on experience in web development, covering both frontend and backend aspects. Throughout my career, I've successfully completed various projects, demonstrating versatility in designing captivating user interfaces and implementing complex server functionalities.

Using modern tools and frameworks, I've tackled challenges in creating dynamic and visually appealing web applications. Additionally, I've worked on full-stack projects and served in roles similar to a capstone project. As a student commissioner, I've also overseen programming tasks, further honing my skills in the field.</p>
    </div>
  </div>

  <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
    <h2 className="text-2xl font-bold  p-2 text-indigo-500 bg-clip-text">
      Education
    </h2>
    
    <div className="ml-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-950 bg-clip-text">Elementary</h2>
        <p>Studied grades 1-6 at Rizza Elementary School</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-950 bg-clip-text">High School</h2>
        <p>Studied grades 7-10 at Rizza National High School</p>
      </div>
       <div className="mb-4">
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
    <div className="flex flex-wrap justify-center gap-4">
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




