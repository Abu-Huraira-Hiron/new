
import bgimage from "../assets/bgi.jpg"
import bg from "../assets/bgd.jpg"
import persona from "../assets/persona.jpg"
import personb from "../assets/personb.jpg"
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            <Link to="/">MyLogo</Link>
          </div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
      <img
        src={bgimage}
        alt="bgi"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg md:text-2xl mb-8">Innovative solutions for your digital needs.</p>
            <Link to="/services" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg text-lg">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <h3 className="text-xl font-semibold ml-4">Feature One</h3>
            </div>
            <p className="text-gray-700 mb-4"><b>Feature:</b> We offer a full suite of services to address your digital needs.<br/>
            <b>Description:</b> Whether you need a robust website, strong cybersecurity measures, eye-catching graphics, meticulous proofreading, or compelling copywriting, we provide a one-stop solution. Our integrated approach ensures consistency and quality across all your digital and content requirements.</p>
            <Link to="/services" className="text-blue-600 hover:underline">Learn More</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <h3 className="text-xl font-semibold ml-4">Feature Two</h3>
            </div>
            <p className="text-gray-700 mb-4"><b>Feature:</b> Personalized solutions designed to meet your unique business needs.<br/>
            <b>Description:</b> Our services are customized to align with your specific goals and objectives. From developing a website that reflects your brand identity to creating tailored cybersecurity strategies, graphics that capture your vision, and copy that speaks to your audience, we adapt our approach to fit your unique requirements.</p>
            <Link to="/services" className="text-blue-600 hover:underline">Learn More</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <h3 className="text-xl font-semibold ml-4">Feature Three</h3>
            </div>
            <p className="text-gray-700 mb-4"><b>Feature:</b> Skilled professionals with extensive expertise in their fields.<br/>
            <b>Description:</b> Our team consists of seasoned experts in web development, cybersecurity, graphics design, proofreading, and copywriting. With years of industry experience, we bring high-level skills and knowledge to every project, ensuring top-notch results and reliable service.</p>
            <Link to="/services" className="text-blue-600 hover:underline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8">We are committed to providing top-notch services that meet your digital needs. Our team is dedicated to excellence and innovation.</p>
          <img
      src={bg}
      alt="bgd"
      className="w-full rounded-lg shadow-md"
    />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-4 mb-8">
          <img
      src={persona}
      alt="persona"
      className="w-16 h-16 rounded-full mx-auto mb-4"
    />
            <p className="text-gray-700 mb-4">Excellent service and great results! Highly recommend for anyone looking for top-quality digital solutions.</p>
            <p className="font-semibold text-gray-800">Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-4 mb-8">
            <img src={personb} alt="personb" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 mb-4">A professional team that delivers on their promises. The project was completed ahead of schedule and exceeded expectations.</p>
            <p className="font-semibold text-gray-800">John Smith</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input type="text" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input type="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Message</span>
                <textarea className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
              </label>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">Send Message</button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-2">Phone: (+088) 01933-458846</p>
            <p className="text-gray-700 mb-4">Email: fakirabuhuraira@gmail.com</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-lg"></div> {/* Placeholder for map integration */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 MyCompany. All rights reserved.</p>
          <p className="text-sm">Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
