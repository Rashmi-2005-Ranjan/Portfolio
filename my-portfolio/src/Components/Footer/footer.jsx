import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Rashmi Ranjan</h2>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/profile.php?id=61569320932551",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/rashmi_ranjan_2255/?hl=en",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/rashmi-ranjan-behera-983b48297/",
            },
            { icon: <FaTwitter />, link: "https://x.com/R18030487Rashmi" },
            {
              icon: <FaGithub />,
              link: "https://github.com/Rashmi-2005-Ranjan",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 text-2xl"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* Copy Right */}
        <p className="text-sm to-gray-400 mt-6">
        © 2025 Rashmi Ranjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
