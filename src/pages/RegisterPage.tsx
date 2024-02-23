import { Axios } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const onEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onPwdHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onConPwdHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다");
    }
  };

  return (
    <Wrapper>
      <Board onSubmit={onSubmitHandler}>
        <Title>회원가입</Title>
        <Container>
          <label>이메일</label>
          <Input
            type="email"
            value={email}
            onChange={onEmailHandler}
            placeholder="이메일을 입력하세요..."
          />
        </Container>
        <Container>
          <label>이름</label>
          <Input
            type="name"
            value={name}
            onChange={onNameHandler}
            placeholder="이름을 입력하세요..."
          />
        </Container>
        <Container>
          <label>비밀번호</label>
          <Input
            type="passowrd"
            value={password}
            onChange={onPwdHandler}
            placeholder="비밀번호를 입력하세요..."
          />
        </Container>
        <Container>
          <label>비밀번호 확인</label>
          <Input
            type="confirmPassword"
            value={confirmPassword}
            onChange={onConPwdHandler}
            placeholder="비밀번호를 다시 입력하세요..."
          />
        </Container>
        <Button>회원가입하기</Button>
      </Board>
    </Wrapper>
  );
}

export default RegisterPage;
