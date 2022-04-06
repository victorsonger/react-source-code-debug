import React from 'react'
import './indes.css'
class OriginDemo extends React.Component {
  constructor(props) {
    super(props)
    this.buttonRef = React.createRef();
  }
  state = {
    count: 0
  }
  componentDidMount() {
    const button = this.buttonRef.current
    setTimeout( () => this.setState( { count: 6 } ), 500 )
    // setTimeout( () => button.click(), 600) // 这样 页面变化是 0 -> 6 -> 8
    setTimeout( () => button.click(), 500) // 这样 页面变化是 0 -> 2 -> 8
    // setTimeout( () => {this.setState( { count: 1 } ); this.setState( { count: 3 } )}, 500 )  // 只写这一行 0 -> 3

  }
  handleButtonClick = () => {
    this.setState( prevState => {
      return { count: prevState.count + 2 }
    } )
  }
  render() {
    return <div className={"origin-demo"}>
      <p>不需要点击这个按钮，这个按钮是交给js去模拟点击用的，模拟点击之后产生的是高优先级任务</p>
      <button ref={this.buttonRef} onClick={this.handleButtonClick}>增加2</button>
      <div>
        {Array.from(new Array(16000)).map( (v,index) =>
          <div key={index}>{this.state.count}</div>
        )}
      </div>
    </div>
  }
}
export default OriginDemo
