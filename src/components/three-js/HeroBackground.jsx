import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const HeroBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    // ✅ Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // ✅ Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ✅ Create globe
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffcc80,
      emissive: 0x2b1700,
      emissiveIntensity: 0.3,
      wireframe: true,
      roughness: 0.5,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // ✅ Lights
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // ✅ Animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      globe.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // ✅ Resize Handler
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ✅ Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};
