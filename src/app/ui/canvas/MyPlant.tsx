import { BufferGeometry, Euler, Material, Mesh, NormalBufferAttributes, Object3DEventMap, Vector3 } from 'three'
import { MutableRefObject, ReactElement, useRef } from 'react'
import { GLTF } from 'three-stdlib'
import { ObjectMap, ThreeEvent, useFrame } from '@react-three/fiber'
import { Clone, useGLTF } from '@react-three/drei'

import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { AreaProps } from './MyArea'

const __DEBUG__ = false

export type PlantProps = {
    children?: ReactElement<PlantProps | AreaProps> | ReactElement<PlantProps | AreaProps>[]
    orbitRef: MutableRefObject<OrbitControlsType | null>
    name?: string | undefined
    scale?: [number, number, number] | THREE.Vector3 | undefined
} & AreaControlProps

/**
 * @param GLTFProps 
 * @returns 
 * @memo primitive 는 동일한 오브잭트 한번만 사용가능
 * @meno Clone 는 동일한 오브잭트 여러번 사용가능
 */
function MyGLTF({ file, scale }: GLTFProps) {
    const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[] = useGLTF(file);

    if (!gltf) // 에러처리 행성 필요 필요
        return (<></>);
    return (
        <>
            <Clone castShadow receiveShadow object={gltf.scene} scale={scale} />
        </>
    )
}

function MyPlant({ children, orbitRef, file, name, position, rotation, scale }: PlantProps & GLTFProps) {
    if (__DEBUG__)
        console.log("MyPlant")

    const plantRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    function plant_info(event: ThreeEvent<MouseEvent>) {
        const target = new Vector3;
        const calculate = new Vector3(0, 0, 0);

        event.stopPropagation();
        event.eventObject.getWorldPosition(target);
        if (orbitRef && orbitRef.current) {
            // 나중에 lerp 하게 움직이는 카메라 필요
            calculate.set(0, 0, 0);
            calculate.add(orbitRef.current.object.position).sub(target)
            calculate.normalize().multiplyScalar(5).add(target)

            orbitRef.current.object.position.copy(calculate)

            orbitRef.current.target = target;
        }
    }
    new Vector3
    useFrame(() => {
        if (rotation) // 자전
        {
            plantRef.current.rotation.x += rotation.x
            plantRef.current.rotation.y += rotation.y
            plantRef.current.rotation.z += rotation.z
        }
    })


    return (
        <group onClick={plant_info} >
            <MyGLTF file={file} scale={scale} />
            {children}
        </group>)
}

export default MyPlant