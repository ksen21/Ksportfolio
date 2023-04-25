import React from 'react';

export default function SkillsGit() {
  return (
    <div className="max-w-7xl p-5 py-20" id="skills">
      <div className="text-6xl md:text-7xl text-center flex justify-center font-playfair md:text-left font-medium text-gray-300 pb-4 mb-16">
        Skills
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill,i) => {
          return (
            <div className="flex space-x-2 items-center" key={i}>
              {skill.icon && <div className="text-7xl">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-14  w-14" alt=""></img>}
              <div className=" text-gray-500">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const skills = [
//   {
//     icon: <i className="devicon-spring-plain colored"></i>,
//     skill: 'Spring',
//   },
//   {
//     icon: <i className="devicon-apachekafka-original colored"></i>,
//     skill: 'Apache Kafka',
//   },
   {
    icon: <i className="devicon-react-original colored"></i>,
    skill: 'React',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    skill: 'JavaScript',
  },
  {
    icon: <i className="devicon-nodejs-plain colored"></i>,
    skill: 'Node JS',
  },
  {
    icon: <i className="devicon-express-original colored"></i>,
    skill: 'Express JS',
  },
//   {
//     icon: <i className="devicon-nginx-original colored"></i>,
//     skill: "Nginx"
//   },

  {
    icon: <i className="devicon-redux-original colored"></i>,
    skill: 'Redux',
  },
  {
    icon: <i className="devicon-bootstrap-plain colored"></i>,
    skill: 'Bootstrap',
  },
  {
    icon: <i className="devicon-materialui-plain colored"></i>,
    skill: 'Material UI',
  },
  {
    icon: <i className="devicon-css3-plain colored"></i>,
    skill: 'CSS',
  },
  {
    icon: <i className="devicon-tailwindcss-plain colored"></i>,
    skill: 'Tailwind CSS',
  },

  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    skill: 'C++',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    skill: 'Python',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    skill: 'C',
  },

  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    skill: 'MySQL',
  },
];
