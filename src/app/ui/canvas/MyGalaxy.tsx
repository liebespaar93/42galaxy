import React, { MutableRefObject } from 'react'

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import MyPlant from '@/app/ui/canvas/MyPlant'
import MyGrid from '@/app/ui/canvas/MyGrid'
import MyArea from '@/app/ui/canvas/MyArea'

const __DEBUG__ = true

type GalaxyProps = {
    orbitRef: MutableRefObject<OrbitControlsType | null>
}

function MyGalaxy({ orbitRef }: GalaxyProps) {
    if (__DEBUG__) console.log("==MyGalaxy==")

    return (
        <group>
            <MyGrid size={10} position={[0, 0, 0]} />
            <MyArea level={0}>
                <MyPlant orbit_radius={Math.PI * 0} file={"/assets/galaxy/cube_plant/cube_plant.gltf"} name={"Libft"}
                    rotation={{ x: 0.1, y: 0.1, z: 0 }} />
            </MyArea>
            <MyArea level={1}>
                <MyPlant orbit_radius={Math.PI * 0.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"ft_printf"} />
                <MyPlant orbit_radius={Math.PI * 1.0} scale={[1, 1, 1]} file={"/assets/galaxy/gnl_plant/gnl_plant.gltf"} name={"get_next_line"} />
                <MyPlant orbit_radius={Math.PI * 1.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Born2beroot"} />
            </MyArea>
            <MyArea level={2}>
                <MyArea level={0.5} orbit_radius={Math.PI * 0.3}>
                    <MyPlant orbit_radius={Math.PI * 0.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"minitalk"} />
                    <MyPlant orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"pipex"} />
                </MyArea>
                <MyArea level={0.5} orbit_radius={Math.PI * 0.6}>
                    <MyPlant orbit_radius={Math.PI * 0.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"so_long"} />
                    <MyPlant orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"fdf"} />
                    <MyPlant orbit_radius={Math.PI * 1.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"fract-ol"} />
                </MyArea>
                <MyPlant orbit_radius={Math.PI * 1.8} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"push_swap"} />
                <MyPlant orbit_radius={Math.PI * 1.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Exam Rank 02"} />
            </MyArea>
            <MyArea level={3}>
                <MyPlant orbit_radius={Math.PI * 0.0} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"Exam Rank 03"} />
                <MyPlant orbit_radius={Math.PI * 0.66} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"minishell"} />
                <MyPlant orbit_radius={Math.PI * 1.33} file={"/assets/galaxy/untitled_plant/untitled_plant.gltf"} name={"phliosophers"} />
            </MyArea>
        </group>
    )
}


export default MyGalaxy