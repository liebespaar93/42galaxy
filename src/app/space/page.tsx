"use client"

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import MyPlant from '../ui/canvas/MyPlant'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import MySpace from '../ui/canvas/MySpace'


function Galaxy() {
    var file: string = "/assets/galaxy/cube_plant/cube_plant.glb";
    var name = "Libft Plant"
    var position = new THREE.Vector3(0, 0, 0)
    var rotation = new THREE.Euler(0, 0, 0)

    return (
        <>
            <MyPlant file={file} name={name} position={position} rotation={rotation} />
        </>
    )
}

export default function Space() {

    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <OrbitControls />
                <MySpace file="/assets/space/nebula.hdr" />
                <Galaxy />
            </Canvas>
            space in
        </div>
    )
}