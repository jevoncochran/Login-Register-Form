import React from 'react';
import './App.css';
import "./App.scss";

import { Login, Register } from "./components/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    }
  }

  changeState() {
    const { isLoginActive } = this.state;
    if ( isLoginActive ) {
      this.RightSlide.classList.remove('right');
      this.RightSlide.classList.add('left');
    } else {
      this.RightSlide.classList.remove('left');
      this.RightSlide.classList.add('right');
    }
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? 'Register' : 'Login';
    const currentActive = isLoginActive ? 'Login' : 'Register';
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoginActive && <Login containerRef={(ref) => this.current = ref} />}
            {!isLoginActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
          <RightSlide current={current} containerRef={ref => this.RightSlide = ref} onClick={this.changeState.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;

const RightSlide = props => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  )
}

