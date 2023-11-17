import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  heading: string;
}

const Header: React.FC<HeaderProps> = ({
  heading,
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-center">
        <Link to="/">
          <img
            alt=""
            className="h-20 w-20"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </Link>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      
    </div>
  );
};

export default Header;
