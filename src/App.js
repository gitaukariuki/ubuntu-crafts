import React from 'react';

// Main App component
const App = () => {
  // Sample product data for African carvings and sculptings
  const products = [
    {
      id: 1,
      title: 'Maasai Warrior Carving',
      description: 'A meticulously hand-carved wooden sculpture depicting a proud Maasai warrior in traditional attire. Intricate details highlight the craftsmanship.',
      price: 120.00,
      rating: 4.8,
      imageUrl: 'https://placehold.co/600x400/A0522D/FFFFFF?text=Maasai+Warrior', // Placeholder image
    },
    {
      id: 2,
      title: 'Abstract Shona Sculpture',
      description: 'A contemporary abstract sculpture crafted from serpentine stone, inspired by traditional Shona art. Each piece is unique and tells its own story.',
      price: 250.00,
      rating: 4.9,
      imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF?text=Shona+Sculpture', // Placeholder image
    },
    {
      id: 3,
      title: 'Zulu Fertility Doll',
      description: 'A beautifully adorned traditional Zulu fertility doll, handcrafted with beads and fabric. A symbol of hope and new beginnings.',
      price: 85.00,
      rating: 4.7,
      imageUrl: 'https://placehold.co/600x400/D2691E/FFFFFF?text=Zulu+Doll', // Placeholder image
    },
    {
      id: 4,
      title: 'Dogon Mask Replica',
      description: 'An authentic replica of a Dogon ceremonial mask from Mali, carved from a single piece of wood and adorned with natural pigments. Perfect for cultural display.',
      price: 180.00,
      rating: 4.6,
      imageUrl: 'https://placehold.co/600x400/CD853F/FFFFFF?text=Dogon+Mask', // Placeholder image
    },
    {
      id: 5,
      title: 'Benin Bronze Head',
      description: 'A striking reproduction of a classical Benin bronze head, showcasing the sophisticated artistry of the ancient Benin Kingdom. Made with high-quality bronze.',
      price: 350.00,
      rating: 5.0,
      imageUrl: 'https://placehold.co/600x400/A52A2A/FFFFFF?text=Benin+Bronze', // Placeholder image
    },
    {
      id: 6,
      title: 'Ashanti Stool (Akua\'ba)',
      description: 'A hand-carved wooden Ashanti stool, traditionally used by the Akan people of Ghana. Represents beauty and fertility, often known as Akua\'ba.',
      price: 95.00,
      rating: 4.5,
      imageUrl: 'https://placehold.co/600x400/8B0000/FFFFFF?text=Ashanti+Stool', // Placeholder image
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen">
      {/* Header Section - Now sticky */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-amber-800 to-orange-900 shadow-lg py-4 px-6 md:px-12 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            <span className="block">Ubuntu Crafts</span>
            <span className="block text-sm md:text-base font-medium text-amber-200">African Carvings & Sculptings</span>
          </h1>
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <a href="#home" className="text-white hover:text-amber-200 transition duration-300 ease-in-out text-lg font-semibold">Home</a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-amber-200 transition duration-300 ease-in-out text-lg font-semibold">Products</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-amber-200 transition duration-300 ease-in-out text-lg font-semibold">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-amber-200 transition duration-300 ease-in-out text-lg font-semibold">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-20"></div> {/* Adjust this value based on header height */}

      {/* Hero Section */}
      <section id="home" className="relative h-96 md:h-[500px] flex items-center justify-center text-center overflow-hidden rounded-b-3xl shadow-xl mx-4 md:mx-8 mt-6">
        <img
          src="/ubuntu2.png" // Changed from https://placehold.co/...
          alt="African Carvings Background"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          // You can remove the onError fallback if you're confident the image exists,
          // or update it to point to a local fallback if /ubuntu.png fails.
          // For now, keeping it can be safe:
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x600/6B4423/FFFFFF?text=African+Artistry+Fallback'; }}
        />
        <div className="relative z-10 p-6 bg-black bg-opacity-40 rounded-xl shadow-2xl max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Discover the Soul of Africa
          </h2>
          <p className="text-lg md:text-xl text-amber-100 mb-8 drop-shadow-md">
            Handcrafted carvings and sculptures, imbued with rich cultural heritage and timeless beauty.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Explore Our Collection
          </button>
        </div>
      </section>
      {/* Product Gallery Section */}
      <section id="products" className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-900 mb-12 drop-shadow-sm">
          Our Exquisite Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12 md:py-16 bg-white rounded-xl shadow-lg mt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-900 mb-8 drop-shadow-sm">
          About Ubuntu Crafts
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          At Ubuntu Crafts, we are passionate about bringing the rich artistic heritage of Africa to the world. We collaborate directly with skilled artisans across the continent to source unique, handcrafted carvings and sculptures. Each piece tells a story, reflecting the traditions, beliefs, and vibrant spirit of African cultures. Our mission is to support these talented artists and share their incredible work, fostering a deeper appreciation for African artistry globally.
        </p>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-16 bg-white rounded-xl shadow-lg mt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-900 mb-8 drop-shadow-sm">
          Get in Touch
        </h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-lg font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="+254 7XX XXX XXX"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Tell us about your inquiry..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-amber-900 text-white py-8 px-6 md:px-12 rounded-t-xl mt-12 shadow-inner">
        <div className="container mx-auto text-center md:flex md:justify-between md:items-start">
          <div className="mb-6 md:mb-0 md:text-left">
            <p className="text-lg font-bold mb-2">Ubuntu Crafts</p>
            <p className="text-sm text-amber-200">123 Artistry Lane, Nairobi, Kenya</p>
            <p className="text-sm text-amber-200">Email: info@ubuntucrafts.com</p>
            <p className="text-sm text-amber-200">Phone: +254 712 345 678</p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold mb-2">Quick Links</p>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:text-amber-300 transition duration-300 ease-in-out">Home</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition duration-300 ease-in-out">Products</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition duration-300 ease-in-out">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition duration-300 ease-in-out">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold mb-2">Connect With Us</p>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition duration-300 ease-in-out">
                <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition duration-300 ease-in-out">
                <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition duration-300 ease-in-out">
                <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-amber-800 text-center">
          <p className="text-sm text-amber-200">
            &copy; {new Date().getFullYear()} Ubuntu Crafts. All rights reserved. Embracing African heritage through art.
          </p>
        </div>
      </footer>
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-2">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/D2691E/FFFFFF?text=Image+Not+Found'; }} // Fallback for broken images
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-extrabold text-amber-700">Ksh {product.price.toFixed(2)}</span> {/* Price in Ksh */}
          <div className="flex items-center text-amber-500">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-gray-700 font-semibold">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default App;
