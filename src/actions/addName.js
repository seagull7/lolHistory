function addName (match){

    return{
        type: "addName",
        matchData: {
            summoner: match.summoner

        }

    }
    
}

export default addName;