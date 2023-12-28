import { Plane, Text } from "@react-three/drei";

type GridProps = {
    size: number
    position: [number, number, number]
}

type GridPlaneProps = {
    size: number
    rotation: [number, number, number]
}

type GridTextProps = {
    position: [number, number, number]
    text: string
}

function MyGrid({ size, position }: GridProps) {
    return (
        <group position={position}>
            <GridText position={[+size, 0, 0]} text="X+" />
            <GridText position={[-size, 0, 0]} text="X-" />
            <GridText position={[0, +size, 0]} text="Y+" />
            <GridText position={[0, -size, 0]} text="Y-" />
            <GridText position={[0, 0, +size]} text="Z+" />
            <GridText position={[0, 0, -size]} text="Z-" />
            <GridPlane rotation={[0.5 * Math.PI, 0, 0]} size={size} />
            <GridPlane rotation={[0, 0, 0]} size={size} />
            <GridPlane rotation={[0, 0.5 * Math.PI, 0]} size={size} />
        </group>
    );
}

function GridPlane({ rotation, size }: GridPlaneProps) {
    return (
        <Plane
            args={[size * 2, size * 2, size * 2, size * 2]}
            rotation={rotation}
            position={[0, 0, 0]}
        >
            <meshStandardMaterial emissive="#ffffff" attach="material" color="#ffffff" wireframe />
        </Plane>
    )
}

function GridText({ position, text }: GridTextProps) {
    return (
        <Text
            color="white"
            anchorX="center"
            anchorY="middle"
            position={position}
            scale={[1, 1, 1]}
        >
            {text}
        </Text>
    )
}

export default MyGrid