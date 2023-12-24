import * as THREE from 'three'
import { Environment, MeshReflectorMaterial, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'

import { folder, useControls } from 'leva'
import { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react'
import { GLTF } from 'three-stdlib'
import { ObjectMap } from '@react-three/fiber'

import PropTypes, { string } from 'prop-types';
import MyPlant from './MyPlant'

function MyRoom({ children }: PropsWithChildren) {
	return (
		<mesh rotation={[THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(45), 0]}>
			<mesh position={[0, -10, 0]}
				rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
				receiveShadow
				castShadow
			>
				<planeGeometry args={[20, 20]} />
				<MeshReflectorMaterial
					side={THREE.DoubleSide}
					color="#ffffff"
					roughness={0.25}
					metalness={1.0} mirror={0} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				position={[10, 0, 0]}
				rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
			>
				<planeGeometry args={[20, 20]} />
				<meshPhongMaterial
					side={THREE.DoubleSide}
					color={0xFFF5E0}
					specular={0xFFFFFF}
					shininess={50.0}
				/>
			</mesh>

			<mesh
				castShadow
				receiveShadow
				position={[0, 0, -10]}
				rotation={[0, 0, THREE.MathUtils.degToRad(-90)]}>
				<planeGeometry args={[20, 20]} />
				<meshPhongMaterial
					side={THREE.DoubleSide}
					color={0xFFF5E0}
					specular={0xFFFFFF}
					shininess={50.0}
				/>
			</mesh>
			{children}
		</mesh>
	)
}

function MyLightControls() {
	const { visible, L_x, L_y, L_z, LR_x, LR_y, LR_z, LB_x, LB_y, LB_z, LG_x, LG_y, LG_z } = useControls({
		lightCntr: folder({
			visible: true,
			lightTotal: folder({
				L_x: { value: 0, min: -10, max: 10, step: 0.001 },
				L_y: { value: 0, min: -10, max: 10, step: 0.001 },
				L_z: { value: 0, min: -10, max: 10, step: 0.001 },
			}),
			lightRed: folder({
				LR_x: { value: 1, min: -10, max: 10, step: 0.001 },
				LR_y: { value: 0, min: -10, max: 10, step: 0.001 },
				LR_z: { value: 0, min: -10, max: 10, step: 0.001 },
			}),
			lightGreen: folder({
				LG_x: { value: 0, min: -10, max: 10, step: 0.001 },
				LG_y: { value: 1, min: -10, max: 10, step: 0.001 },
				LG_z: { value: 0, min: -10, max: 10, step: 0.001 }
			}),
			lightBlue: folder({
				LB_x: { value: -1, min: -10, max: 10, step: 0.001 },
				LB_y: { value: 0, min: -10, max: 10, step: 0.001 },
				LB_z: { value: 0, min: -10, max: 10, step: 0.001 },
			})
		})
	})

	return (
		<>
			<directionalLight visible={visible} color="red" position={[L_x + LR_x, L_y + LR_y, L_z + LR_z]} intensity={1.0} />
			<directionalLight visible={visible} color="green" position={[L_x + LG_x, L_y + LG_y, L_z + LG_z]} intensity={1.0} />
			<directionalLight visible={visible} color="blue" position={[L_x + LB_x, L_y + LB_y, L_z + LB_z]} intensity={1.0} />

		</>
	)
}


function MyObject({ ...props }) {
	const gltf = useGLTF("/assets/galaxy/cube_plant/cube_plant.glb")
	return (
		<>
			<primitive object={gltf.scene}></primitive>
			<Environment preset='city'></Environment>
		</>
	)
}

function MyElement3D() {
	var file: string = "/assets/galaxy/cube_plant/cube_plant.glb";
	var name = "Libft Plant"
	var position = new THREE.Vector3(0, 0, 0)
	var rotation = new THREE.Euler(0, 0, 0)

	return (
		<>
			<OrbitControls />
			<MyRoom>
				<MyPlant file={file} name={name} position={position} rotation={rotation} />
			</MyRoom>
			<MyLightControls />
		</>
	)
}

export default MyElement3D