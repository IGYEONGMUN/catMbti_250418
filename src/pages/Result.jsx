import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";
import { useNavigate, useSearchParams } from "react-router-dom";
import KakaoShareButton from "../components/KakaoShareButton";

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

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid var(--border-box);
    /* border-radius: 50%; */
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 10px 18px;
  border-radius: 8px;
  & > p {
    line-height: 30px;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState();
  const navigation = useNavigate();
  const handleClickButton = () => {
    navigation("/");
  };

  const [SearchParams] = useSearchParams();
  // get 함수 이용 키값을 인자값으로 줘서 사용
  const mbti = SearchParams.get("mbti");
  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <LogoImg>
          <img
            className="rounded-circle"
            src={resultData?.image}
            alt="mainCat"
          />
        </LogoImg>
        <Desc>
          <p>
            예비집사님과 찰떡궁합인 고양이는
            <br /> {resultData?.best}형 {resultData?.name}
          </p>
        </Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
          <Button variant="warning">
            <KakaoShareButton />
          </Button>
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
