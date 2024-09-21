
import Maria from "../assets/Maria.png";
import Cat from "../assets/Cat.png";
import Video from "../assets/Video.png";
import Movie from "../assets/Movie.png";
import Ecommer from "../assets/Ecommer.jpeg";
import Vote from "../assets/Vote.png";
import Auto from "../assets/Auto.png";
import Record from "../assets/Record.png";
import Inventory from "../assets/Inventory.jpeg";
import Dental from "../assets/Dental.png";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const Projects = () =>{
    return(
      
      <div>
{/*       <h2 className="text-2xl font-bold ml-6   text-slate-950 bg-clip-text">
          Achievements
      </h2>

<br></br>
      <div className="relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden bg-slate-950">
              <div className="flex animate-slide items-center">
                  <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg" target="_blank" rel="noopener noreferrer">
                      <img
                          src="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg"
                          alt="Image 1"
                          className="h-auto w-auto max-w-full max-h-40 mr-10 "
                      />
                  </a>
                  <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg" target="_blank" rel="noopener noreferrer">
                      <img
                          src="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg"
                          alt="Image 1"
                          className="h-auto w-auto max-w-full max-h-40 mr-10 "
                      />
                  </a>
                  <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg" target="_blank" rel="noopener noreferrer">
                      <img
                          src="https://udemy-certificate.s3.amazonaws.com/image/UC-3e9e264c-cb78-477e-bdb0-712ea3e84ab4.jpg"
                          alt="Image 1"
                          className="h-auto w-auto max-w-full max-h-40 mr-10"
                      />
                  </a>
              </div>
          </div>
           */}
{/*           <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> */}

  
    
<p className="text-2xl font-bold mb-10   text-slate-950 bg-clip-text ml-5">
 <br></br>
Project</p>
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl pt-5">
    {/* Blog Post 1 */}
    <div className="border rounded overflow-hidden">
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={Dental}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://maria-ai-two.vercel.app/" className="text-slate-950 bg-clip-text">Dental Clinic Appointment Management System</a>
        </h4>
        <p className="text-gray-700">
The Dental Clinic Appointment Management System is an innovative solution designed to streamline the process of setting and managing appointments. This system is built using PHP, Bootstrap, MySQLi, and AI, providing a seamless experience for both users and administrators without relying on third-party APIs for AI functionality
 </p>
  <div className="flex items-center mt-4 space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>

<div className="border rounded overflow-hidden">
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={Auto}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://maria-ai-two.vercel.app/" className="text-slate-950 bg-clip-text">Rpg Insuranced Auto</a>
        </h4>
        <p className="text-gray-700">
         "RPJ Insured Auto" is likely an insurance agency specializing in automobile insurance. For the webpage, you can incorporate PHP and MySQL for backend functionality like user authentication, data storage, and processing insurance-related information. Tailwind CSS can be used for front-end design to create a modern and responsive user interface. This combination will allow you to build a dynamic and visually appealing website for "RPJ Insured Auto."
        </p>
        
  <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/rps-financial.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>

<div className="border rounded overflow-hidden">
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={Inventory}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://maria-ai-two.vercel.app/" className="text-slate-950 bg-clip-text">Inventory management system</a>
        </h4>
        <p className="text-gray-700">
        The Sari-Sari Store Inventory Management System is a comprehensive solution designed to streamline the management of product stock for small retail stores. Developed using PHP, MySQL, Tailwind CSS, HTML, and AJAX, this system offers a robust platform for both administrators and staff to efficiently handle inventory tasks.
        </p>
        
  <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/inventory-management.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>

<div className="border rounded overflow-hidden">
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={Record}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="" className="text-slate-950 bg-clip-text">EJS Memorial Service</a>
        </h4>
        <p className="text-gray-700">
         EJS Memorial Service, a record management system using PHP, MySQL, and Tailwind CSS can be a robust solution. PHP and MySQL will handle the backend logic for managing records, such as storing, updating, and retrieving data. Tailwind CSS will enhance the frontend by providing a clean and customizable design for the user interface, making it easier to navigate and interact with the records. This combination ensures efficient data management and a user-friendly experience for EJS Memorial Service's record system
        </p>
              
  <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/record-managemnt-system.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
        
      </div>
    </div>


     <div className="border rounded overflow-hidden">
      <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img
          src={Ecommer}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://maria-ai-two.vercel.app/" className="text-slate-950 bg-clip-text">Luxe Layers Apparel</a>
        </h4>
        <p className="text-gray-700">
         Luxer Layer Apparel is a type of shopping website where users can buy beautiful dresses, especially for girls. This website features a simple CRUD (Create, Read, Update, Delete) system that allows users to purchase the available products. The site is built using PHP, MySQLi, and Tailwind CSS.
        </p>

                    
  <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/appareal_Ecomerance.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>


    <div className="border rounded overflow-hidden">
      <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img
          src={Maria}
          alt="Blog Post 1"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://maria-ai-two.vercel.app/" className="text-slate-950 bg-clip-text">Maria Ai</a>
        </h4>
        <p className="text-gray-700">
          Building "Maria Ai" using the MERN stack (MongoDB, Express.js, React.js, Node.js) for educational purposes is a great choice.
        </p>

         <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/appareal_Ecomerance.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>

      {/* Voting System */}
    <div className="border rounded overflow-hidden">
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={Vote}
          alt="Blog Post 2"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="" className="text-slate-950  bg-clip-text">School Online Voting System</a>
        </h4>
        <p className="text-gray-700">
          Our voting system, built with PHP and MySQLi, offers admins CRUD functionalities for managing participants. Users can vote for participants, and the admin page tracks and displays voting results.
        </p>
         <div className="flex items-center mt-4 space-x-6">
          <a href="https://github.com/rens20/voting.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
      </div>
    </div>

<div className="border rounded overflow-hidden">
  <a href={Cat} target="_blank" rel="noopener noreferrer">
    <img
      src={Cat}
      alt="Blog Post 1"
      className="w-full h-auto object-cover cursor-pointer"
    />
  </a>
  <div className="p-4">
    <h4 className="text-xl font-bold mb-2">
      <a href="https://cat-chat-six.vercel.app/" className="text-slate-950 bg-clip-text">Cat Chat</a>
    </h4>
    <p className="text-gray-700">
      Cat Chat is a chat application using React.js and Firebase that I built with a lot of knowledge gained in the process.
    </p>

        <div className="flex items-center mt-4 space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
  </div>
</div>


    

<div className="border rounded overflow-hidden">
  <a href={Movie} target="_blank" rel="noopener noreferrer">
    <img
      src={Movie}
      alt="Blog Post 1"
      className="w-full h-auto object-cover cursor-pointer"
    />
  </a>
  <div className="p-4">
    <h4 className="text-xl font-bold mb-2">
      <a href="https://e-book-omega.vercel.app/" className="text-slate-950  bg-clip-text">Movie list</a>
    </h4>
    <p className="text-gray-700">
      Movie list is created using HTML, CSS, and JS. This includes trailers and sometimes full-length movies.
    </p>

        <div className="flex items-center mt-4 space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
  </div>
</div>


      

         <div className="border rounded overflow-hidden">
  <a href={Video} target="_blank" rel="noopener noreferrer">
    <img
      src={Video}
      alt="Blog Post 1"
      className="w-full h-auto object-cover cursor-pointer"
    />
  </a>
  <div className="p-4">
    <h4 className="text-xl font-bold mb-2">
      <a href="https://videocall-eight.vercel.app/" className="text-slate-950  bg-clip-text">VideoCall</a>
    </h4>
    <p className="text-gray-700">
      Video call is a one-on-one video call using HTML, CSS, and JavaScript with WebRTC.
    </p>

       <div className="flex items-center mt-4 space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
              {/* <span className="hidden md:inline">GitHub</span> */}
          </a>
          <a href="https://maria-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaExternalLinkAlt size={24} />
            {/* <span className="hidden md:inline">View</span> */}
          </a>
        </div>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>

    );
};
export default Projects;

