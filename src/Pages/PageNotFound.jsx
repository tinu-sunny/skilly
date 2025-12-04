import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


function PageNotFound() {
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-800 p-2 ">
      
      {/* GIF / Illustration */}
      <img
        src="https://cdn.pixabay.com/animation/2023/03/22/02/29/02-29-49-672_512.gif"
        alt="404 Not Found"
        className=" w-64 md:w-96 mb-4 animate-bounce duration-5000"
      />

      {/* Headings */}
      <h1 className="text-6xl font-extrabold mb-4 text-purple-700">404!</h1>
      <h3 className="text-2xl md:text-3xl mb-2">Looks like you’re lost.</h3>
      <p className="text-center max-w-md mb-8 text-gray-700">
        This page may have been removed, renamed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300">
          Return Home
        </button>
      </Link>

      {/* Optional footer message */}
      <p className="mt-8 text-sm text-gray-500">
        Or try checking the URL or return to the homepage.
      </p>
    </div>

    </>
  );
}

export default PageNotFound;
