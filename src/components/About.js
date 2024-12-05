import React from 'react'

export const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12 relative top-7">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
        About Me
      </h2>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
        Hello! I’m Aravindan, a passionate full-stack developer based in [Your Location]. I specialize in building modern, responsive web applications using a wide range of technologies. I have a deep love for learning new tools and frameworks, and I’m always excited about solving real-world problems through code.
      </p>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
          <ul className="list-inside list-disc text-lg">
            <li>JavaScript (ES6+)</li>
            <li>React.js & Redux</li>
            <li>Node.js & Express</li>
            <li>MongoDB & SQL (PostgreSQL, MySQL)</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>Version Control (Git & GitHub)</li>
            <li>RESTful APIs & GraphQL</li>
            <li>Responsive Web Design</li>
            <li>Test-Driven Development (TDD)</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Education</h3>
          <p className="text-lg">
            I have a degree in [Your Degree] from [Your University]. Throughout my academic journey, I developed a strong foundation in software engineering, algorithms, and data structures. This educational background helped shape my problem-solving skills, which I apply to real-world development challenges.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12 space-y-8">
        <h3 className="text-2xl font-semibold">Professional Experience</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Software Developer at [Company Name]</h4>
            <p className="text-lg">
              In my current role at [Company Name], I work as a full-stack developer, where I am responsible for developing scalable web applications. I’ve led the development of several features, implemented REST APIs, and integrated third-party services. My role involves collaborating with the team to deliver high-quality software solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Freelance Developer</h4>
            <p className="text-lg">
              As a freelance developer, I’ve worked on several web development projects, including e-commerce sites, blogs, and portfolio sites. I enjoy taking ownership of end-to-end development, from design to deployment. Freelancing has allowed me to sharpen my skills and learn how to manage client expectations.
            </p>
          </div>
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