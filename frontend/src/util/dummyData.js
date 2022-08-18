const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const dummyData = [ //가게 별점 평균, 리뷰 data는 따로 빼기
    { 
      id: 1, //id
      name: "store_1", //가게 이름
      store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_1.png`, //가게 사진
      store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
      address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
      phone_number: "02-OOO-OOOO", //문의처
      content : "제로웨이스트 상점 1번", //가게 설명
    },
    {
        id: 2, //id
        name: "store_2", //가게 이름
        store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_2.png`, //가게 사진
        store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
        address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
        phone_number: "02-OOO-OOOO", //문의처
        content : "제로웨이스트 상점 2번", //가게 설명
      },
      {
        id: 3, //id
        name: "store_3", //가게 이름
        store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_3.png`, //가게 사진
        store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
        address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
        phone_number: "02-OOO-OOOO", //문의처
        content : "제로웨이스트 상점 3번", //가게 설명
      },
      {
          id: 4, //id
          name: "store_4", //가게 이름
          store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_4.png`, //가게 사진
          store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
          address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
          phone_number: "02-OOO-OOOO", //문의처
          content : "제로웨이스트 상점 4번", //가게 설명
        },
        {
            id: 5, //id
            name: "store_5", //가게 이름
            store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_5.png`, //가게 사진
            store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
            address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
            phone_number: "02-OOO-OOOO", //문의처
            content : "제로웨이스트 상점 5번", //가게 설명
          },
          {
              id: 6, //id
              name: "store_6", //가게 이름
              store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_6.png`, //가게 사진
              store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
              address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
              phone_number: "02-OOO-OOOO", //문의처
              content : "제로웨이스트 상점 6번", //가게 설명
            },
            {
              id: 7, //id
              name: "store_7", //가게 이름
              store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_7.png`, //가게 사진
              store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
              address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
              phone_number: "02-OOO-OOOO", //문의처
              content : "제로웨이스트 상점 7번", //가게 설명
            },
            {
                id: 8, //id
                name: "store_8", //가게 이름
                store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_8.png`, //가게 사진
                store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
                address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
                phone_number: "02-OOO-OOOO", //문의처
                content : "제로웨이스트 상점 8번", //가게 설명
              },
              {
                id: 9, //id
                name: "store_9", //가게 이름
                store_img : process.env.PUBLIC_URL + `/assets/dummy_photo/photo_9.png`, //가게 사진
                store_hours: "평일 오전 10시-오후 7시 (토,일,공휴일 휴무)", //영업일자 및 시간
                address: "서울특별시 OO구 OO길 123-12(OO동)", //주소
                phone_number: "02-OOO-OOOO", //문의처
                content : "제로웨이스트 상점 9번", //가게 설명
              }
  ];