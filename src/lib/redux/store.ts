import { configureStore, type Action, type ThunkAction, createDynamicMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";

import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from "react-redux";

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    Action
>;

/**
 * @brief Redux 함수를 사용하기 위해 불러오는 함수
 * @returns 
 */
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
/**
 * @brief Redux 정보를 가져오기위해 사용하는 함수
 */
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export const reduxStore = configureStore({
    reducer,
    /**
     * @brief 미들웨어 아직 제대로 모름 중간 로그 찍는거나 내용변환을 알려주기 위한거로 보임
     */
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
});