import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { PlantProps } from '../MyPlant'
import MyHover from '../control/MyHover'
import { cameraSlice, useDispatch } from '@/lib/redux'

const __DEBUG__ = true

type EarthProps = {
    displacementScale?: number
} & PlantProps

function MyEarth({ children, orbit_speed, displacementScale = 0.1, rotation, scale }: EarthProps) {
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

    const earthRef = useRef<Group>(new Group)
    const [hover, setHover] = useState<boolean>(false);

    const dispatch = useDispatch()
    const targetRef = () => (
        dispatch(cameraSlice.actions.set_targetRef(earthRef)))

    useFrame(() => {
        if (rotation)
            earthRef.current.rotation.y += rotation.y;
    })

    return (
        <group>
            <MyHover setHover={setHover}>
                <group ref={earthRef} onClick={targetRef} scale={scale}>
                    <mesh castShadow receiveShadow>
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
                            emissiveIntensity={hover ? 10 : 1.3}
                        />
                    </mesh>
                </group>
            </MyHover>
            {children}
        </group>
    )
}


export default MyEarth