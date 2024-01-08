type GLTFProps = {
    file: string
    scale?: [number, number, number] | THREE.Vector3 | undefined
}

type HDRProps = {
    file: string
}

type AreaControlProps = {
    position?: THREE.Vector3 | undefined
    rotation?: [number, number, number] | THREE.Euler | undefined
    orbit_radius?: number | undefined
    orbit_speed?: number | undefined
}
