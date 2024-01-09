import React, { MutableRefObject, ReactElement, Suspense, isValidElement, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyPlant from '@/app/ui/canvas/MyPlant'
import MyArea from '@/app/ui/canvas/MyArea'
import MyEarth from '@/app/ui/canvas/solar/MyEeath'
import MyMoon from '@/app/ui/canvas/solar/MyMoon'
import MySun from './MySun'

const __DEBUG__ = true

type SolarProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
}

function MySolar({ orbitRef }: SolarProps) {
    if (__DEBUG__) console.log("==MySolar==")

    return (
        <group>
            {/* <MyGrid size={10} position={[0, 0, 0]} /> */}
            <MyArea level={0}>
                <MySun orbitRef={orbitRef} scale={[2, 2, 2]} rotation={{ x: 0, y: 0.001, z: 0 }} >
                    <MyArea level={1}>
                        <MyEarth orbitRef={orbitRef} orbit_speed={0.005} rotation={{ x: 0, y: 0.02, z: 0 }}>
                            <MyArea level={0.5} >
                                <MyMoon scale={[0.5, 0.5, 0.5]}
                                    orbitRef={orbitRef}
                                    orbit_speed={0.02}
                                    displacementScale={0.05}
                                    rotation={{ x: 0, y: 0.02, z: 0 }} />
                            </MyArea>
                            <MyArea level={0.2} >
                                <MyPlant orbit_speed={0.05} orbitRef={orbitRef} scale={[0.002, 0.002, 0.002]} file='/assets/solar/station/ISS_stationary.glb' />
                            </MyArea>
                        </MyEarth>
                    </MyArea>
                </MySun>
            </MyArea>
        </group>
    )
}


export default MySolar