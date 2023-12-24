"use client"

import { Canvas } from '@react-three/fiber'
import MyElement3D from '../ui/canvas/MyElement3D'

export default function testroom() 
{
    return (
        <div className="h-full w-full">
            <Canvas className="h-full w-full">
                <MyElement3D/>
            </Canvas>
            space in
        </div>
    )
}