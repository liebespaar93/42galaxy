import { Group, Object3DEventMap, Vector3 } from 'three'
import { ReactElement, useRef } from 'react'
import { GLTF } from 'three-stdlib'
import { ObjectMap, useFrame } from '@react-three/fiber'
import { Clone, useGLTF } from '@react-three/drei'

import { AreaProps } from './MyArea'
import { cameraSlice, useDispatch } from '@/lib/redux'
const __DEBUG__ = true

export type PlantProps = {
    children?: ReactElement<PlantProps | AreaProps> | ReactElement<PlantProps | AreaProps>[]
    name?: string | undefined
    scale?: [number, number, number] | Vector3 | undefined
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

function MyPlant({ children, file, name, position, rotation, scale }: PlantProps & GLTFProps) {
    if (__DEBUG__)
        console.log("MyPlant")

    const plantRef = useRef<Group<Object3DEventMap>>(new Group)

    const dispatch = useDispatch()
    const targetRef = () => (
        dispatch(cameraSlice.actions.set_targetRef(plantRef)))

    useFrame(() => {
        if (rotation) // 자전
            plantRef.current.rotation.y += rotation.y
    })

    return (
        <group ref={plantRef} onClick={targetRef} >
            <MyGLTF file={file} scale={scale} />
            {children}
        </group>)
}

export default MyPlant