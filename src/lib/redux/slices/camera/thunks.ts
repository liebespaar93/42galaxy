/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchapitest } from "./fetchapitest";
import { cameraSlice } from "./cameraSlice";
import { selectCamPosition, type ReduxThunkAction } from "@/lib/redux";
import { Vector3 } from "three";

import { OrbitControls as OrbitControlsType } from 'three-stdlib'

export const incrementAsync = createAppAsyncThunk(
  "counter/fetchIdentityCount",
  async (target: Vector3) => {
    const response = await fetchapitest(target);
    // 이게 반환되어 action에 들어감
    return response.data;
  },
);

export function incrementIfOddAsync(target: Vector3): ReduxThunkAction {
  return async (dispatch, getState) => {
    const currentValue = selectCamPosition(getState());
    
    // 작업을 하는동안 딜레이를 줄수 있음
    await new Promise((r) => setTimeout(r, 500));

    dispatch(cameraSlice.actions.position(target));
  };
}