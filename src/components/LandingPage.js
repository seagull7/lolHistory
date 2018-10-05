import React from 'react';
import {Link} from 'react-router-dom'

class Landing extends React.Component{
    constructor(props){
        super(props);
        
    }


    render() {
        let r =''
        const min = 1;
        const max = 20;
        const random = min + Math.round((Math.random() * (max - min)));
        console.log(random)
        switch(random){
            case 1:
            r = 'Let me guide you. -Soraka'
            break;
            case 2:
            r = 'Let\'s do this! -Jax'
            break;
            case 3:
            r = 'Your will, my hands. -Lee Sin'
            break;
            case 4:
            r = 'Everybody dies. Some just need a little help. -Lucian'
            break;
            case 5:
            r = 'In carnage, i bloom, like a flower in the dawn. -Jhin'
            break;
            case 6:
            r = 'Ok. -Rammus'
            break;
            case 7:
            r = 'That glimmer of hope you see, that\'s me. -Taric'
            break;
            case 8:
            r = 'They will regret opposing me. -Darius'
            break;
            case 9:
            r = 'The unseen blade is the deadliest. -Zed'
            break;
            case 10:
            r = 'Indeed, a wise choice. -Heimer'
            break;
            case 11:
            r = 'The heart is the strongest muscle. -Braum'
            break;
            case 12:
            r = 'Let me at \'em! -Fizz'
            break;
            case 13:
            r = 'Mundo! -Dr. Mundo'
            break;
            case 14:
            r = 'Embrace the darkness. -Nocturn'
            break;
            case 15:
            r = 'You wanna play too? It\'ll be fun! -Annie'
            break;
            case 16:
            r = 'All the world on one arrow. -Ashe'
            break;
            case 17:
            r = 'Know that if the tables were turned, I would show you no mercy! -Veigar'
            break;
            case 18:
            r = 'My heart and sword always for Demacia. -Garen'
            break;
            case 19:
            r = 'Welcome to the league of of Draven. -Draven'
            break;
            case 20:
            r = 'Fortune doesn\'t favor fools! -Miss Fortune'
            break;
            default:
            r = 'They are priveleged to die at my feet! -Pantheon'
        }
        return (
            <h1 className='main'> 
                {r}
                <Link to={`/search`}>               
                    <button id="button">click me</button>
                </Link>
           </h1>
        );
    }
}
export default Landing