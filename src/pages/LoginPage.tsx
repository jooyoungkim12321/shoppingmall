import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import React from "react";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Board = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
`;

const Button = styled.button`
  height: 30px;
  border: none;
  border-radius: 16px;
`;

const Title = styled.h2`
  text-align: center;
`;

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onPwdHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Board onSubmit={onSubmitHandler}>
        <Title>LOGIN</Title>
        <Container>
          <label>로그인</label>
          <Input
            type="email"
            value={email}
            onChange={onEmailHandler}
            placeholder="이메일을 입력하세요..."
          />
        </Container>
        <Container>
          <label>비밀번호</label>
          <Input
            type="password"
            value={password}
            onChange={onPwdHandler}
            placeholder="비밀번호를 입력하세요..."
          />
        </Container>
        <Button>로그인</Button>
      </Board>
    </Wrapper>
  );
}

export default LoginPage;
