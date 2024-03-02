# Class Component 활용 (Pagination)

터미널에 `cd react-pagination-practice` 명령 실행 후, `npm start` 명령을 실행 하여 react를 실행 하게되면 아래 페이지가 나오게 된다.\
![main-page](https://github.com/98Woonho/react-practice/assets/145889732/0faaac3e-7f31-486d-b08f-425a463768ce)

각 페이지 버튼을 눌러 이동이 잘 되고, 페이지에 맞는 게시글 리스트가 잘 나오는지 확인해 보도록 하자.

## 1페이지
![page1](https://github.com/98Woonho/react-practice/assets/145889732/95e2b7e5-dd04-4443-ac61-90a86dbefe31)

## 2페이지
![page2](https://github.com/98Woonho/react-practice/assets/145889732/32a43124-2a58-4518-a7aa-e03db1f6b369)

## 3페이지
![page3](https://github.com/98Woonho/react-practice/assets/145889732/7391e820-9ca6-4dc7-9a68-14dcbbbaf895)

## boardPerPage 변경
App.js에서 boardPerPage를 3으로 변경하면 그에 맞게 게시글이 페이지당 3개가 나오게 되고, 페이지 버튼도 알맞게 적용된 것을 볼 수 있다.\
![page4](https://github.com/98Woonho/react-practice/assets/145889732/b71709f9-9a01-4531-b408-035e78f501ae)
