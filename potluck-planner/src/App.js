import React from 'react';
import Test from './Components/test';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register } from './Components/index';

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/test" exact component={Test} />
//           <Route path="/login-page" exact component={LoginPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right');
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? 'Register' : 'Login';
    const currentActive = isLogginActive ? 'Login' : 'Register';
    return (
      <Router>
        <NavBar
          current={current}
          currentActive={currentActive}
          containerRef={ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)}
        />
        <div className="App">
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive && (
                <Login containerRef={ref => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <Register containerRef={ref => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
