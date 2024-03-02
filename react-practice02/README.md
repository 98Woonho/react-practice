# React-Express-MySQL 연동 및 활용

이전에 만들어놓았던 DB의 person table을 이용하여, react에서 버튼을 클릭하면 데이터를 조회, 추가, 수정, 삭제 등 CRUD 기능을 하도록 해볼 것이다.

우선 <b>express</b> 폴더로 경로 이동 후, 터미널에 `node server.js`를 실행한다.

그리고 새로운 프로젝트 창을 열어, <b>react-practice02</b> 폴더를 열고, react-practice02로 경로 이동 후, 터미널에 `npm start`를 실행한다.

이 때, 아래의 오류가 발생하는 경우가 있을 것이다.\
![error](https://github.com/98Woonho/react-practice/assets/145889732/f0aaceb1-2cc5-4469-afc7-abdbb0f77f77)

이 오류는 유선랜을 사용하는 환경에서 package.json 파일에 `"proxy":"http://localhost:4000/"` 코드를 입력하면 위 오류가 발생한다고 한다. 무선랜을 사용하는 환경에서는 오류가 발생하지 않는다.\
그래서 유선랜을 사용하는 환경에서는 프로젝트 폴더에 <b>.env</b> 파일을 만들어서 안에 `DANGEROUSLY_DISABLE_HOST_CHECK=true `을 넣어주면 해결이 된다.

실행을 하면 아래 페이지가 나타나게 된다.\
![main_page](https://github.com/98Woonho/react-practice/assets/145889732/2c976272-963b-4cd9-a0e6-f4961bbcf213)

## 모두조회
![all_search](https://github.com/98Woonho/react-practice/assets/145889732/f2c88c60-1e7f-4aa0-b228-2efef977d031)

## 선택조회(이운호)
![select_search](https://github.com/98Woonho/react-practice/assets/145889732/c6f77ca8-da8e-4d35-97b0-8b0b21b931ce)

## 추가
![add](https://github.com/98Woonho/react-practice/assets/145889732/b7366274-3fd3-441b-b07a-53058b4c4816)

## 수정(김철수의 나이 30 -> 35)
![update](https://github.com/98Woonho/react-practice/assets/145889732/867b2bfa-9cbb-4d10-a3e4-7a5bbdaaae51)

## 삭제(김철수)
![delete](https://github.com/98Woonho/react-practice/assets/145889732/ffa7f323-1909-4c78-aaf2-1fe0f37c000f)

## 검색(이름에 '운호'가 포함되어 있는 레코드)
![Untitled (12)](https://github.com/98Woonho/react-practice/assets/145889732/b7884fa6-6780-452f-8fc9-041e12ba55b0)


server.js 파일에서 query문을 변경하여서 다른 결과물을 도출해낼 수도 있다.
