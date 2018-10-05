import {connect} from 'react-redux';
import Main from "./components/main";
import addName from './actions/addName';
import apiData from './actions/apiData';


function mapStateToProps(state){
  return{
    summonerName:  state.summonerName,
    summonerData: state.apiInfo,
  }
}
function mapDispatchToProps(dispatch){
  return{
    onAddName:(summonerData) => dispatch(addName(summonerData)),
    onFetch: (response) => dispatch(apiData(response))
  }
}
var connectedComponent = connect (
  mapStateToProps,
  mapDispatchToProps
)(Main);


export default connectedComponent;
