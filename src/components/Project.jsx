
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
            <p className="text-gray-700">
             I created Maria Ai using react.js,tailwind,daisyUi and node.js.
            </p>
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
            <a href="https://expense-tracker-fawn-eight.vercel.app/"  className="bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text">Expnses tracker</a>
            </h4>
            <p className="text-gray-700">
             i builed EXpenses tracker  using react.js and tailwind with daisyUi i builed this beacuse of my expoerwment teacher
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
             Recipe list I create using react.js and tailwind this my project to enchance my knowledge i create this to practice how to handle React query
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
             Cat chat is a chat application using react.js and firebase when I builed have a lot knowledge having I build.
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
             video call is one on one Videocall using html,css and javascirpt 
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
             Movie lis is create using html css and js this movie is trailer movies but somethis is full video
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
             travel tour is webpage i create to my clinent using react.js and tailwind
            </p>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};
export default Projects;