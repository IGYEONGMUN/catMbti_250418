import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  background: url("https://i.pinimg.com/736x/5f/0a/9a/5f0a9adac6899e716d5750bd3c310e0e.jpg")
    center/cover no-repeat;
`;

const Header = styled.div`
  color: var(--accent-color);
  font-size: 5rem;
  margin-bottom: 25px;
  font-weight: 600;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > button[type="button"] {
    font-size: 2rem;
    padding: 3px 18px;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: var(--dark-color);
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid var(--border-box);
    /* border-radius: 50%; */
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 10px 18px;
  border-radius: 8px;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src="/cat/abyssinian.jpg"
            alt="mainCat"
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
