import React from 'react'
import MyPlant from '@/app/ui/canvas/MyPlant'
import MyArea from '@/app/ui/canvas/MyArea'
import MyEarth from '@/app/ui/canvas/solar/MyEeath'
import MyMoon from '@/app/ui/canvas/solar/MyMoon'
import MySun from './MySun'
import MyGrid from '../MyGrid'

const __DEBUG__ = true

type SolarProps = {
}

function MySolar({ }: SolarProps) {
    if (__DEBUG__) console.log("==MySolar==")

    return (
        <group position={[10, 0, 10]}>
            {/* <MyGrid size={10} position={[0, 0, 0]} /> */}
            <MyArea level={0}>
                <MySun scale={[2, 2, 2]} rotation={{ x: 0, y: 0.001, z: 0 }} >
                    <MyArea level={1}>
                        <MyEarth orbit_speed={0.002} rotation={{ x: 0, y: 0.02, z: 0 }}>
                            <MyArea level={0.5} >
                                <MyMoon scale={[0.5, 0.5, 0.5]}
                                    orbit_speed={0.005}
                                    displacementScale={0.005}
                                    rotation={{ x: 0, y: 0.02, z: 0 }} />
                            </MyArea>
                            <MyArea level={0.2} orbit_speed={0.001}>
                                <MyPlant orbit_speed={0.01} rotation={{ x: 0.2, y: 0.01, z: 0 }} rotate={[0, 0, Math.PI * 0.5]} scale={[0.5, 0.5, 0.5]} file='/assets/solar/station/rocket/rocket.gltf' />
                            </MyArea>
                        </MyEarth>
                    </MyArea>
                </MySun>
            </MyArea>
        </group>
    )
}


export default MySolar