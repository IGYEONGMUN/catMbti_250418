import React from "react";
// 사용자에 따라 친구목록을 새로 업데이트해야함-유즈이펙트 필요
import { useEffect } from "react";
import { Button } from "react-bootstrap";

// 윈도우 객체 안에 sdk통해서 카카오 객체를 정의함
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "catmbtichoose.netlify.app";
  // 리퍼러값/ 공유한 사람의 마지막 페이지
  const resultURL = window.location.href;
  console.log(url, resultURL);
  useEffect(() => {
    // 중간에 초기화 해도 에러 발생방지용으로 기존 캐시값 삭제함수 - 초기화
    Kakao.cleanup();
    Kakao.init("7c286d5817130bd68ab3a027dbbafc69");
  }, []);
  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        // 원래 카카오 디벨로퍼로 가게되어있는데 우리가 배포한 사이트로 변경해줘야됨
        link: {
          mobileWebUrl: `${url}`,
          webUrl: `${url}`,
        },
      },
      itemContent: {
        profileText: "Kakao",
        profileImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageText: "Cheese cake",
        titleImageCategory: "Cake",
        items: [
          {
            item: "Cake1",
            itemOp: "1000원",
          },
          {
            item: "Cake2",
            itemOp: "2000원",
          },
          {
            item: "Cake3",
            itemOp: "3000원",
          },
          {
            item: "Cake4",
            itemOp: "4000원",
          },
          {
            item: "Cake5",
            itemOp: "5000원",
          },
        ],
        sum: "총 결제금액",
        sumOp: "15000원",
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
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
