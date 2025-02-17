import React from "react";

const projects = [
  {
    title: "Quiz App",
    tech: "JavaScript | React | Node.js | HTML5 | CSS3",
    description: "A dynamic quiz application using React to test knowledge on various topics.",
  },
  {
    title: "Bookstore Management App",
    tech: "React | Node.js | Firebase",
    description: "A bookstore app with CRUD operations, authentication, and responsive design.",
  }
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.tech}</p>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
