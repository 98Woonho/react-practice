# React-slick을 이용한 캐러셀(Carousel) 구현

## React-slick이란?
React에서 캐러셀을 쉽게 구현해주는 모듈이다. 여기서 캐러셀(Carousel)은 한 영역에서 슬라이드 형태로 하나 이상의 이미지를 볼 수 있는 콘텐츠 또는 페이지이다.

## React-slick 설치 모듈
`npm install react-slick`\
`npm install slick-carousel`

## React-slick option
* `dots` : dot 모양의 paper
* `infinite` : 무한 스와이프
* `slidesToShow` : 한 화면에 보이는 슬라이드의 개수
* `variableWidth` : 각 슬라이드 넓이에 맞게 슬라이드 영역 내 보이는 슬라이드 수 자동 설정
* `centerMode` : 각 슬라이드 넓이에 맞게 슬라이드가 들어오는 경우, 활성화된 슬라이드 가운데 배치
* `slidesToScroll` : 슬라이드 실행할 때, 한 번에 슬라이드 되는 개수
* `speen` : 슬라이드 속도
* `autoplay` : 자동 슬라이드
* `autoplaySpeed` : 자동 슬라이드시, 한 슬라이드에 머무르는 시간
* `responsive` : 반응형 슬라이드 : 화면 넓이에 따라 레이아웃 변경
* `asNavFor` : "슬라이드 + 썸네일 슬라이드" 형의 슬라이드 구현

## React-slide-practice
터미널에 `cd react-slide-practice` 입력 후 `npm start`로 실행하면 페이지가 나온다.\
![main-page](https://github.com/98Woonho/react-practice/assets/145889732/9fea0c0b-8d93-4977-aabb-1a26fc144b62)

해당 예제 코드에서는 `slidesToShow` : 3, `slidesToScroll` : 3, `autoplay` : true 옵션을 설정해 두었다.
