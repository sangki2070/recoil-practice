import React, { useCallback } from "react";
import styled from "styled-components";

import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import counterStateAtom, { counterSelector } from "./atoms/counterAtom";

function App() {
  const [counter, setCounter] = useRecoilState(counterStateAtom);
  const selectorValue = useRecoilValue(counterSelector);

  const increaseBtn = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decreaseBtn = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  return (
    <Wrap>
      <h1>recoil counter</h1>
      <BtnWrap>
        <IncreaseBtn onClick={increaseBtn}>증가</IncreaseBtn>
        <DecreaseBtn onClick={decreaseBtn}>감소</DecreaseBtn>
      </BtnWrap>
      <CounterWrap>
        <Count>베이직 카운트 : {counter}</Count>
        <Count>셀렉터 카운트 : {selectorValue}</Count>
      </CounterWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 100px;
  margin: 0 auto;
`;

const IncreaseBtn = styled.button`
  width: 100px;
  height: 30px;
`;

const DecreaseBtn = styled.button`
  width: 100px;
  height: 30px;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const CounterWrap = styled.div``;

const Count = styled.div``;

export default App;
