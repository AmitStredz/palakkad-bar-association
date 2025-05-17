
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-legal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and association info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="images/logo.svg" 
                alt="Palakkad District Bar Association" 
                className="h-16 w-16"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/48?text=PDBA";
                }}
              />
              <div>
                <h3 className="font-bold">PALAKKAD DISTRICT</h3>
                <h4 className="font-semibold">BAR ASSOCIATION</h4>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-legal-accent">
              <img src="/images/instagram.svg" alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-legal-accent">
              <img src="/images/facebook.svg" alt="Facebook" width="24" height="24" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-legal-accent">
              <img src="/images/twitter-x.svg" alt="Twitter" width="24" height="24" />
              </a>
              <a href="https://telegram.com" aria-label="LinkedIn" className="hover:text-legal-accent">
              <img src="/images/telegram.svg" alt="LinkedIn" width="24" height="24" />
              </a>
              </div>
              </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rules" className="hover:underline">Rules & Regulations</Link>
              </li>
              <li>
                <Link to="/bylaws" className="hover:underline">GICC Byelaws</Link>
              </li>
              <li>
                <Link to="/find-lawyer" className="hover:underline">Find a Lawyer</Link>
              </li>
              <li>
                <Link to="/voters" className="hover:underline">Voters List</Link>
              </li>
              <li>
                <Link to="/notices" className="hover:underline">Notices</Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">News & Events</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact:</h3>
            <address className="not-italic">
              <p className="mb-2">2nd Floor, District Court Complex,</p>
              <p className="mb-2">Kottayi, Thrithampangotukara-Meenakshipuram</p>
              <p className="mb-2">Karathuparicha, Kunathurmedu</p>
              <p className="mb-2">Palakkad, Kerala 678 001</p>
              <p className="mb-4"></p>
              <p className="mb-2">+91 0484-2393244 · +91 0484-2394435</p>
              <p className="mb-2">palakkadbarassociation@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© Copyright palakkadbarcouncil.com</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
          </div>
          <div className="mt-4 md:mt-0 text-xs">
            <p>Powered & Sponsored By Purple4app AI PVT LTD</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
