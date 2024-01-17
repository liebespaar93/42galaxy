import React, { useRef, useState } from 'react'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { PlantProps } from '../MyPlant'
import MyHover from '../control/MyHover'
import { cameraSlice, useDispatch } from '@/lib/redux'

const __DEBUG__ = true

type MoonProps = {
    displacementScale?: number
} & PlantProps

function MyMoon({ children, displacementScale = 0.1, scale = [1, 1, 1], rotation }: MoonProps) {
    if (__DEBUG__) console.log("MyMoon")

    const [
        day_map,
    ] = useTexture([
        "/assets/solar/plant/moon/Textures/8k_moon_day_map.webp",
    ])

    const moonRef = useRef<Group>(new Group)
    const [hover, setHover] = useState<boolean>(false);

    const dispatch = useDispatch()
    const targetRef = () => (
        dispatch(cameraSlice.actions.set_targetRef(moonRef)))

    useFrame(() => {
        if (rotation)
            moonRef.current.rotation.y += rotation.y
    })
    return (
        <group>
            <MyHover setHover={setHover}>
                <group ref={moonRef} scale={scale} onClick={targetRef}>
                    <mesh receiveShadow castShadow>
                        <sphereGeometry args={[1, 128, 128]} />
                        <meshPhongMaterial
                            map={day_map}
                            shininess={100}
                            displacementMap={day_map}
                            displacementScale={displacementScale}
                            emissiveMap={day_map}
                            emissive={0xf9e25c}
                            emissiveIntensity={hover ? 10 : 0.0} />
                    </mesh>
                </group>
            </MyHover>
            {children}
        </group>
    )
}


export default MyMoon