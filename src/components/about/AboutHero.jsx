import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-8">
        <div className="flex-1">
          <img
            src="https://www.kdkce.edu.in/images/kdk-college-engineering.jpg"
            alt="Forum Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Forum
          </h1>
          <p className="text-gray-600 text-lg">
            Our forum is a vibrant space where like-minded individuals come
            together to share ideas, discuss topics of interest, and build
            meaningful connections. Whether you're here to learn, teach, or
            simply explore, we're glad to have you with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
