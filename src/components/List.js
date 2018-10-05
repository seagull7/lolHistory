import React from 'react';
import {Link} from 'react-router-dom'

class List extends React.Component{
    constructor(props){
        super(props);

        }
    


    render() {
        return (
            <div className='list'>
            { this.props.m.map(match =>{
                return <Link to={`/match/${match.gameId}`}>
                    <div key = {match.gameId} className='matchItem'>
                    <div className='txt'>champion:{match.champion}</div>
                    <div className='txt'>gameId: {match.gameId}</div>
                    <div className='txt'>lane: {match.lane}</div>
                    <div className='txt'>platformId: {match.platformId}</div>
                    <div className='txt'>role: {match.role}</div>
                    <div className='txt'>season: {match.season}</div>
                    <div className='txt'>timestamp: {match.timestamp}/1000/60</div>
                    </div>
                    </Link>
            })}       
        </div>
        );
    }
}
export default List