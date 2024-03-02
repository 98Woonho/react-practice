# 라우팅이란?
사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 할 수 있다.\
리액트에서는 라우팅 관련 라이브러리가 많이 있는데, 이 중 가장 많이 쓰이는 리액트 라우터(React Router)를 사용 해볼 것이다.

# Router를 사용하는 이유
그냥 a 태그를 사용하면 페이지 전체가 새로 로딩된다.\
흔히 말하는 화면 깜빡임이 필수적으로 발생하고 이는 사용자 경험을 떨어뜨리는 큰 요인이다.

# 설치
`npm install react-router-dom`

# 사용법
react 프로젝트 폴더 생성 후, App.js에 아래 코드로 Router를 import 해준다.\
`import { BrowserRouter, Routes, Route } from 'react-router-dom';`


# react-router-practice
터미널에 `cd react-router-practice` 명령 실행 후, `npm start` 명령을 실행 하여 react를 실행 하게되면 아래 페이지가 나오게 된다.\
![main-page](https://github.com/98Woonho/react-practice/assets/145889732/ef44277e-b9eb-4e89-bcfc-a0d763e261a4)

## 프로필 버튼 클릭
![profile-page](https://github.com/98Woonho/react-practice/assets/145889732/b4611fab-f6a2-4f8c-9324-7b8fffd56352)

겉으로 보이게는 a 태그와 동일한 동작을 한다.
