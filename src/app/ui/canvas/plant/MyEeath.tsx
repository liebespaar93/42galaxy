import React, { MutableRefObject, ReactElement, Ref, Suspense, isValidElement, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyGrid from '@/app/ui/canvas/MyGrid'
import MyArea from '@/app/ui/canvas/MyArea'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three'

const __DEBUG__ = false

type EarthProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
    displacementScale?: number
}

function MyEarth({ orbitRef, displacementScale = 0.1 }: EarthProps) {
    if (__DEBUG__) console.log("Test")

    const [
        day_map,
        normal_map,
        specular_map,
        displacement_map,
    ] = useTexture([
        "/assets/galaxy/earth/Textures/8k_earth_day_map.webp",
        "/assets/galaxy/earth/Textures/8k_earth_normal_map.webp",
        "/assets/galaxy/earth/Textures/8k_earth_specular_map.webp",
        "/assets/galaxy/earth/Textures/8k_earth_displacement_map.jpg",
    ])

    const earthRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    useFrame(() => {
        earthRef.current.rotation.y += 0.004166666666666667;
    })

    return (
        <group>
            <MyArea level={0}>
                <mesh ref={earthRef}>
                    <sphereGeometry args={[1, 128, 128]} />
                    <meshPhongMaterial
                        map={day_map}
                        normalMap={normal_map}
                        specularMap={specular_map}
                        shininess={100}
                        displacementMap={displacement_map}
                        displacementScale={displacementScale} />
                </mesh>
            </MyArea>
        </group>
    )
}


export default MyEarth