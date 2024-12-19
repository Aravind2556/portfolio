import React from 'react';

export const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12 relative top-7">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          Hello! I’m Aravindan, a passionate full-stack developer based in Erode. I specialize in building modern, responsive web applications using a wide range of technologies. I have a deep love for learning new tools and frameworks, and I’m always excited about solving real-world problems through code.
        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
            {/* Scrollable Skills Box */}
            <div className="h-40 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-sm p-4">
              <ul className="list-none space-y-2 text-lg">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Figma</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-lg">
              I have a degree in M.C.A from Anna univercity. Throughout my academic journey, I developed a strong foundation in software engineering, algorithms, and data structures. This educational background helped shape my problem-solving skills, which I apply to real-world development challenges.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">Software Developer at Innovabyte service</h4>
              <p className="text-lg">
                 I worked as a full-stack developer at Innovabyte service, where I am responsible for developing scalable web applications. I’ve led the development of several features, implemented REST APIs, and integrated third-party services. My role involves collaborating with the team to deliver high-quality software solutions.
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};
