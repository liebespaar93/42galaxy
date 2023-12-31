import React, { useRef } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three'
import { PlantProps } from '../MyPlant'

const __DEBUG__ = true

type MoonProps = {
    displacementScale?: number
} & PlantProps

function MyMoon({ children, orbitRef, displacementScale = 0.1, scale = [1, 1, 1], rotation }: MoonProps) {
    if (__DEBUG__) console.log("MyMoon")

    const [
        day_map,
    ] = useTexture([
        "/assets/solar/plant/moon/Textures/8k_moon_day_map.webp",
    ])

    const moonRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    useFrame(() => {
        if (rotation)
            moonRef.current.rotation.y += rotation.y
    })
    return (
        <group>
            <mesh ref={moonRef} receiveShadow castShadow scale={scale}>
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={day_map}
                    shininess={100}
                    displacementMap={day_map}
                    displacementScale={displacementScale} />
            </mesh>
            {children}
        </group>
    )
}


export default MyMoon