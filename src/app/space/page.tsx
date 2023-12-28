"use client"

import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { MutableRefObject, ReactElement, Suspense, isValidElement, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyPlant, { PlantProps } from '../ui/canvas/MyPlant'
import MySpace from '../ui/canvas/MySpace'
import MyGrid from '../ui/canvas/MyGrid'

const __DEBUG__ = false

type GalaxyProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
}


type AreaProps = {
    children: ReactElement<PlantProps | AreaProps> | ReactElement<PlantProps | AreaProps>[]
    level: number
    position?: THREE.Vector3 | undefined
    orbit_radius?: number | undefined
}

/**
 * 
 * @param param
 * @returns 
 * @memo isValidElement React element 인지 확인
 * @tip array 는 React element 아니다
 */
function Area({ position, level, children }: AreaProps) {
    if (__DEBUG__)
        console.log("Area")

    if (isValidElement(children))
        children = [children]

    const orbit: ReactElement<PlantProps | AreaProps>[] = [];

    children.map((value, index) => {
        orbit.push(
            <group key={index} rotation={[0, value.props.orbit_radius ? -value.props.orbit_radius : 0, 0]}>
                <group position={[0, 0, -level * 10]}>
                    {value}
                </group>
            </group>
        )
    })

    return (
        <group>
            <mesh position={position} rotation={[Math.PI * 0.5, 0, 0]} scale={[level * 10, level * 10, level * 10]}>
                <ringGeometry args={[1, 1.01, 64]} />
                <meshNormalMaterial side={THREE.DoubleSide} />
            </mesh>
            {orbit}
        </group>
    )
}

function Galaxy({ orbitRef }: GalaxyProps) {
    if (__DEBUG__)
        console.log("Galaxy")
    return (
        <group>
            <MyGrid size={10} position={[0, 0, 0]} />
            <Area level={0.1}>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.3} file={"/assets/galaxy/cube_plant/cube_plant.gltf"} name={"Libft"}
                    rotation={[0, 0, 0]} />
            </Area>
            <Area level={1}>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"ft_printf"}/>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"get_next_line"}/>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Born2beroot"}/>
            </Area>
            <Area level={2}>
                <Area level={0.5} orbit_radius={Math.PI * 0.3}>
                    <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"minitalk"} />
                    <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"pipex"} />
                </Area>
                <Area level={0.5} orbit_radius={Math.PI * 0.6}>
                    <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"so_long"} />
                    <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"fdf"} />
                    <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"fract-ol"} />
                </Area>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.8} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"push_swap"} />
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Exam Rank 02"} />
            </Area>
            <Area level={3}>
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Exam Rank 03"} />
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"minishell"} />
                <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 1.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"phliosophers"} />
            </Area>
        </group>
    )
}

function SpaceSetting() {
    if (__DEBUG__)
        console.log("SpaceSetting")
    const renderer = new THREE.WebGLRenderer();
    const { camera } = useThree()
    const orbitRef = useRef<OrbitControlsType>(new OrbitControlsType(camera, renderer.domElement))

    return (
        <>
            <OrbitControls ref={orbitRef} />
            <Suspense fallback={<text>Loading</text>} />
            <Galaxy orbitRef={orbitRef} />
            <MySpace file="/assets/space/nebula.hdr" />
        </>
    )
}

export default function Space() {
    if (__DEBUG__)
        console.log("Space")
    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <SpaceSetting />
            </Canvas>
        </div>
    )
}