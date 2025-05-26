import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialMediaPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const SocialMediaPopup: React.FC<SocialMediaPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-cyber-dark via-cyber-blue to-cyber-purple p-8 rounded-xl shadow-2xl text-white w-96">
        <h2 className="text-2xl font-extrabold mb-6 text-center">Connect with Me</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <FaTwitter className="text-cyber-blue text-2xl" />
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline hover:text-cyber-light transition"
            >
              Twitter
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FaLinkedin className="text-cyber-blue text-2xl" />
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline hover:text-cyber-light transition"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FaGithub className="text-cyber-blue text-2xl" />
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline hover:text-cyber-light transition"
            >
              GitHub
            </a>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-cyber-light text-cyber-dark py-2 rounded-lg font-semibold hover:bg-cyber-light/90 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SocialMediaPopup;