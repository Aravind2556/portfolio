import React from 'react'

export const Project = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Projects</h2>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
        Here are some of the projects I have worked on, showcasing my skills in both front-end and back-end development.
      </p>

      {/* Project Entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Backend Intern */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Backend Intern (1 Month)</h3>
          <p className="text-lg">Node.js, Express, MongoDB</p>
         
          <p className="text-lg mt-4">
            During my internship, I worked on backend development for an E-commerce platform using Node.js, Express, and MongoDB. 
            I gained hands-on experience in building REST APIs and managing databases.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
        </div>

        {/* Clone Messenger (React.js) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Messenger Clone (React.js)</h3>
          <p className="text-lg">React.js</p>
          
          <p className="text-lg mt-4">
            A clone of the Messenger application built using React.js. It features real-time chat functionality and a responsive design.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
        </div>

        {/* Full-Stack Book Management with CRUD Operations */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Full-Stack Book Management</h3>
          <p className="text-lg">Node.js, Express, MongoDB, React.js</p>
         
          <p className="text-lg mt-4">
            A full-stack application for book management with CRUD operations. It uses Node.js and MongoDB for the backend and React.js for the front-end.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
        </div>

        {/* Clone First Choice Website (React.js) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">First Choice Website Clone (React.js)</h3>
          <p className="text-lg">React.js</p>
          
          <p className="text-lg mt-4">
            A clone of the First Choice website, built with React.js. The project replicates the layout and user experience of the original website.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
        </div>

        {/* Clone Hotstar (Box Model with Animation) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Hotstar Clone (Box Model & Animation)</h3>
          <p className="text-lg">HTML, CSS, JavaScript</p>
          
          <p className="text-lg mt-4">
            A clone of the Hotstar platform, featuring a custom-designed box model layout and animations for a dynamic user experience.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a
          href="#contact"
          className="bg-indigo-500 text-white py-3 px-6 rounded-lg text-xl hover:bg-indigo-600 transform transition-all hover:scale-105 duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
  )
}
