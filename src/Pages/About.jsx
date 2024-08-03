

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            <a href="/">MyLogo</a>
          </div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">Discover who we are and what drives us to deliver exceptional service.</p>
          <a href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">Get in Touch</a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <p className="text-lg leading-relaxed">
              We started our journey in [Year], with a vision to revolutionize [Industry/Field]. Over the years, we have achieved several milestones, including [Milestone 1], [Milestone 2], and [Milestone 3]. Our dedication to excellence has helped us become a leader in our field, and we continue to strive for innovation and growth.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/500x300" alt="Our Story" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to [Mission Statement]. We are committed to delivering high-quality [Products/Services] that exceed our customers expectations. Our core values of [Value 1], [Value 2], and [Value 3] guide everything we do.
          </p>
          <img src="https://via.placeholder.com/400x200" alt="Mission" className="mx-auto rounded-lg shadow-md" />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-2">John is the visionary behind our company, leading our team with passion and dedication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p className="mt-2">Jane oversees our technological innovations and ensures our solutions are cutting-edge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alice Johnson</h3>
            <p className="text-gray-600">Marketing Director</p>
            <p className="mt-2">Alice drives our marketing strategies, connecting our brand with the right audience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
              <p className="text-lg italic">The team was exceptional in delivering our project on time and with high quality. We couldn not be happier with the results!</p>
              <p className="mt-4 font-semibold">Emily Davis</p>
              <p className="text-gray-600">Client</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic">A truly professional service with a personal touch. Highly recommend them for any [Industry] needs.</p>
              <p className="mt-4 font-semibold">Michael Brown</p>
              <p className="text-gray-600">Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6">Contact us today to learn more about our services and how we can help you achieve your goals.</p>
        <a href="/contact" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">Contact Us</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default About;
