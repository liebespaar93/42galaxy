import React, { MutableRefObject, ReactElement, Ref, Suspense, isValidElement, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three'
import { PlantProps } from '../MyPlant'

const __DEBUG__ = false

type MoonProps = {
    displacementScale?: number
} & PlantProps

function MyMoon({ orbitRef, displacementScale = 0.1, scale = [1,1,1] }: MoonProps ) {
    if (__DEBUG__) console.log("Moon")

    const [
        day_map,
    ] = useTexture([
        "/assets/galaxy/moon/Textures/8k_moon_day_map.webp",
    ])

    const moonRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    useFrame(() => {
        moonRef.current.rotation.y += 0.000;
    })

    return (
        <group>
            <mesh ref={moonRef} scale={scale}>
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={day_map}
                    shininess={100}
                    displacementMap={day_map}
                    displacementScale={displacementScale} />
            </mesh>
        </group>
    )
}


export default MyMoon