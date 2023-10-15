const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-6 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p>&copy; 2023 Shoe Shine. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="#"
            className="mx-3 hover:text-gray-400 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="mx-3 hover:text-gray-400 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="mx-3 hover:text-gray-400 transition duration-300"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
