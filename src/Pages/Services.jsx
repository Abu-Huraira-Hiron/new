

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="w-full bg-teal-500 text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Our Services</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow w-full p-4">
        <section className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">MERN Stack Web Development</h2>
          <p className="text-gray-700">
            Our expert MERN stack web developer,Abu Huraira Hiron, specializes in creating dynamic, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Whether you need a robust backend, a beautiful frontend, or seamless integration of both, we have you covered.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Cyber Security</h2>
          <p className="text-gray-700">
            Protect your digital assets with the expertise of our Cyber Security specialist, Habibur Rahman Himel. We offer comprehensive security solutions to safeguard your business against cyber threats, ensuring your data remains secure and your systems robust against attacks.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Graphics Design</h2>
          <p className="text-gray-700">
            Hasibur Rahman Hasib, our talented graphics designer, creates visually stunning designs that effectively communicate your brand’s message. From logos and brochures to social media graphics and beyond, our design services will help your business stand out.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Proofreading</h2>
          <p className="text-gray-700">
            Ensure your content is error-free and professionally polished with the help of Nasiruddin Shah, our skilled proofreader. We meticulously review your documents for grammar, spelling, and punctuation errors, providing you with flawless, publication-ready content.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Copy Writing</h2>
          <p className="text-gray-700">
            Abu Huraira Hiron, our adept copywriter, crafts compelling and persuasive copy that captures your audience’s attention and drives conversions. Whether you need website content, blog posts, or marketing materials, we deliver high-quality copy that resonates with your target audience.
          </p>
        </section>
      </main>
      <footer className="w-full bg-teal-500 text-white p-4 text-center">
        &copy; 2024 Our Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Services;
