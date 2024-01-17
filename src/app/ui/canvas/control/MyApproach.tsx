import { selectCamStatus, selectCamTargetRef, useSelector } from "@/lib/redux";
import { useFrame } from "@react-three/fiber";

import { use, useEffect, useState } from "react";
import { Vector3 } from "three";
import { OrbitControls as OrbitControlsType } from 'three-stdlib'

type ApproachProps = {
    orbitRef: React.MutableRefObject<OrbitControlsType>
}

function MyApproach({ orbitRef }: ApproachProps) {
    const { status, targetRef } = useSelector((state) => {
        const status = selectCamStatus(state)
        const targetRef = selectCamTargetRef(state)
        return { status, targetRef }
    })
    const [speed, set_speed] = useState(0.01)
    const [camPositionPoint, set_camTargetPoint] = useState(new Vector3(0, 0, 0))
    const [targetPosition, set_targetPosition] = useState(new Vector3(0, 0, 0))

    useEffect(() => {
        set_speed(0.001)
    }, [status, targetRef])

    useFrame(() => {
        if (status == "lookat" && targetRef) {
            targetRef.current.getWorldPosition(targetPosition)
            camPositionPoint.copy(orbitRef.current.object.position).sub(targetPosition).normalize().multiplyScalar(targetRef.current.scale.x + targetRef.current.scale.x * 1.5).add(targetPosition)
            if (speed + speed / 10 < 0.99) {
                set_speed(speed + speed / 10)
                orbitRef.current.object.position.copy(orbitRef.current.object.position.lerp(camPositionPoint, speed))
                orbitRef.current.target.copy(orbitRef.current.target.lerp(targetPosition, speed))
            }
            else {
                orbitRef.current.object.position.copy(camPositionPoint)
                orbitRef.current.target.copy(targetPosition)
            }
            console.log(targetRef.current.scale)
        }
    })
    return <></>
}

export default MyApproach;

// const camPosition = useSelector(selectCamPosition);
// const camTarget = useSelector(selectCamTarget);

// function plant_info(event: ThreeEvent<MouseEvent>) {
//     const target = new Vector3;
//     const calculate = new Vector3(0, 0, 0);

//     event.stopPropagation();
//     event.eventObject.getWorldPosition(target);

//     // 나중에 lerp 하게 움직이는 카메라 필요
//     calculate.set(0, 0, 0);
//     calculate.add(camPosition).sub(target)
//     calculate.normalize().multiplyScalar(5).add(target)

//     camPosition.copy(calculate)

//     camTarget.copy(target);
// }
// const test = new TWEEN.Tween(state.camera.position)
//     .to({x:, y:1, z:0}, 1000)
//     .onUpdate((object) => {
//         state.camera.position.copy(object)
//         console.log("test herhge", object)
//     }).start()
// function test() {
//     targetRef?.current.getWorldPosition(cam_Position)
//     cam_Position.sub(camera.position)
//     new TWEEN.Tween(camera.position)
//         .to({ x: 0, y: 1, z: 0 }, 1000)
//         .onUpdate((object) => {
//             camera.position.copy(object)
//             console.log("test herhge", object)
//         }).start()
