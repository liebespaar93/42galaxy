import React, { MutableRefObject, ReactElement, Suspense, isValidElement, useRef } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyPlant from '@/app/ui/canvas/MyPlant'
import MyGrid from '@/app/ui/canvas/MyGrid'
import MyArea from '@/app/ui/canvas/MyArea'
import MyEarth from '@/app/ui/canvas/solar/MyEeath'
import MyMoon from '@/app/ui/canvas/solar/MyMoon'

const __DEBUG__ = false

type TestProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
}

function MySolar({ orbitRef }: TestProps) {
    if (__DEBUG__) console.log("Test")
    
    return (
        <group>
            <MyGrid size={10} position={[0, 0, 0]} />
            <MyArea level={0}>
                {/* <MyPlant orbitRef={orbitRef} orbit_radius={Math.PI * 0.3} file={"/assets/galaxy/gnl_plant/gnl_plant.gltf"} name={"Libft"}
                    rotation={[0, 0, 0]} /> */}
                <MyEarth orbitRef={orbitRef} />
                <MyArea level={0.5} >
                    <MyMoon orbitRef={orbitRef}></MyMoon>
                </MyArea>
            </MyArea>
        </group>
    )
}


export default MySolar