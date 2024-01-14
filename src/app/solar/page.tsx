"use client"

import * as THREE from 'three'
import { Canvas, RootState, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MySolar from '@/app/ui/canvas/solar/MySolar'
import MyApproach from '../ui/canvas/control/MyApproach'
import { Providers } from '@/lib/providers'

const __DEBUG__ = true

function SolarSetting() {
    if (__DEBUG__) console.log("SolarSetting")

    const renderer = new THREE.WebGLRenderer();
    const { camera }: RootState = useThree();
    const orbitRef = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement));

    return (
        <>
            <MyApproach />
            <OrbitControls ref={orbitRef} />
            <Suspense fallback={<text>Loading</text>} />
            <MySolar />
            <color attach="background" args={['#000']} />
            <Stars depth={200} count={10000} radius={100} />
        </>
    )
}

export default function Solar() {
    if (__DEBUG__) console.log("===Solar===")

    return (
        <div className="h-full w-full">
            <Providers>
                <Canvas shadows="basic" className="h-full w-full">
                    <SolarSetting />
                </Canvas>
            </Providers>
        </div>
    )
}