import React, { useEffect, useRef } from "react";
import { CardContainer } from "../ui/CardContainer";
import { IconCheck } from "@tabler/icons-react";
import { List } from "../ui/List";
import { motion } from "framer-motion";
import * as THREE from "three";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const List_Data = [
  { id: "1", icon: <IconCheck className="w-3.5 h-3.5 text-[#2B1700]" />, label: "Tailored solutions" },
  { id: "2", icon: <IconCheck className="w-3.5 h-3.5 text-[#2B1700]" />, label: "Expert team" },
  { id: "3", icon: <IconCheck className="w-3.5 h-3.5 text-[#2B1700]" />, label: "High approval rates" },
];

export const ReadyCard = () => {
  const canvasRef = useRef(null);
  const  navgate =  useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    camera.position.z = 4;

    const geometry = new THREE.BufferGeometry();
    const dotsCount = 200;
    const positions = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount * 3; i++) positions[i] = (Math.random() - 0.5) * 10;
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0x000000, size: 0.04 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0015;
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-4 sm:px-6 lg:px-10"
    >
      <CardContainer className="relative flex flex-col md:flex-row items-center justify-between bg-yellow-400/80 w-full max-w-7xl mx-auto h-auto md:h-96 rounded-2xl shadow-lg overflow-hidden">
        {/* 3D Dots Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        ></canvas>

        {/* Vector Overlay */}
        <img
          src="/imgs/677922fe8c4e46abad5e3388_vector-05.avif"
          alt="vector-bg"
          className="absolute right-[-2rem] top-0 opacity-30 z-0"
        />

        {/* Left Section */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full md:w-1/2 h-auto md:h-96 space-y-4 p-6 md:p-10 text-[#2B1700] text-center md:text-left">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug"
          >
            Ready to start your{" "}
            <span className="italic font-normal">immigration</span> journey?
          </motion.h2>

          <div className="flex flex-col sm:flex-row sm:gap-5 items-center md:items-start justify-center md:justify-start">
            <List
              data={List_Data}
              uniqueKey="id"
            className="flex flex-col md:flex-row"
              render={(item) => (
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#2B1700]">
                    {item.icon}
                  </span>
                  <p className="text-base md:text-lg whitespace-nowrap font-medium">{item.label}</p>
                </div>
              )}
            />
          </div>

          <Button
          onClick={()=>navgate("/contact")}
            variant="secondary"
            size="lg"
            className="bg-[#2B1700] border-[#2B1700] hover:scale-105 transition-all duration-300 text-lg md:text-2xl text-white rounded-full mt-4"
          >
            Schedule a free call
          </Button>
        </div>

      
      </CardContainer>
    </motion.div>
  );
};
