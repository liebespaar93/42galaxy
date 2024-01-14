import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { Group } from "three";
import { PlantProps } from "../MyPlant";
import { useFrame } from "@react-three/fiber";
import MyHover from "../control/MyHover";
import { cameraSlice, useDispatch } from "@/lib/redux";

const __DEBUG__ = true

type SunProps = {
    displacementScale?: number
} & PlantProps

function MySun({ children, displacementScale = 0.1, scale = [1, 1, 1], rotation }: SunProps) {
    if (__DEBUG__) console.log("MySolar")

    const [day_map] = useTexture([
        "/assets/solar/plant/sun/2k_sun.jpeg"
    ])

    const sunRef = useRef<Group>(new Group)
    const [hover, setHover] = useState<boolean>(false);
    const dispatch = useDispatch()
    const targetRef = () => (
        dispatch(cameraSlice.actions.set_targetRef(sunRef)))

    useFrame(() => {
        if (rotation)
            sunRef.current.rotation.y += rotation.y
    })

    return (
        <group ref={sunRef}>
            <MyHover setHover={setHover}>
            <mesh scale={scale} onClick={targetRef}>
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={day_map}
                    emissiveMap={day_map}
                    emissiveIntensity={hover? 10 : 1}
                    emissive="#ffffff"
                    displacementMap={day_map}
                    displacementScale={displacementScale}
                />
                <pointLight castShadow receiveShadow intensity={500} position={[0, 0, 0]} />
            </mesh>
            </MyHover>
            {children}
        </group>
    );
}

export default MySun;