import LineGradient from "../components/LineGradient";

import { motion } from 'framer-motion';

const container = {
    hidden:{},
    visible:{
        transition: {stragerChildren:0.2}
    }
};

const projectVarient = {
    hidden: { opacity:0,scale:0.8},
    visible: {opacity:1,scale: 1}
} 


const Project  = ({title}) => {
    const overlayStyles = 'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center item-center text-center p-16 text-deep-blue';

    const projectTitle = title.split(" ").join("-").toLowerCase();
    

    return (
        <motion.div 
        variants={projectTitle} className = 'relative'>
            <div className = {overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, officia.
                  
                </p>
           
            </div>
          
            <img src={`./src/assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}




const Projects = () => {

    return (
        <>
            <section id='projects' className="pt-48 pb-48">
                {/* HEADING */}

                <motion.div
                    className="md:2/4 mx-auto text-center pb-48"
                    initial="hidden"
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
                >

                    <div>
                        <p className="font-playfair font-semibold text-4xl">
                            <span className="text-red">PRO</span>JECTS
                        </p>
                        <div className="flex justify-center mt-5 ">
                            <LineGradient width="w-1/3" />
                        </div>
                    </div>


                    <p className="mt-10 mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, distinctio!
                    </p>

                </motion.div>

                {/* PROJECTS SECTION */}

                <div className="flex justify-center">

                    <motion.div
                        className="sm:grid sm:grid-cols-3"
                        initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        <div className="flex justify-center text-center items-center p-10 bg-re
                         max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold bg-red">
                            BEAUTIFUL USER INTERFACE
                        </div>
                        <Project title = "Project-1" />
                        <Project title = "Project-2" />


                        {/* ROW -2  */}
                        <Project title = "Project-3" />
                        <Project title = "Project-4" />
                        <Project title = "Project-5" />


                        {/* ROW -3  */}
                        <Project title = "Project-6" />
                        <Project title = "Project-7"/>

                        <div className="flex justify-center text-center items-center p-10 bg-blue
                         max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                            SMOOTH USER EXPERIENCE
                        </div>



                    </motion.div>


                </div>
            </section>

        </>
    )

}

export default Projects;