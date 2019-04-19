import React, {Component} from 'react';
import { connect } from 'react-redux';

class Lister extends React.Component{
//function Lister(props){
    //console.log('render',props);
    state = {
        items :  ['adc', 'sdx', 'dfdfdf'],
    }
    render(){
        console.log(this.props);
        let todo =
                this.state.items.map((item, index)=>{
                    return<li key={index}>{item}</li>
                })
           
    return(
        <div>
        <h1>Lister</h1>
            <form onSubmit={this.submit}>
            <input value={this.state.inputText} onChange={this.state.inputChange}/><br/><br/>
            </form>
            <ul>{todo}</ul>
            </div>
    );
}
}
function mapStateToProps(state){
return{
    inputText: state.inputText,
    items: state.items 
};
}

function mapDispatchToProps(dispatch){
    return{
        inputChange:(e)=>{
            console.log('change');
            const action = {type:'CHANGE_INPUT_TEXT', text:e.target.value};
            dispatch(action);
        },
        submit:(e)=>{
            console.log('submitting');
            e.preventDefault();
            const action = {type:'ADD-ITEM'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lister);