

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Explore the latest trends and technologies that are shaping the future of web development...',
      date: 'August 3, 2024',
      author: 'John Doe',
      image: 'https://via.placeholder.com/400',
    },
    {
      id: 2,
      title: 'Understanding Cyber Security',
      excerpt: 'Learn the basics of cyber security and how to protect your digital assets...',
      date: 'July 25, 2024',
      author: 'Jane Smith',
      image: 'https://via.placeholder.com/400',
    },
    // Add more posts here
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white p-6 mb-8">
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="text-gray-500 text-sm">
                  <span>{post.date}</span> &bull; <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center mt-8">
        &copy; 2024 My Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default Blog;
