const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-900 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tailus Feedus. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
