import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Scene({ activeSection }) {
    const modelRef = useRef();
    const { scene } = useGLTF('/src/assets/3d/silent_ash_skateboard.glb');

    useFrame((_, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5; // Rotate the model
        }
    });

    return (
        <group>
            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Model */}
            <group ref={modelRef}>
                <primitive object={scene} scale={2} position={[0, -1.5, 0]} />
            </group>

            {/* Lighting */}
            <ambientLight intensity={0.1} />
            <spotLight position={[5, 5, 5]} intensity={2} />
        </group>
    );
}
