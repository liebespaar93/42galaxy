
import * as THREE from 'three'
import React, { ReactElement, isValidElement } from 'react'

import { PlantProps } from '@/app/ui/canvas/MyPlant'


const __DEBUG__ = false

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
function MyArea({ position, level, children }: AreaProps) {
    if (__DEBUG__) console.log("Area")

    if (isValidElement(children)) children = [children]

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

export default MyArea