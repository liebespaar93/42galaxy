import React, { MutableRefObject, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three'
import { PlantProps } from '../MyPlant'

const __DEBUG__ = true

type EarthProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
    displacementScale?: number
} & PlantProps

function MyEarth({ children, orbit_speed, orbitRef, displacementScale = 0.1, rotation }: EarthProps) {
    if (__DEBUG__) console.log("MyEarth")

    const [
        day_map,
        nightmap_map,
        normal_map,
        specular_map,
        displacement_map,

    ] = useTexture([
        "/assets/solar/plant/earth/Textures/8k_earth_day_map.webp",
        "/assets/solar/plant/earth/Textures/8k_earth_nightmap.jpeg",
        "/assets/solar/plant/earth/Textures/8k_earth_normal_map.webp",
        "/assets/solar/plant/earth/Textures/8k_earth_specular_map.webp",
        "/assets/solar/plant/earth/Textures/8k_earth_displacement_map.jpg",
    ])

    const earthRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    useFrame(() => {
        if (rotation)
            earthRef.current.rotation.y += rotation.y;
    })

    return (
        <group>
            <mesh ref={earthRef} castShadow receiveShadow >
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={day_map}
                    normalMap={normal_map}
                    specularMap={specular_map}
                    shininess={100}
                    displacementMap={displacement_map}
                    displacementScale={displacementScale}
                    emissiveMap={nightmap_map}
                    emissive={0xf9e25c}
                    emissiveIntensity={1.3}
                />
            </mesh>
            {children}
        </group>
    )
}


export default MyEarth