import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
function AccesDeclinepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-800 p-2 ">
        {/* GIF / Illustration */}
        <img
          src="https://i.pinimg.com/1200x/b2/0d/68/b20d68e0172f470137136e6bb42e46b0.jpg"
          alt="403  Access Restricted"
          className=" w-40 md:w-90 mb-4 h-60 animate-bounce  duration-5000 bg-transparent"
        />

        {/* Headings */}
        <h1 className="text-6xl font-extrabold mb-4 text-purple-700">403 – Oops!   Access Restricted</h1>
        <h3 className="text-2xl md:text-3xl mb-2">You are not authorized to view this page.
</h3>
        <p className="text-center max-w-md mb-8 text-gray-700">
       Please return to the homepage or contact the administrator if you believe this is an error.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300">
            Return Home
          </button>
        </Link>

        {/* Optional footer message */}
        <p className="mt-8 text-sm text-gray-500">
         Please return to the homepage or check the URL and try again.
        </p>
      </div>
    </>
  )
}

export default AccesDeclinepage