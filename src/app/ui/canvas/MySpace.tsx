import * as THREE from 'three'
import { Environment, useEnvironment } from '@react-three/drei'

const __DEBUG__ = true

type SpaceProps = {
    file: string
}

function MyHDR({ file }: HDRProps) {
    if (__DEBUG__) console.log("MyHDR")
    const hdr: THREE.Texture | undefined = useEnvironment({ files: file });

    if (!hdr) // 에러처리 배경 필요
        return (<></>);
    return (
        <Environment map={hdr} background />
    )
}

function MySpace({ file }: SpaceProps) {
    if (__DEBUG__) console.log("MySpace")

    return (
        <>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <MyHDR file={file} />
            </group>
        </>
    )
}

export default MySpace