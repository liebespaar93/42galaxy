"use client"

import * as THREE from 'three'
import { Canvas, RootState, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MySpace from '@/app/ui/canvas/MySpace'
import MyGalaxy from '@/app/ui/canvas/MyGalaxy'
import MyApproach from '../ui/canvas/control/MyApproach'
import { Providers } from '@/lib/providers'

const __DEBUG__ = true

function SpaceSetting() {
    if (__DEBUG__) console.log("SpaceSetting")

    const renderer = new THREE.WebGLRenderer();
    const { camera }: RootState = useThree();
    const orbitRef: React.MutableRefObject<OrbitControlsType> = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement));

    return (
        <>
            <color attach="background" args={['#000']} />
            <OrbitControls ref={orbitRef} />
            <MyApproach orbitRef={orbitRef}/>
            <Suspense fallback={<text>Loading</text>} />
            <MyGalaxy />
            <Stars depth={200} count={10000} radius={100} />

            <MySpace file="/assets/space/nebula.hdr" />
        </>
    )
}

export default function Space() {
    if (__DEBUG__) console.log("Space")

    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <Providers>
                    <SpaceSetting />
                </Providers>
            </Canvas>
        </div>
    )
}