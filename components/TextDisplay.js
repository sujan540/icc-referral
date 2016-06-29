import React,{Component} from 'react'

class TextDisplay extends Component{


  handleClick(){
    this.props.deleteLetter()
  }
  render(){
    return (
      <div>
        <div>{this.props.text}</div>
        <button onClick={this.handleClick.bind(this)} >Delete one letter</button>
      </div>
    )
  }
}

export default TextDisplay
