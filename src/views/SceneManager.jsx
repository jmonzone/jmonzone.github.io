import React, { useEffect, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Fog,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SphereBufferGeometry,
  TextureLoader,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import backgroundImage from '../assets/images/enviroment.jpg';

export default function SceneManager() {
  const canvas = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const fog = new Fog(new Color(0x555555), 1, 4);
    scene.fog = fog;

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 1);

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.current.appendChild(renderer.domElement);

    //adding orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enablePan = false;
    controls.enableZoom = false;

    const createEnviroment = () => {
      const geometry = new SphereBufferGeometry(1, 100, 50);
      const radius = 2;
      geometry.scale(radius, radius, -radius);
      const enviroment = new Mesh(geometry);

      new TextureLoader().load(backgroundImage, map => {
        const material = new MeshBasicMaterial({ map });
        enviroment.material = material;
      });

      return enviroment;
    };

    const createParticles = () => {
      const geometry = new BufferGeometry();
      const particlesCount = 500;

      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 1) {
        positions[i] = (Math.random() - 0.5) * 3;
      }

      geometry.setAttribute('position', new BufferAttribute(positions, 3));

      const loader = new TextureLoader();
      const sprite = loader.load('assets/images/favicon.png');
      const material = new PointsMaterial({
        size: 0.01,
        map: sprite,
        transparent: true,
        blending: AdditiveBlending,
      });

      const particles = new Points(geometry, material);
      return particles;
    };

    const enviroment = createEnviroment();
    const particles = createParticles();
    enviroment.add(particles);
    scene.add(enviroment);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      enviroment.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    // console.log('animating');

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    return () => canvas.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div className="scene">
      <div className="scene-canvas" ref={canvas} />
      <div className="scene-overlay" />
    </div>
  );
}
