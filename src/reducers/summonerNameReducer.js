

function summonerNameReducer(state, action) {
    if (state === undefined) {
        return{
            apiInfo: [],
            summonerName: ['shuanspinstar' ],
        }
    }

    switch(action.type){
        case 'addName':
            return{
                ...state,
                summonerName: action.matchData.summoner
                
            }
        
        case 'apiFetchData':
        {
            return {
                ...state,
                apiInfo: action.payload
            }
        }
        
        default:
        return(state)
    }
}
export default summonerNameReducer;