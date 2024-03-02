import { Component } from "react";
import '../css/PersonInput.css';
class PersonInput extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            age:'',
            height:''
        }
    }

    idChange=(e)=>{//event객체가 매개변수e에 담긴다.
        //console.log('idChange!')
        console.log(e.target.value)
        this.setState({
            id:e.target.value
        })
    }

    nameChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    ageChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            age:e.target.value
        })
    }

    heightChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            height:e.target.value
        })
    }

    addPersonInfo=()=>{
        alert('추가!(PersonInput)')
        //const id = this.state.id;
        //const name = this.state.name;
        //const age = this.state.age;
        //const height = this.state.height;
        const {id,name,age,height}=this.state
        //비구조화할당, 구조분해할당, destructuring assignment
        this.props.addPersonInfo(id,name,age,height)
        //App가 넘긴함수
    }

    render(){
        return(
            <div id='person-input'>
                <input type='text' onChange={this.idChange}/>
                <input type='text' onChange={this.nameChange}/>
                <input type='text' onChange={this.ageChange}/>
                <input type='text' onChange={this.heightChange}/>
                <button onClick={this.addPersonInfo}>추가</button>
            </div>
        )
    }
}

export default PersonInput;