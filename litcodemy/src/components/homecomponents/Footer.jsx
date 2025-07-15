const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Learnify</h3>
            <p className="text-gray-400">Empowering learners around the world through innovation and knowledge.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Blog</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Learnify. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;