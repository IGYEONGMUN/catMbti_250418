import { useState } from "react";
// 쿼리값에 들어갈 키,밸류값 정의해주는함수createSearchParams
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://i.pinimg.com/originals/5a/15/ab/5a15ab85705915ebb0a0d8e1ba21db01.gif")
    center/cover no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 10px;
  margin-bottom: 80px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
  & > button[type="button"] {
    width: 400px;
    height: 200px;
    font-size: 2.5rem;
    border-radius: 8px;
  }
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // const handleClickButtonA = (no, type) => {
  //   // 이방식은 원본배열의 스코어값을 애드스코어로 변경하면서 잘라나가는 방식
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };
  // const handleClickButtonB = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  const navigate = useNavigate();
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    // 문제수 무한증가방지
    if (questionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      // 누산기 함수는 콜백함수 받고 두번째 인자값으로 초기값
      // 콜백함수 인자값으로(계산할값, 현재값)
      // substring EI문자열 자르는거
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 파라미터만 보낼때는 단일 인자값만 보내도 되는데 쿼리값까지 같이 보낼때는 이문법으로
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };
  return (
    <Container>
      <ProgressBar
        variant="info"
        now={(questionNo / questionData.length) * 100}
      />
      <Wrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="info"
            onClick={() => handleClickButton(1, questionData[questionNo].type)}
          >
            {questionData[questionNo].answera}
          </Button>
          {/* 에이버튼 비버튼 가중치를 다르게 줌 */}
          <Button
            variant="info"
            onClick={() => handleClickButton(0, questionData[questionNo].type)}
          >
            {questionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
