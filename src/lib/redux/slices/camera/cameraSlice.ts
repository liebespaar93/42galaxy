import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { incrementAsync } from "./thunks";
import { Group, Mesh, Vector3 } from "three";
import { MutableRefObject, } from "react";
import { OrbitControls as OrbitControlsType } from 'three-stdlib'

export interface CameraSliceState {
  position: Vector3,
  targetRef?: MutableRefObject<Group>,
  status: "free" | "lookat" | "failed",
}

const initialState: CameraSliceState = {
  position: new Vector3(0, 0, 0),
  status: "free",
}

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    position: (state, action: PayloadAction<Vector3>) => {
      state.position = action.payload
    },
    lookat: (state) => {
      state.status = "lookat"
    },
    free: (state) => {
      state.status = "free"
    },
    set_targetRef: (state, action: PayloadAction<MutableRefObject<Group>>) => {
      if (state.targetRef?.current == action.payload.current)
        state.status = state.status == "lookat" ? "free" : "lookat"
      else
        state.status = "lookat"
      state.targetRef = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "free";
      })
  },
})