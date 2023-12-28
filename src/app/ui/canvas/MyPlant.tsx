
import { MutableRefObject, useState } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { ObjectMap, ThreeEvent } from '@react-three/fiber'
import { Clone, useGLTF } from '@react-three/drei'

import type { OrbitControls as OrbitControlsType } from 'three-stdlib'

const __DEBUG__ = false

export type PlantProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
    file: string
    name?: string | undefined
    orbit_radius?: number | undefined
    position?: THREE.Vector3 | undefined
    rotation?: [number, number, number] | THREE.Euler | undefined
}

/**
 * @param GLTFProps 
 * @returns 
 * @memo primitive 는 동일한 오브잭트 한번만 사용가능
 * @meno Clone 는 동일한 오브잭트 여러번 사용가능
 */
function MyGLTF({ file }: GLTFProps) {
    const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[] = useGLTF(file);

    if (!gltf) // 에러처리 행성 필요 필요
        return (<></>);
    return (
        <>
            <Clone object={gltf.scene} />
        </>
    )
}

function MyPlant({ orbitRef, file, name, position, rotation }: PlantProps) {
    if (__DEBUG__)
        console.log("MyPlant")

    function plant_info(event: ThreeEvent<MouseEvent>) {
        const target = new THREE.Vector3;
        const calculate = new THREE.Vector3(0, 0, 0);

        event.stopPropagation();
        event.eventObject.getWorldPosition(target);

        // 나중에 lerp 하게 움직이는 카메라 필요
        if (orbitRef && orbitRef.current) {
            calculate.set(0, 0, 0);
            calculate.add(orbitRef.current.object.position).sub(target)
            calculate.normalize().multiplyScalar(5).add(target)
            orbitRef.current.object.position.copy(calculate)
            orbitRef.current.target = target;
            console.log(target)
        }
    }

    return (
        <group onClick={plant_info} >
            <MyGLTF file={file} />
        </group>)
}

export default MyPlant