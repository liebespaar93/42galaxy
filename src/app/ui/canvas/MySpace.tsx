import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { ObjectMap } from '@react-three/fiber'
import { Environment, useEnvironment, useGLTF } from '@react-three/drei'

type SpaceProps = {
    file: string
}

function MyHDR({ file }: HDRProps) {
    const hdr : THREE.Texture | THREE.CubeTexture | (THREE.CubeTexture & Record<"colorSpace", unknown>) = useEnvironment({files : file});

    if (!hdr) // 에러처리 행성 필요 필요
        return (<></>);
    return (
        <Environment map={hdr} background />
    )
}

function MySpace({ file }: SpaceProps) {
    return (
        <>
            <group position={[1, 1, 1]} rotation={[0, 0, 0]}>
                <MyHDR file={file} />
            </group>
        </>
    )
}

export default MySpace