import { cameraSlice, selectCamStatus, selectCamTargetRef, useSelector } from "@/lib/redux";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Vector3 } from "three";


type ApproachProps = {
    target: Vector3
}

function MyApproach() {
    // const rd_camera = useSelector(state => state.camera)
    const { status, targetRef } = useSelector((state) => {
        const status = selectCamStatus(state)
        const targetRef = selectCamTargetRef(state)
        return { status, targetRef }
    })
    const lookat_position = new Vector3;
    useFrame(({ camera }) => {
        if (status == "lookat")
        {
            targetRef?.current.getWorldPosition(lookat_position)
            camera.lookAt(lookat_position)
        }
        console.log(status, )
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