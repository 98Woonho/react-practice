import {Component} from 'react';
//Component클래스를 react모듈에서 가져온다.
//extends - 확장하다
//App클래스를 Component클래스를 이용해서 확장한다.
//App클래스는 Component클래스에게 상속받는다.
//App는 자식클래스, Component는 부모 클래스
//App는 파생된클래스(derived), Component는 기초클래스(Base)
class App extends Component{
    //props-properties
    constructor(props){//생성자-클래스가 객체로 생성될때 호출
      super(props)//super(상위) - 상위클래스의 생성자 호출
      this.state={//state, 상태값
        num:0,
      }
    }

    increase=()=>{
      //this.state.num=this.state.num+1 - 직접변경
      this.setState({
        num:this.state.num+1
      })
    }

    decrease=()=>{
      //this.state.num=this.state.num-1 - 직접변경
      this.setState({
        num:this.state.num-1
      })
      //setState - render
    }
    //mounting - constructor - render
    //update - setState - render
    render(){//렌더 (화면그리는 메서드,생명주기 메서드 일종)
      console.log('render')
      return(
        <div id='App'>
            <h1>{this.state.num}</h1>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
        </div>
      )
    }
}

export default App;