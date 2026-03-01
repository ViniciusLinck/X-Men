import { useEffect, useRef } from "react";
import * as THREE from "three";

export function MutantBackgroundScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const auraGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const auraMaterial = new THREE.MeshStandardMaterial({
      color: "#2f62ff",
      emissive: "#0d1129",
      metalness: 0.35,
      roughness: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const auraMesh = new THREE.Mesh(auraGeometry, auraMaterial);
    auraMesh.position.set(2.2, -1.2, -2.8);
    scene.add(auraMesh);

    const starCount = 650;
    const positions = new Float32Array(starCount * 3);

    for (let index = 0; index < starCount; index += 1) {
      const i3 = index * 3;
      positions[i3] = (Math.random() - 0.5) * 24;
      positions[i3 + 1] = (Math.random() - 0.5) * 24;
      positions[i3 + 2] = (Math.random() - 0.5) * 22;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: "#7ab7ff",
      size: 0.03,
      transparent: true,
      opacity: 0.55
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const pointLight = new THREE.PointLight("#47f4ff", 2.2, 42);
    pointLight.position.set(5, 3.5, 6);
    scene.add(pointLight);

    const fillLight = new THREE.PointLight("#2958ff", 1.3, 35);
    fillLight.position.set(-6, -1.5, 4);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight("#6f9bff", 0.45);
    scene.add(ambientLight);

    const resize = () => {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let animationFrameId = 0;
    const animate = () => {
      auraMesh.rotation.x += 0.0016;
      auraMesh.rotation.y += 0.0022;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      auraGeometry.dispose();
      auraMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}
