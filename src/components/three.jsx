import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const Three = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;

    const scene = new THREE.Scene();
    let bee;
    let mixer;

    const loader = new GLTFLoader();
    loader.load(
      '/models/demon_bee_full_texture.glb',
      (gltf) => {
        bee = gltf.scene;
        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        if (gltf.animations.length > 0) {
          mixer.clipAction(gltf.animations[0]).play();
        }
        setIsLoading(false);
        modelMove();
      },
      (xhr) => {
        // console.log(`Model ${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
      },
      (error) => {
        console.error('Error loading model:', error);
        setIsLoading(false);
      }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    } else {
      console.error('containerRef is not available');
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
      if (mixer) mixer.update(0.02);
    };
    reRender3D();

    // Positions and rotations for desktop
    const desktopPositions = [
      { id: 'home', position: { x: 1, y: -1, z: 0 }, rotation: { x: 0, y: -1.5, z: 0 } },
      { id: 'empty', position: { x: 0, y: -1, z: 6 }, rotation: { x: 0, y: -0.5, z: 0 } },
      { id: 'about', position: { x: -2, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
      { id: 'experience', position: { x: 1.4, y: -1, z: -3 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
      { id: 'works', position: { x: 1.4, y: -1, z: -3 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
      { id: 'tech', position: { x: -2, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
      { id: 'eyes', position: { x: -2, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
      { id: 'contact', position: { x: -2, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
    ];

    // Positions and rotations for mobile
    const mobilePositions = [
      { id: 'home', position: { x: 0.3, y: -0.2, z: -7 }, rotation: { x: 0, y: -1, z: 0 } },
      { id: 'empty', position: { x: 0, y: -0.5, z: -4 }, rotation: { x: 0, y: -0.25, z: 0 } },
      { id: 'about', position: { x: 0, y: -0.1, z: -2 }, rotation: { x: 0, y: 0.25, z: 0 } },
      { id: 'experience', position: { x: 0.7, y: -0.5, z: -1.5 }, rotation: { x: 0.15, y: -0.25, z: 0 } },
      { id: 'works', position: { x: 0.7, y: -0.5, z: -1.5 }, rotation: { x: 0.15, y: -0.25, z: 0 } },
      { id: 'tech', position: { x: -1, y: -0.5, z: -2 }, rotation: { x: 0, y: 0.25, z: 0 } },
      { id: 'eyes', position: { x: -1, y: -0.5, z: -2 }, rotation: { x: 0, y: 0.25, z: 0 } },
      { id: 'contact', position: { x: -1, y: -0.5, z: -2 }, rotation: { x: 0, y: 0.25, z: 0 } },
    ];

    const arrPositionModel = window.innerWidth <= 768 ? mobilePositions : desktopPositions;

    const modelMove = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection;
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;

        if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
          currentSection = section.id;
        }
      });

      const position_active = arrPositionModel.findIndex(
        (val) => val.id === currentSection
      );
      if (position_active >= 0) {
        const new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out"
        });
        gsap.to(bee.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out"
        });
        // Hide the container on the sections
        if (currentSection === 'works' || currentSection === 'tech' || currentSection === 'eyes' || currentSection === 'contact') {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            transition: true,
            ease: 'circ.inOut',
            onComplete: () => {
              containerRef.current.style.display = 'none';
            },
          });
        } else {
          containerRef.current.style.display = 'block';
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 1,
            transition: true,
            ease: 'circ.inOut',
          });
        }
      }
    };

    window.addEventListener('scroll', () => {
      if (bee) {
        modelMove();
      }
    });

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-3xl">Loading Model...</div>
        </div>
      )}
      <div ref={containerRef} id="container3D" className="fixed inset-0 z-20 transition-opacity duration-1000"></div>
    </>
  );
};

export default Three;