// 액션 타입 정의: 대문자, 문자열
// 문자열: 모듈이름 / 액션이름
const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';

// 액션 생성 함수
export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

// 초기 상태
const initialState = {
    number: 0,
};

// 리듀서(
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1,
            };
        case DECREASE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
};

export default counter;
