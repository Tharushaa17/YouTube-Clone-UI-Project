import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl text-red-700 mb-4">404</h1>
        <h1 className="text-3xl text-slate-950 mb-5">Sorry! Page Not Found</h1>
        <Link
          to="/"
          className="bg-purple-800 text-white px-4 py-2 rounded-md text-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
