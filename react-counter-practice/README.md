# Component란?
리액트는 화면에서 UI 요소를 구분할 때 ‘컴포넌트’라는 단위를 사용한다. 쉽게 말하면 리액트에서 앱을 이루는 가장 작은 조각이라 할 수 있다. 컴포넌트에는 함수형 컴포넌트, 클래스형 컴포넌트가 있는데 클래스형 컴포넌트를 다뤄볼 것이다.

# Class Component 활용 (숫자 counter)

터미널에 `cd react-counter-practice` 명령 실행 후, `npm start` 명령을 실행 하여 react를 실행 하게되면 아래 페이지가 나오게 된다.\
![main_page](https://github.com/98Woonho/react-practice/assets/145889732/ba51da64-4dd0-4ef8-8206-ac0e633bd9bd)

+를 누르면 숫자가 증가하고 -를 누르면 숫자가 감소한다.
