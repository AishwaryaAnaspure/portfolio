import React from "react";

const Resume = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800">Resume</h2>
      <a
        href="/resume.pdf"
        className="block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-center w-max mx-auto"
        download
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
