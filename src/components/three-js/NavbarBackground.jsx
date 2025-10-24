import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const NavbarBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 200,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Floating particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 400; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(200));
      vertices.push(THREE.MathUtils.randFloatSpread(100));
      vertices.push(THREE.MathUtils.randFloatSpread(200));
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0xffd700, // 🌟 bright yellow color
      size: 1.5,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0015;
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, 200);
      camera.aspect = window.innerWidth / 200;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-[200px] -z-10 overflow-hidden"
    />
  );
};
