
import * as THREE from 'three'
import React, { ReactElement, isValidElement, useRef, useState } from 'react'

import { PlantProps } from '@/app/ui/canvas/MyPlant'
import { useFrame } from '@react-three/fiber'


const __DEBUG__ = false

export type AreaProps = {
    children?: ReactElement<PlantProps | AreaProps> | ReactElement<PlantProps | AreaProps>[]
    level: number
} & AreaControlProps

/**
 * @param param
 * @returns 
 * @memo isValidElement React element 인지 확인
 * @tip array 는 React element 아니다
 */
function MyArea({ position, level, children }: AreaProps) {
    if (__DEBUG__) console.log("Area")

    if (isValidElement(children)) children = [children]

    const orbit: ReactElement<PlantProps | AreaProps>[] = [];
    const orbit_speed: number[] = [];
    const group_revolution_Ref: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>[] = [];
    const group_rotation_Ref: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>[] = [];

    children?.map((value, index) => {
        orbit_speed.push(value.props.orbit_speed ? value.props.orbit_speed : 0);
        group_revolution_Ref.push(useRef(new THREE.Group))
        group_rotation_Ref.push(useRef(new THREE.Group))
        orbit.push(
            <group ref={group_revolution_Ref[index]} key={index} rotation={[0, value.props.orbit_radius ? -value.props.orbit_radius : 0, 0]}>
                <group ref={group_rotation_Ref[index]} position={[0, 0, -level * 10]}>
                    {value}
                </group>
            </group>
        )
    })
    useFrame(() => {
        orbit_speed.map((value, index) => {
            group_revolution_Ref[index].current.rotateY(value)
            group_rotation_Ref[index].current.rotateY(-value)
        })
    })
    return (
        <group>
            <mesh position={position} rotation={[Math.PI * 0.5, 0, 0]} scale={[level * 10, level * 10, level * 10]}>
                <ringGeometry args={[1, 1 + (level * 0.01), 64]} />
                <meshNormalMaterial side={THREE.DoubleSide} />
            </mesh>
            {orbit}
        </group>
    )
}

export default MyArea