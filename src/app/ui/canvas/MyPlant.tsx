import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { ObjectMap } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'


type PlantProps = {
    file: string
    name: string
    position: THREE.Vector3 | undefined
    rotation: THREE.Euler | undefined
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

function MyPlant({ file, position, rotation }: PlantProps) {
    return (
        <>
            <group position={[1, 1, 1]} rotation={[0, 0, 0]}>
                <MyGLTF file={file} />
            </group>
        </>
    )
}



export default MyPlant