import React from "react";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
export const About = () => {

  const  navigate =  useNavigate();

    return (
    <section className=" relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20 bg-white text-gray-900 overflow-hidden">
      
      {/* Left - 3D Globe */}
      <div className="w-full  hidden  md:block lg:w-1/2 h-96">
        {/* <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <mesh rotation={[0.5, 0.5, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#74070e" wireframe />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas> */}

         <div className=" absolute left-[-40px]">
            <img src="/imgs/6778d61303bfc2abf8a13ab9_vector-01-p-500.png" alt="" className=" hidden md:block opacity-30 " />
         </div>
      </div>

      {/* Right - Text Content */}
      <motion.div
        className="w-full lg:w-4xl space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
         We are dedicated to helping individuals and families navigate the complex world of visas and immigration with ease. With years of experience and a commitment to personalized service, our team of experts provides end-to-end support, from initial consultation to visa approval.
        </h2>

        {/* <p className="text-gray-600">
          With years of experience and a commitment to personalized service,
          our team of experts provides end-to-end support, from initial
          consultation to visa approval.
        </p> */}

        <Button
        onClick={()=>navigate("/about")}
        variant="secondary"
        size="lg"
        className="bg-[#2B1700]  text-white px-6 py-3 rounded-full shadow text-lg hover:bg-yellow-400 transition"
         >
          Know more about us
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-3 whitespace-nowrap    gap-6 pt-8">
          <Stat value="10K+" label="Clients Assisted" />
          <Stat value="98%" label="Success Rate" />
          <Stat value="18+" label="Years of Expertise" />
        </div>
      </motion.div>
    </section>
  );
};

// Reusable Stat component
const Stat = ({ value, label }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-5xl font-bold text-yellow-500">{value}</h3>
    <p className="text-gray-600 text-sm font-semibold">{label}</p>
  </motion.div>
);

