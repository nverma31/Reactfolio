import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link 
        to="/" 
        className="bg-mainColor text-white px-6 py-3 rounded-full hover:bg-mainHover transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound; 