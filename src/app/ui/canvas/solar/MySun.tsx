import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { BufferGeometry, DoubleSide, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three";
import { PlantProps } from "../MyPlant";
import { useFrame } from "@react-three/fiber";

const __DEBUG__ = true

type SunProps = {
    displacementScale?: number
} & PlantProps

function MySun({ children, orbitRef, displacementScale = 0.1, scale = [1, 1, 1], rotation }: SunProps) {
    if (__DEBUG__) console.log("MySolar")

    const [day_map] = useTexture([
        "/assets/solar/plant/sun/2k_sun.jpeg"
    ])

    const sunRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(new Mesh)

    useFrame(() => {
        if (rotation)
            sunRef.current.rotation.y += rotation.y
    })

    return (
        <group>
            <mesh ref={sunRef} scale={scale}>
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={day_map}
                    emissiveMap={day_map}
                    emissiveIntensity={1}
                    emissive="#ffffff"
                    displacementMap={day_map}
                    displacementScale={displacementScale}
                />
                <pointLight castShadow receiveShadow intensity={500} position={[0, 0, 0]} />
            </mesh>
            {children}
        </group>
    );
}

export default MySun;