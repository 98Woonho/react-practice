import {Component} from 'react';
import Person from './components/Person.js';
import PersonInput from './components/PersonInput.js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      personList:[
        {id:1,name:'이민호',age:20,height:176.7},
        {id:2,name:'정채연',age:21,height:162.4},
        {id:3,name:'송중기',age:22,height:178.9},
      ]
    }
  }

  addPersonInfo=(id,name,age,height)=>{
    alert('추가!(App)')
    alert(id)//4
    alert(name)//김철수
    alert(age)//30
    alert(height)//176.6
    const personObj={id:id,name:name,age:age,height:height}
    const concatedList = this.state.personList.concat(personObj)
    this.setState({
      personList:concatedList
    })
  }

  deletePersonInfo=(id)=>{
    alert('삭제(App)')
    alert(id)//1,2,3
    const filteredList=this.state.personList.filter(
      (data)=>(data.id !== id)
    )
    //배열에서 원소하나씩 매개변수 data로 넘어오고
    //data.id (배열의 id), id(함수매개변수 id-삭제할 id)
    //배열원소의 id중에 삭제할 id와 같지 않은원소만 반환해서 배열로 만든다.
    //삭제할 id만 빼고 배열을 구성해서 만든다.
    this.setState({
      personList:filteredList
    })
  }

  updatePersonInfo=(id, age)=>{
    alert('수정(App)')
    alert(id)
    alert(age)

    // for 수정
    // let tempList = this.state.personList;
    // let len = tempList.length;
    // for(var i=0; i<len; i++) {
    //   if(tempList[i].id === id) {
    //     tempList[i].age = age;
    //   }
    // }
    // this.setState({
    //   personList:tempList
    // })

    // map 수정
    const updatedList = this.state.personList.map(

      // {...data, age:age} = {id:data.id, name:data.name, age:age, height:data.height}
      // age를 넘어온 age로 바꿔주고 나머지는 변동사항이 없어서 ...data로 작성 가능
      (data) => ((data.id ===id) ? ({...data, age:age}) : data)
    )
    this.setState({
      personList:updatedList
    })
  }

  render(){//setState -> render
    //map메서드는 배열객체 내장메서드
    //personList JSON배열에서 데이터 하나씩 매개변수 data로 넘어오고
    //그것의 name, age, height를 Person컴포넌트에 주입하고
    //반환되서 result에 쌓인다. (push처럼~)
    //result에는 React.JSX.element[]이 되고
    //result는 Person컴포넌트 3개 담고있는 배열 ( React.JSX.element[] )
    const result = this.state.personList.map(
      (data)=>(<Person id={data.id} name={data.name} age={data.age} height={data.height}
                deletePersonInfo={this.deletePersonInfo}
                updatePersonInfo={this.updatePersonInfo}/>)
    )
    return(
      <div id='App'>
        <h1>Person CRUD</h1>
        <PersonInput addPersonInfo={this.addPersonInfo}/>
        {result}
      </div>
    )
  }
}

export default App;