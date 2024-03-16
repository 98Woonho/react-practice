# React란? 

리액트는 2013년 메타(전 페이스북)가 오픈소스로 공개한 프론트엔드 Javascript 라이브러리.

# React의 특징

리액트는 데이터가 변할 때마다 화면을 새로 띄우는 대신, 필요한 곳만 업데이트 해주는 형식이다.\
‘가상 DOM(Document Object Model)’이라는 개념이 이를 가능케 하는데, DOM은 HTML 문서를 브라우저가 이해할 수 있도록 만든 자료 구조이다.\
덕분에 빠른 로딩 속도와 반응성 높은 UI를 구현할 수 있게 되었음.\
데이터 규모가 클수록, 데이터 변경이 많을수록 리액트는 더 큰 힘을 발휘.

# React 설치
React.js를 사용하기 위해서는 create-react-app이라는 도구를 사용하여 프로젝트를 생성함.\
create-react-app을 설치하려면 원하는 폴더를 만든 후 명령 프롬프트 또는 터미널에서 폴더 경로로 이동 후 다음 명령어를 실행

`npx install -g create-react-app`\
<br>
![npm install -g create-react-app](https://github.com/98Woonho/react-practice/assets/145889732/8bb94be3-7b01-4b29-9819-03497879a65e)

# React 프로젝트 생성
React.js 프로젝트를 생성하기 위해서는 명령 프롬프트 또는 터미널에서 원하는 경로로 이동한 후, 다음 명령어를 실행

`npx create-react-app my-app`\
<br>
![create-react-app my-app](https://github.com/98Woonho/react-practice/assets/145889732/574f5936-f6c6-4428-aef7-024b14787d05)

설치가 완료되면 react 모듈과 기본 파일들이 생성된다.\
<br>
![file-setting](https://github.com/98Woonho/react-practice/assets/145889732/33abad36-8f3c-4332-a98d-93514d67e820)

# React 실행
React.js 프로젝트를 생성한 후, 애플리케이션을 실행하려면 명령 프롬프트 또는 터미널에서 다음 명령어를 실행

`cd my-app`\
`npm start`\
<br>
![npm start](https://github.com/98Woonho/react-practice/assets/145889732/1e5bbcad-6527-4f8f-b6d7-818418343392)
<br>
터미널에 위 사진처럼 출력된다면 성공적으로 컴파일이 되었다는 뜻이고,\
'http://localhost:3000'에 접속하면 react default site가 뜨게 된다.\
<br>
![react_default_site](https://github.com/98Woonho/react-practice/assets/145889732/3ba8e032-296e-452a-b94b-fa02164c0e9e)
