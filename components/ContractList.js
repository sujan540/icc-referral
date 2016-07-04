import React,{Component} from 'react'
import Griddle from 'griddle-react'
import { connect } from 'react-redux'

var mapStateToProps = function(state){
    return {
      contracts: state.contracts
    }
}

export default class ContractList extends Component{

  constructor(props, context) {
    super(props, context);
  }

  getContractList(){
      const items = this.props.contracts


      return items;
  }

  render(){
    const { searchTerm } = this.props;
    const filteredItems = this.getContractList(searchTerm)
      return (<div>
              <Griddle results={filteredItems} columns={["id", "description", "finished"]} />
            </div>)
  }
}

export default connect(mapStateToProps)(ContractList)
