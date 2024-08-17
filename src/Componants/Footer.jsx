
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" glass text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Gadget Galaxy</h2>
            <p className="text-gray-400">
              Gadget Galaxy is your one-stop shop for the latest and greatest gadgets. We offer a wide selection of products from top brands, ensuring that you find the perfect tech for your needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              
              <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <ul>
              <li className="mb-2 text-gray-400">Email: info@gadgetgalaxy.com</li>
              <li className="mb-2 text-gray-400">Phone: +1 123-456-7890</li>
              <li className="mb-2 text-gray-400">Address: 123 Gadget St, Tech City, USA</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-6">
              <li>
                <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gadget Galaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
