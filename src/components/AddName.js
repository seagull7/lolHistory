import React from 'react';
import List from './List';

class AddName extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            productname: '',

        }
    }
    summonerChangedHandler(e){
        this.setState({summoner: e.target.value});
    }


    render() {
        return (
            <div>
            <div className='addWrap'>
           <div className='wholeAdd'>
             
               <input className='add addName'
               type="text"
               placeholder="Summoner Name"
               onChange={this.summonerChangedHandler.bind(this)}
               value={this.state.summoner}
               />

               
               <button className='add addButton'
               onClick={() =>  this.props.addName({
                summoner: this.state.summoner
                })}>
                   Search Match History
               </button>
           </div> 
           </div>
           <List m={this.props.m} />
           </div>
        );
    }
}
export default AddName