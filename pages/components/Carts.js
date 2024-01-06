import React, { useState } from "react";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    image: "/Project1.png",
    link: "https://github.com/Iskren201/Travel-Website",
  },
  {
    id: 2,
    image: "/Project2.png",
    link: "https://github.com/Iskren201/Project/tree/main/React-Project/data-finance-Functionality/react-app",
  },
  {
    id: 3,
    image: "/Project3.png",
    link: "https://github.com/Iskren201/Project/tree/main/React-Project/rent-home",
  },
  {
    id: 4,
    image: "/Project4.png",
    link: "https://github.com/Iskren201/LinkToMyProject/tree/main/safia-website",
  },
  {
    id: 5,
    image: "/Project5.png",
    link: "https://github.com/Iskren201/Project/tree/main/Tailwind-Css",
  },
  {
    id: 6,
    image: "/Project6.png",
    link: "https://github.com/Iskren201/Hiden-Project/tree/main/Project2",
  },
  {
    id: 7,
    image: "/Project7.png",
    link: "https://github.com/Iskren201/food-ordering-app",
  },
  {
    id: 8,
    image: "/Project8.png",
    link: "https://github.com/Iskren201/CITB549-Client-Server-Technologies",
  },
];

const ProjectsPerPage = 4;

const Carts = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastProject = (currentPage + 1) * ProjectsPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;
  const currentProjects = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(projectData.length / ProjectsPerPage) - 1
      )
    );
  };

  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {currentProjects.map((project) => (
          <div key={project.id} className="basis-1/3 flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"200px"}
                height={"100px"}
                layout="responsive"
                src={project.image}
                alt={`Project ${project.id}`}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {indexOfFirstProject + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {Math.min(indexOfLastProject, projectData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {projectData.length}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrevClick}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={handleNextClick}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carts;
