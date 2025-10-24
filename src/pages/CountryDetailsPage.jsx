import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";
import { CardContainer } from "../components/ui/CardContainer";
import { List } from "../components/ui/List";
import Button from "../components/ui/button/Button";
import { COUNTRIES_DATA } from "../data/data";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Card } from "../components/ui/Card";

export const CountryDetailsPage = () => {
  const { id } = useParams();
  const navigate  =  useNavigate();
  const canvasRef = useRef(null);

  const country = COUNTRIES_DATA.find((c) => c.id === id);

  // === THREE.JS Animated Dots Background ===
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    camera.position.z = 5;

    const geometry = new THREE.BufferGeometry();
    const count = 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#0000", 
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!country) return <p className="p-6">Country not found!</p>;

  return (
    <div className="px-4 sm:px-10 py-5 w-full max-w-7xl mx-auto space-y-10">
      {/* === Header Banner === */}
      <CardContainer className="relative p-0 flex items-center w-full h-64 sm:h-[500px] md:h-[600px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
        <motion.img
          src={country.img}
          alt={country.country}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 px-4 text-center"
          >
            <img
              src={country.flag}
              alt={`${country.country} flag`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg"
            />
            <h2 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
              {country.country}
            </h2>
          </motion.div>
        </div>
      </CardContainer>

      {/* === Main Section === */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-4">
        {/* === Left Column === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          {/* Overview */}
          <List
            data={country.details}
            uniqueKey="id"
            className="flex flex-col space-y-6"
            render={(item) => (
              <div key={item.id}>
                <h2 className="text-3xl font-bold text-[#2B1700] mb-2">
                  {item.head}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )}
          />

          {/* Why Choose */}
          {country.whyChoose && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-[#2B1700] mb-4">
                Why Choose {country.country}?
              </h2>
              <List
                data={country.whyChoose}
                uniqueKey="id"
                className="flex flex-col space-y-2"
                render={(item) => (
                  <div key={item.id} className="flex items-start gap-2">
                    <span className="font-bold text-lg text-[#2B1700]">•</span>
                    <p className="text-md text-gray-700">{item.desc}</p>
                  </div>
                )}
              />
            </motion.div>
          )}
        </motion.div>

        {/* === Right Column (3D + Visa Info) === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex-1 w-full lg:w-1/2 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-2xl shadow-md p-8 space-y-10 overflow-hidden"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          <div className="relative z-10 space-y-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-extrabold text-[#2B1700]"
            >
              More About {country.country}
            </motion.h2>

            <p className="text-gray-800 leading-relaxed">
              Explore culture, lifestyle, travel insights, and opportunities
              offered by {country.country}.
            </p>

            {/* Visa Buttons */}
            <div className="flex flex-col items-center justify-center space-y-5 pt-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#2B1700]">
                Visas Available in {country.country}
              </h2>
              <div className="flex  flex-wrap justify gap-4 mb-10">
                <Button className="bg-[#2B1700] hover:scale-105 transition-transform duration-300 text-white">
                  Tourist Visa
                </Button>
                <Button className="bg-[#2B1700] hover:scale-105 transition-transform duration-300 text-white">
                  Business Visa
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-[#2B1700] text-2xl font-extrabold">
                Connect with Visa Vango
              </h2>
              <p className="flex items-center gap-2 text-[#2B1700] text-lg">
                <IconPhoneCall /> +971 56 793 2301 | +971 56 752 9006
              </p>
              <p className="flex items-center gap-2 text-[#2B1700] text-lg">
                <IconMail /> sales@visavango.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Other Countries === */}
      <div className="space-y-6">
        <h4 className="text-4xl text-[#2B1700] font-extrabold">
          Other Countries
        </h4>

        <List
          data={COUNTRIES_DATA.slice(2, 5)} // 👈 Limit to first 3 countries
          uniqueKey="id"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6"
          render={(item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
        
                  onClick={() => navigate(`/countries/${item.id}`)}
               className="relative overflow-hidden shadow-md p-0 hover:shadow-lg h-60 transition-shadow duration-300">
                <img
                  src={item.img}
                  alt={item.country}
                  className="w-full h-60 object-cover"
                />
                <img
                  src={item.flag}
                  alt={`${item.country} flag`}
                  className="absolute top-5 left-5 w-10 h-10 rounded-full  shadow-md"
                />
              </Card>
              <div className="p-3 text-center font-extrabold text-[#2B1700]">
                {item.country}
              </div>
            </motion.div>
          )}
        />
      </div>
    </div>
  );
};
