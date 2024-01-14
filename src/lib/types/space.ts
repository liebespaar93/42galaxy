type GLTFProps = {
    file: string
    scale?: [number, number, number] | THREE.Vector3 | undefined
}

type HDRProps = {
    file: string
}

type AreaControlProps = {
    rotation?: { x: number, y: number, z: number } | THREE.Euler | undefined
    position?: THREE.Vector3 | undefined
    orbit_radius?: number | undefined
    orbit_speed?: number | undefined
}
