


import React from 'react';
import Xenia from '../assets/xenia.png';
import Editorial from '../assets/editorial.png';
import RebuildHub from '../assets/rebuild-hub.png';
import Tradenza from '../assets/tradenza.png';
import OJ from '../assets/oj.png';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';


export default function ProjectGit() {
    return (
        <>    <motion.div
            className="md:2/4 mx-auto text-center pb-3"
            initial="hidden"
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
        >
            <div className=" bg-deep-blue relative overflow-hidden  mt-7" id="projects">
                <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
                    <div className="text-6xl md:text-7xl flex justify-center text-center md:text-left font-medium text-gray-300 pb-4 mb-16 font-playfair">
                    <span className="text-red">PRO</span>JECTS
                    </div>

                    <div className="grid md:grid-cols-4 sm:md:grid-cols-3 gap-4">
                        {projects.map((proj,keyy) => {
                            return (
                                <div className="p-4 shadow-md space-y-4 bg-white" key={keyy}>
                                    <div className="h-32 overflow-hidden border-b relative">
                                        <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                                    </div>
                                    <div className="text-2xl text-cyan-500">{proj.title}</div>
                                    <div className="h-20 overflow-y-auto text-gray-400 font-light text-xs">
                                        {proj.details}
                                    </div>
                                    <div className="flex justify-end space-x-4 items-center opacity-40">
                                        {proj.links.map((link,i) => {
                                            return (
                                                <a
                                                    href={link.link}
                                                    target={'_blank'}                                                 
                                                    rel="noreferrer"
                                                    key={i}
                                                    className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                                                >
                                                    {link.icon}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    );
}

const projects = [
    {
        title: "Online Judge",
        details: "An Online Judge platform whose primary goal was to host a coding contest and calculate real-time rankings on the basis of submissions made by the contestants. We have used ReactJS, and Redux to develop the client project. For the client-side we have used NodeJS, ExpressJS for API development, MongoDB as a database, Redis-Bull to maintain queue, docker for containerization of project, and Judge0 as code execution engine.",
        img: OJ,
        links: [
            {
                icon: (
                    <img
                        alt=""
                        src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
                        className="h-full"
                    ></img>
                ),
                link: "https://oj-client.vercel.app/"
            },
            {
                icon: <i className="devicon-github-original"></i>,
                link: "https://github.com/PCSB-Web-Team/online-judge-server",
            },
        ]
    },
    {
        title: 'Xenia Website',
        details: "Built a website from scratch for PCSB's annual event Xenia.",
        img: Xenia,
        links: [
            {
                icon: (
                    <img
                        alt=""
                        src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
                        className="h-full"
                    ></img>
                ),
                link: 'https://pcsbxenia.com/',
            },
        ],
    },
    {
        title: 'Rebuild Hub',
        details:
            'A web app that will bridge the gap between waste donors and waste collectors and will have a huge positive impact on collection of recyclable waste.',
        img: RebuildHub,
        links: [
            {
                icon: (
                    <img
                        alt=""
                        src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
                        className="h-full"
                    ></img>
                ),
                link: 'https://rebuild-hub.netlify.app/',
            },
            {
                icon: <i className="devicon-github-original"></i>,
                link: 'https://github.com/Rebuild-Hub/Rebuild-Hub-Client',
            },
        ],
    },
    {
        title: 'The Editorial',
        img: Editorial,
        details: "PICT Debsoc's Editorial website.",
        links: [
            {
                icon: (
                    <img
                        alt=""
                        src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
                        className="h-full"
                    ></img>
                ),
                link: 'https://pictdebsoc.github.io/the_editorial/issue.html',
            },
            {
                icon: <i className="devicon-github-original"></i>,
                link: 'https://github.com/pictdebsoc/the_editorial',
            },
        ],
    },
    {
        title: 'Tradenza',
        details: 'An Attempt to create a platform that will host a trading contest. Still in progress.',
        img: Tradenza,
        links: [
            {
                icon: (
                    <img
                        alt=""
                        src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
                        className="h-full"
                    ></img>
                ),
                link: 'https://60f5901158dfc928b3aef62c--tradenza.netlify.app/',
            },
        ],
    },
];
