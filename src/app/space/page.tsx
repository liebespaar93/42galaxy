"use client"

import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MySpace from '@/app/ui/canvas/MySpace'
import MyGalaxy from '@/app/ui/canvas/MyGalaxy'

const __DEBUG__ = false

function SpaceSetting() {
    if (__DEBUG__) console.log("SpaceSetting")

    const renderer = new THREE.WebGLRenderer();
    const { camera } = useThree()
    const orbitRef = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement))

    return (
        <>
            <OrbitControls ref={orbitRef} />
            <Suspense fallback={<text>Loading</text>} />
            <MyGalaxy orbitRef={orbitRef} />
            <MySpace file="/assets/space/nebula.hdr" />
        </>
    )
}

export default function Space() {
    if (__DEBUG__) console.log("Space")
    
    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <SpaceSetting />
            </Canvas>
        </div>
    )
}