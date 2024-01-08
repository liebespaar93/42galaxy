"use client"

import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MySolar from '@/app/ui/canvas/MySolar'

const __DEBUG__ = false

function SolarSetting() {
    if (__DEBUG__) console.log("SpaceSetting")

    const renderer = new THREE.WebGLRenderer();
    const { camera } = useThree()
    const orbitRef = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement))

    return (
        <>
            <OrbitControls ref={orbitRef} />
            <Suspense fallback={<text>Loading</text>} />
            <MySolar orbitRef={orbitRef} />
            <color attach="background" args={['#000']} />
            <Stars depth={200} count={10000} radius={100} />
            {/* <MySpace file="/assets/space/nebula.hdr" /> */}

            {/* 임시 라이트*/}
            <directionalLight intensity={2} position={[10, 0, 0]} scale={10}/>
            <directionalLight position={[-10, 0, 0]} scale={10} />
            {/* <directionalLight position={[0, 10, 0]} scale={10} />
            <directionalLight position={[0, -10, 0]} scale={10} />
            <directionalLight position={[0, 0, 10]} scale={10} />
            <directionalLight position={[0, 0, -10]} scale={10} /> */}
        </>
    )
}

export default function Solar() {
    if (__DEBUG__) console.log("Space")

    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <SolarSetting />
            </Canvas>
        </div>
    )
}