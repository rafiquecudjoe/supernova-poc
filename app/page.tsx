import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-blue-500 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to MyApp</h2>
          <p className="text-xl mb-8">Your one-stop solution for everything you need.</p>
          {/* <Image
            src="/public/alex-brinkman-d4uPQo9EPE8-unsplash.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="mx-auto mb-8"
            priority
          /> */}
          <div className="flex gap-4 justify-center">
            <a
              href="#get-started"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section id="about" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-4">
            Learn more about our mission and values.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <p className="text-lg mb-4">
            Discover the range of services we offer.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-4">
            Get in touch with us for more information.
          </p>
        </div>
      </section>
    </main>
  );
}
