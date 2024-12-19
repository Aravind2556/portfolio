import React from 'react'

export const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-6 py-12 relative top-20">
    {/* Welcome Section */}
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Welcome to My Portfolio!
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Hi, I'm Aravindan. I'm a passionate developer working on exciting projects and learning new technologies.
      </p>
      <a
        href="#projects"
        className="bg-indigo-500 text-white py-3 px-6 rounded-lg text-xl hover:bg-indigo-600 transform transition-all hover:scale-105 duration-300"
      >
        Explore My Work
      </a>
    </div>

    {/* About Me Section */}
    <div id="about-me" className="bg-gray-900 text-white w-full py-16 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          About Me
        </h2>
        <p className="text-lg sm:text-xl mb-6 px-4 sm:px-0">
          I’m Aravindan, a passionate developer with a love for building innovative and user-friendly applications. I specialize in frontend and backend development, always striving to write clean and scalable code. 
          <br />
          <br />
          With a background in full-stack development, I have experience working with technologies such as JavaScript, React, Node.js, and MongoDB. I'm always eager to learn new technologies and collaborate with others to create meaningful projects that make a difference.
        </p>
      </div>
    </div>
  </section>
  )
}