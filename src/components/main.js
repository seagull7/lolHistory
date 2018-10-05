import React from 'react';
import AddName from './AddName';
import Landing from './LandingPage';
import Match from './Match'
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'



class Main extends React.Component {
    constructor(props){
        super(props);
    }

  
    componentWillReceiveProps(nextprops){
        if (nextprops.summonerName !== this.props.summonerName){
            https://na1.api.riotgames.com/lol/match/v3/matches/28764449?api_key=RGAPI-36c58a10-555e-4eb8-bafb-7d06a10cf268
        fetch('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+nextprops.summonerName+'?api_key=RGAPI-437c45d2-21d3-4c80-9e7e-28a6289fe07f')
        .then(response => response.json())
        .then(response => fetch('https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/'+response.accountId+'?beginIndex=0&endIndex=20&api_key=RGAPI-437c45d2-21d3-4c80-9e7e-28a6289fe07f'))
        .then(response => response.json())

        .then(response => this.props.onFetch(response.matches))

        }

    }
  

    render(){
        let matches =this.props.summonerData;
        return (
            <div className='total'>
                <div className='titleO'>
                    <div className='title'>
                        <h1>Legend History</h1>
                    </div>
                </div>
                <BrowserRouter>
                <Switch><Route exact path='/search' component={()=><AddName m={matches} addName={this.props.onAddName} className='bottomH'/>}/>
                <Route exact path ='/' component={()=><Landing />}/>
                <Route path ='/match' component={()=><Match />}/></Switch>
                </BrowserRouter>
                


                    
            </div>
        );
    }
}
export default Main