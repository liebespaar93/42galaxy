import * as THREE from 'three'
import { Environment, useEnvironment } from '@react-three/drei'

type SpaceProps = {
    file: string
}

function MyHDR({ file }: HDRProps) {
    const hdr : THREE.Texture | undefined = useEnvironment({files : file});

    if (!hdr) // 에러처리 배경 필요
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