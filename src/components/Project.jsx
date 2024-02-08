
import Maria from "../assets/Maria.png";
import Expenses from "../assets/Expenses.png";
import Materials from "../assets/Materials.png";
import Recipe from "../assets/Recipe.png";
import Cat from "../assets/Cat.png";
import Video from "../assets/Video.png";
import Movie from "../assets/Movie.png";
import Travel from "../assets/travel.png";
const Projects = () =>{
    return(
        <div>
        <p className="text-2xl font-bold underline bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text mt-4">
     Projects
       
      </p>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
        {/* Blog Post 1 */}
        <div className="border rounded overflow-hidden">
          <img
            src={Maria}
            alt="Blog Post 1"
            className="w-full h-54 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://maria-ai-two.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text" >Maria Ai</a>
            </h4>
            <p className="text-gray-700">I created Maria Ai using React.js, Tailwind CSS, DaisyUI, and Node.js. This AI has its own perspective; for instance, if you talk, the response is tailored to what you said. </p>
          </div>
        </div>

       
        <div className="border rounded overflow-hidden">
          <img
            src={Expenses}
            alt="Blog Post 1"
            className="w-full h-54 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
            <a href="https://expense-tracker-fawn-eight.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Expenses tracker</a>
            </h4>
            <p className="text-gray-700">I built an Expenses Tracker using React.js and Tailwind CSS with DaisyUI. I built this because of my experimental teacher.
            </p>
          </div>
        </div>


        <div className="border rounded overflow-hidden">
          <img
            src={Materials}
            alt="Blog Post 1"
            className="w-full h-54 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://e-book-omega.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Learning materials book</a>
            </h4>
            <p className="text-gray-700">
              materials learning book is using react js and tailwind I create to help my self to search books 
            </p>
          </div>
        </div>


        <div className="border rounded overflow-hidden">
          <img
            src={Recipe}
            alt="Blog Post 1"
            className="w-full h-54 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://recipe-tau-taupe.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Recipe List</a>
            </h4>
            <p className="text-gray-700">
             I created a Recipe List using React.js and Tailwind CSS. This is my project to enhance my knowledge. I created this to practice how to handle React queries.
            </p>
          </div>
        </div>

        <div className="border rounded overflow-hidden">
          <img
            src={Cat}
            alt="Blog Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://cat-chat-six.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Cat Chat</a>
            </h4>
            <p className="text-gray-700">
             Cat Chat incorporates Google account authentication for user login, providing a convenient and secure way for users to access the platform. By integrating Google account authentication, users can seamlessly log in using their existing Google credentials, enhancing the user experience and ensuring authentication security.
            </p>
          </div>
        </div>

        <div className="border rounded overflow-hidden">
          <img
            src={Video}
            alt="Blog Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://videocall-eight.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">VideoCall</a>
            </h4>
            <p className="text-gray-700">
             Video Call is a one-on-one video call application built using HTML, CSS, and JavaScript. I developed this project to improve my skills in web development and to provide a platform for seamless video communication.
            </p>
          </div>
        </div>

        <div className="border rounded overflow-hidden">
          <img
            src={Movie}
            alt="Blog Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://e-book-omega.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Movie list</a>
            </h4>
            <p className="text-gray-700">
             The Movie List project is built with HTML, CSS, and JavaScript, featuring a collection of movie trailers and occasionally full-length films. This application aims to provide users with a curated selection of movie trailers and full videos for entertainment purposes. Developed to sharpen my front-end development skills, this project showcases my ability to create visually appealing and interactive web applications.
            </p>
          </div>
        </div>

        <div className="border rounded overflow-hidden">
          <img
            src={Travel}
            alt="Blog Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://tourtravel-two.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Travel tour</a>
            </h4>
            <p className="text-gray-700">
The Travel Tour webpage is a project I created for my client using React.js and Tailwind CSS. This website is designed to showcase various travel destinations and tour packages offered by my client's business. By utilizing React.js and Tailwind CSS, I aimed to deliver a modern and responsive user experience while demonstrating my expertise in front-end development to meet my client's needs effectively.
            </p>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};
export default Projects;