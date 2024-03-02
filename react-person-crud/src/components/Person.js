import '../css/Person.css';
import {Component} from 'react';

class Person extends Component{
    constructor(props){
        super(props)
        this.state={
            edit:false,
            age:this.props.age
        }
    }

    deletePersonInfo=()=>{
        alert('삭제(Person)')
        const id=this.props.id
        this.props.deletePersonInfo(id)
        //App의 삭제함수
    }

    updatePersonInfo=()=>{
        alert('수정(Person)')
        if(this.state.edit===true){//클릭시에 입력창 활성화됬으면 데이터 보낸다.(두번째 클릭시)
            const id = this.props.id
            const age = this.state.age
            this.props.updatePersonInfo(id, age)
        }
        this.setState({
            edit:!this.state.edit
        })
    }

    ageChange=(e)=>{
        this.setState({
            age:e.target.value
        })
    }

    render(){
        if(this.state.edit===false){//수정불가능상태
            return(
                <div id='person'>
                    <div>
                        이름:{this.props.name}
                    </div>
                    <div>
                        나이:{this.props.age}
                    </div>
                    <div>
                        키:{this.props.height}
                    </div>
                    <div>
                        <button onClick={this.deletePersonInfo}>삭제</button>
                        <button onClick={this.updatePersonInfo}>수정</button>
                    </div>
                </div>
            )
        }else if(this.state.edit===true){//수정가능상태
            return(
                <div id='person'>
                    <div>
                        이름:{this.props.name}
                    </div>
                    <div>
                        나이:<input type='text' defaultValue={this.props.age}
                              onChange={this.ageChange}/>
                    </div>
                    <div>
                        키:{this.props.height}
                    </div>
                    <div>
                        <button onClick={this.deletePersonInfo}>삭제</button>
                        <button onClick={this.updatePersonInfo}>수정</button>
                    </div>
                </div>
            )
        }
       
    }
}

export default Person;
