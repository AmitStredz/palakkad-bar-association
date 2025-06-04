
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={()=>navigate('/')}>
            <img 
              src="/images/mainlogo.png" 
              alt="Palakkad District Bar Association" 
              className="h-16 w-16 "
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/48?text=PDBA";
              }}
            />
            <div className="text-left">
              <h1 className="text-legal font-bold leading-tight text-lg md:text-xl">PALAKKAD DISTRICT</h1>
              <h2 className="text-legal-secondary font-semibold text-sm md:text-base">BAR ASSOCIATION</h2>
            </div>
          </div>

          {/* Contact info - visible on larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <span className="text-legal">palakkadbarassociation@gmail.com</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-legal">+91 8089682807</span>
            </div>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/" className="text-gray-700 hover:text-legal font-medium">
              Home
            </Link> */}
            {/* <Link to="/about" className="text-gray-700 hover:text-legal font-medium">
              Who we are?
            </Link> */}
            <Link to="/committees" className="text-gray-700 hover:text-legal font-medium">
              Committees
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-legal font-medium">
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {/* <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-legal"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link> */}
            {/* <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-legal"
              onClick={() => setIsMenuOpen(false)}
            >
              Who we are?
            </Link> */}
            <Link 
              to="/committees" 
              className="block py-2 text-gray-700 hover:text-legal"
              onClick={() => setIsMenuOpen(false)}
            >
              Committees
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-legal"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="text-sm text-gray-600">palakkadbarassociation@gmail.com</p>
              <p className="text-sm text-gray-600 mt-2">+91 8089682807</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
