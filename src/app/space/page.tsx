"use client"

import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { MutableRefObject, Suspense, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyPlant from '../ui/canvas/MyPlant'
import MySpace from '../ui/canvas/MySpace'
import MyGrid from '../ui/canvas/MyGrid'
import { preload } from 'react-dom'

type GalaxyProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
}

function Galaxy({ orbitRef }: GalaxyProps) {
    return (
        <>
            <MyGrid size={10} position={[0, 0, 0]} />
            <MyPlant orbitRef={orbitRef} file={"/assets/galaxy/cube_plant/cube_plant.gltf"} name={"Libft Plant"}
                position={[1, 1, 1]} rotation={[0, 0, 0]} />
        </>
    )
}

function CanvasSet() {
    const renderer = new THREE.WebGLRenderer();
    const { camera } = useThree()
    const orbitRef = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement))

    return (
        <>
            <OrbitControls ref={orbitRef} />
            <Suspense fallback={<text>Loading</text>} />
            <MySpace file="/assets/space/nebula.hdr" />
            <Galaxy orbitRef={orbitRef} />
        </>
    )
}

export default function Space() {
    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <CanvasSet />
            </Canvas>
        </div>
    )
}