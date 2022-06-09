import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의: 대문자, 문자열
// 문자열: 모듈이름 / 액션이름
const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';

// 액션 생성 함수
// export const increase = () => ({
//     type: INCREASE,
// });

// export const decrease = () => ({
//     type: DECREASE,
// });

// createAction
// 액션 생성 함수를 더 간단하게 선언할 수 있다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
    number: 0,
};

// 리듀서(
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// };

// handleAction
// 리듀서 함수를 더 간단하게 선언할 수 있다.
const counter = handleActions(
    {
        [INCREASE]: (state, actions) => ({ number: state.number + 1 }),
        [DECREASE]: (state, actions) => ({ number: state.number - 1 }),
    },
    initialState
);

export default counter;
