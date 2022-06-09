// 컨테이너 컴포넌트: 리덕스 스토어와 연동된 컴포넌트
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = (state) => ({
    number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

// mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// mapStateToProps는 state를 파라미터로 받아 오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
// mapDispatchToProps의 경우 store의 내장 함수 dispatch를 파라미터로 받아 온다.
