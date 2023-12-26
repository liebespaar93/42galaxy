
import { MutableRefObject, useState } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { ObjectMap, ThreeEvent, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { OrbitControls as OrbitControlsType } from 'three-stdlib'


type PlantProps = {
    orbitRef : MutableRefObject<OrbitControlsType | null>
    file: string
    name: string
    position: [number, number, number] | THREE.Vector3 | undefined
    rotation: [number, number, number] | THREE.Euler | undefined
}

function MyGLTF({ file }: GLTFProps) {
    const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[] = useGLTF(file);
    console.log(file);
    if (!gltf) // 에러처리 행성 필요 필요
        return (<></>);
    return (
        <primitive object={gltf.scene}></primitive>
    )
}


function zoom_lerp() {

}

function MyPlant({ orbitRef, file, position, rotation }: PlantProps) {
    const target = new THREE.Vector3;
    const calculate = new THREE.Vector3(0, 0, 0);


    function plant_info(event: ThreeEvent<MouseEvent>) {
        event.stopPropagation();
        event.eventObject.getWorldPosition(target);

        // 나중에 lerp 하게 움직이는 카메라 필요
        if (orbitRef && orbitRef.current)
        {
            calculate.set(0, 0, 0);
            calculate.add(orbitRef.current.object.position).sub(target)
            calculate.normalize().multiplyScalar(5).add(target)
            orbitRef.current.object.position.copy(calculate)
            orbitRef.current.target = target;
            console.log(target)
        }
    }

    return (
        <>
            <group onClick={plant_info} position={position} rotation={rotation}>
                <MyGLTF file={file} />
            </group>
        </>
    )
}


export default MyPlant