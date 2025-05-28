
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ],
    'Our Work': [
      { name: 'Services', path: '/services' },
      { name: 'Media & Resources', path: '/media' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-assam-green mb-4">Ulog</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A Promise for Affinity. Reviving Assam's rich heritage through authentic products while empowering rural communities.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-assam-green rounded-full flex items-center justify-center cursor-pointer hover:bg-assam-green-dark transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-assam-green rounded-full flex items-center justify-center cursor-pointer hover:bg-assam-green-dark transition-colors">
                <span className="text-white font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-assam-green rounded-full flex items-center justify-center cursor-pointer hover:bg-assam-green-dark transition-colors">
                <span className="text-white font-bold text-sm">i</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-assam-green mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-gray-300 hover:text-assam-green transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Ulog. All rights reserved. Made with love for Assam's heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
