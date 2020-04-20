import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Namrata', age: 28 },
      { name: 'Tushar', age: 27 }
    ],
    otherState: 'Hello'
  }

  switchNameHandler = (newName) => {
    // console.log('yayyy!!!');
    //Don't do this: this.state.person[0].name = "Namrata";
    this.setState({person: [
      { name: newName, age: 28 },
      { name: 'T2', age: 27 }
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1> I will be awesome react developer </h1>
        <p> This is really working!! </p>
        {/* passing arrow function to onClick with () will not execute immediately and it will be anonymous function. default param for arrow function here will be an event */}
        <button onClick={() => this.switchNameHandler('Namrata!!')}> Switch Name </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          click={this.switchNameHandler.bind(this, 'Namya')}
        />
        <Person name={this.state.person[1].name} age={this.state.person[1].age }> okay okay.. </Person>
        {/* <Person />
        <Person /> */}

      </div>
      // <h1> I will be awesome react developer </h1>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I will be awesome react developer now?'));
  }
}

export default App;


// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     person: [
//       { name: 'Namrata', age: 28 },
//       { name: 'Tushar', age: 27 }
//     ]
//   });

//   const [otherState, setOtherState] =  useState('another useState');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({person: [
//       { name: 'namya', age: 28 },
//       { name: 'T2', age: 27 }
//     ],
//     // otherState: personsState.otherState
//     });
//   }

//   return (
//       <div className="App">
//         <h1> I will be awesome react developer </h1>
//         <p> This is really working!! </p>
//         <button onClick={switchNameHandler}> Switch Name </button>
//         <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
//         <Person name={personsState.person[1].name} age={personsState.person[1].age }> okay okay.. </Person>
//       </div>
//     );
// }

// export default app;
