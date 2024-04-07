
import Maria from "../assets/Maria.png";
import Cat from "../assets/Cat.png";
import Video from "../assets/Video.png";
import Movie from "../assets/Movie.png";
import Quiz from "../assets/Quiz.png";
import Vote from "../assets/Vote.png";
const Projects = () =>{
    return(
      <div>
      <h2 className="text-2xl font-bold underline bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">
          Achievements
      </h2>


      <div className="relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700">
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
  
    
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold pt-20 md:pt-30 lg:pt-40 underline bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text mt-4">
           Projects
          </p>
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl pt-5">
    {/* Blog Post 1 */}
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
          <a href="https://maria-ai-two.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Maria Ai</a>
        </h4>
        <p className="text-gray-700">
          I created Maria Ai using React.js, Tailwind CSS, DaisyUI, and Node.js with Express.js.
        </p>
      </div>
    </div>

      {/* Voting System */}
    <div className="border rounded overflow-hidden">
      <a href="https://videocall-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img
          src={Vote}
          alt="Blog Post 2"
          className="w-full h-auto object-cover cursor-pointer"
        />
      </a>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">
          <a href="https://videocall-eight.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Voting System</a>
        </h4>
        <p className="text-gray-700">
          Our voting system, built with PHP and MySQLi, offers admins CRUD functionalities for managing participants. Users can vote for participants, and the admin page tracks and displays voting results.
        </p>
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
      <a href="https://cat-chat-six.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Cat Chat</a>
    </h4>
    <p className="text-gray-700">
      Cat Chat is a chat application using React.js and Firebase that I built with a lot of knowledge gained in the process.
    </p>
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
      <a href="https://e-book-omega.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Movie list</a>
    </h4>
    <p className="text-gray-700">
      Movie list is created using HTML, CSS, and JS. This includes trailers and sometimes full-length movies.
    </p>
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
      <a href="https://videocall-eight.vercel.app/" className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">VideoCall</a>
    </h4>
    <p className="text-gray-700">
      Video call is a one-on-one video call using HTML, CSS, and JavaScript with WebRTC.
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>

    );
};
export default Projects;
