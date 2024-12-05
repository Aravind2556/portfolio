import React from 'react'

export const Education = () => {
  return (
    <section id="education" className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
        Education
      </h2>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
        Here's a look at my educational journey, from my latest full-stack development training to my foundational education in Tamil Nadu.
      </p>

      {/* Education Entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Full-Stack MERN */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Full-Stack MERN Development</h3>
          <p className="text-lg">[Platform Name]</p>
          <p className="text-sm mt-2 text-gray-500">[Year Started]</p>
          <p className="text-lg mt-4">
            Currently learning Full-Stack MERN (MongoDB, Express, React, Node.js) to strengthen my web development skills and build modern, scalable web applications.
          </p>
          <p className="italic mt-4">Ongoing Learning</p>
        </div>

        {/* MCA */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h3>
          <p className="text-lg">[University Name]</p>
          <p className="text-sm mt-2 text-gray-500">[Year Started] - Ongoing</p>
          <p className="text-lg mt-4">
            I am currently pursuing my MCA at [University Name], advancing my knowledge in computer science, software engineering, and programming techniques.
          </p>
          <p className="italic mt-4">Currently Studying</p>
        </div>

        {/* B.E. */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Bachelor of Engineering (B.E.)</h3>
          <p className="text-lg">[University Name]</p>
          <p className="text-sm mt-2 text-gray-500">[Year Started] - [Year Graduated]</p>
          <p className="text-lg mt-4">
            Completed my Bachelor's in Engineering (B.E.) at [University Name]. This program deepened my technical skills and prepared me for a career in software development.
          </p>
          <p className="italic mt-4">Completed: [Year]</p>
        </div>

        {/* Diploma */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">Diploma in [Your Discipline]</h3>
          <p className="text-lg">[Institute Name]</p>
          <p className="text-sm mt-2 text-gray-500">[Year Completed]</p>
          <p className="text-lg mt-4">
            I pursued a Diploma in [Your Discipline]. This course allowed me to gain hands-on knowledge and practical skills, laying the groundwork for my engineering studies.
          </p>
          <p className="italic mt-4">Completed: [Year]</p>
        </div>

        {/* 12th Grade */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">12th Grade</h3>
          <p className="text-lg">Government School</p>
          <p className="text-sm mt-2 text-gray-500">Tamil Nadu — [Year Completed]</p>
          <p className="text-lg mt-4">
            Completed my 12th grade at a Government School in Tamil Nadu. This helped me strengthen my academic foundation and build the skills needed for further studies.
          </p>
          <p className="italic mt-4">Grade: [Your Grade]</p>
        </div>

        {/* 10th Grade */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">10th Grade</h3>
          <p className="text-lg">Government Higher Secondary School</p>
          <p className="text-sm mt-2 text-gray-500">Tamil Nadu — [Year Completed]</p>
          <p className="text-lg mt-4">
            Completed 10th grade at a Government Higher Secondary School in Tamil Nadu. I gained a solid foundation in general education and developed an interest in technology.
          </p>
          <p className="italic mt-4">Grade: [Your Grade]</p>
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