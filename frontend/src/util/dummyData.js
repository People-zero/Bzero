const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const dummyData = [ //가게 별점 평균, 리뷰 data는 따로 빼기
    { 
      id: 1, //id
      store_name: "store_1", //가게 이름
      opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
      store_longitude: "37",
      store_latitude : "40",
      telephone: "02-OOO-OOOO", //문의처
      description : "제로웨이스트 상점 1번", //가게 설명
      store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_1.png`, //가게 사진
      point_avg : "3",
      // address: "서울특별시 OO구 OO길 123-12(OO동)", //주소(경도,위도로 주소 변환하는 api 사용하면 제거해도 되는 properties)
      store_url: "https://www.nike.com/kr/ko_kr/",
    },
    {
        id: 2, //id
        store_name: "store_2", //가게 이름
        opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
        store_longitude: "37",
        store_latitude : "40",
        telephone: "02-OOO-OOOO", //문의처
        description : "제로웨이스트 상점 2번 : 무신사(MUSINSA)는 '무진장 신발 사진이 많은 곳'이라는 프리챌 커뮤니티로 시작해, 현재는 대한민국의 온라인 패션커머스 기업이다. 2001년에 개설되었으며, 무신사 스토어뿐만 아니라 여성 전용 스토어인 우신사도 오픈되어 있다. 2017년에는 무신사 자체 브랜드인 무신사 스탠다드를 론칭했다. 2018년 6월 패션특화 공유오피스 무신사 스튜디오를 오픈했다. 2019년 8월 패션문화 편집공간 무신사 테라스가 문을 열었다. 2020년, 패션 플랫폼 월간 활성 사용자 1위에 선정됐다.", //가게 설명
        store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_2.png`, //가게 사진
        point_avg : "3.5",
        // address: "서울특별시 OO구 OO길 123-12(OO동)",
        store_url : "https://www.musinsa.com/app/",
      },
      {
        id: 3, //id
        store_name: "store_3", //가게 이름
        opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
        store_longitude: "37",
        store_latitude : "40",
        telephone: "02-OOO-OOOO", //문의처
        description : "제로웨이스트 상점 3번", //가게 설명
        store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_3.png`, //가게 사진
        point_avg : "5",
        // address: "서울특별시 OO구 OO길 123-12(OO동)",
        store_url : "https://www.converse.co.kr/",
      },
      {
          id: 4, //id
          store_name: "store_4", //가게 이름
          opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
          store_longitude: "37",
          store_latitude : "40",
          telephone: "02-OOO-OOOO", //문의처
          description : "제로웨이스트 상점 4번", //가게 설명
          store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_4.png`, //가게 사진
          point_avg : "4.5",
          // address: "서울특별시 OO구 OO길 123-12(OO동)",
          store_url: "https://www.nike.com/kr/ko_kr/",
        },
        {
          id: 5, //id
          store_name: "store_5", //가게 이름
          opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
          store_longitude: "37",
          store_latitude : "40",
          telephone: "02-OOO-OOOO", //문의처
          description : "제로웨이스트 상점 5번", //가게 설명
          store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_5.png`, //가게 사진
          point_avg : "4.6",
          // address: "서울특별시 OO구 OO길 123-12(OO동)",
          store_url: "https://www.nike.com/kr/ko_kr/",
          },
        {
          id: 6, //id
          store_name: "store_6", //가게 이름
          opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
          store_longitude: "37",
          store_latitude : "40",
          telephone: "02-OOO-OOOO", //문의처
          description : "제로웨이스트 상점 6번", //가게 설명
          store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_6.png`, //가게 사진
          point_avg : "3.4",
          // address: "서울특별시 OO구 OO길 123-12(OO동)",
          store_url: "https://www.nike.com/kr/ko_kr/",
          },
          {
          id: 7, //id
          store_name: "store_7", //가게 이름
          opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
          store_longitude: "37",
          store_latitude : "40",
          telephone: "02-OOO-OOOO", //문의처
          description : "제로웨이스트 상점 7번", //가게 설명
          store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_7.png`, //가게 사진
          point_avg : "3.5",
          // address: "서울특별시 OO구 OO길 123-12(OO동)",
          store_url: "https://www.nike.com/kr/ko_kr/",
            },
            {
            id: 8, //id
            name: "store_8", //가게 이름
            store_name: "store_8", //가게 이름
            opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
            store_longitude: "37",
            store_latitude : "40",
            telephone: "02-OOO-OOOO", //문의처
            description : "제로웨이스트 상점 8번", //가게 설명
            store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_8.png`, //가게 사진
            point_avg : "5",
            // address: "서울특별시 OO구 OO길 123-12(OO동)",
            store_url: "https://www.nike.com/kr/ko_kr/",
              },
              {
              id: 9, //id
              store_name: "store_9", //가게 이름
              opening_time: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
              store_longitude: "37",
              store_latitude : "40",
              telephone: "02-OOO-OOOO", //문의처
              description : "제로웨이스트 상점 9번", //가게 설명
              store_image : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_9.png`, //가게 사진
              point_avg : "2.5",
              // address: "서울특별시 OO구 OO길 123-12(OO동)",
              store_url: "https://www.nike.com/kr/ko_kr/",
              }
  ];