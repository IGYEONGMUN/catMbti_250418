import React from "react";
// 사용자에 따라 친구목록을 새로 업데이트해야함-유즈이펙트 필요
import { useEffect } from "react";
import { Button } from "react-bootstrap";

// 윈도우 객체 안에 sdk통해서 카카오 객체를 정의함
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  console.log(data);
  const url = "https://catmbtichoose.netlify.app";
  // 리퍼러값/ 공유한 사람의 마지막 페이지
  const resultURL = window.location.href;
  useEffect(() => {
    // 중간에 초기화 해도 에러 발생방지용으로 기존 캐시값 삭제함수 - 초기화
    Kakao.cleanup();
    Kakao.init("7c286d5817130bd68ab3a027dbbafc69");
    Kakao.isInitialized();
  }, []);
  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
        // 원래 카카오 디벨로퍼로 가게되어있는데 우리가 배포한 사이트로 변경해줘야됨
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button variant="warning" onClick={sharekakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
