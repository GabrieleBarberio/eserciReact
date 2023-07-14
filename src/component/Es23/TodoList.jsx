import React, { Component } from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //dichiarazione state
      todos: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }); //handle dell'input per controllare
  };

  handleAddItem = () => {
    const { inputValue, todos } = this.state;
    if (inputValue !== "") {
      // controllo che non vengano aggiunte task come stringhe vuote
      this.setState({
        todos: [...todos, inputValue], // aggiungo la nuova task senza sovrascrivere
        inputValue: "", //resetto l'input
      });
    }
  };

  render() {
    const { todos, inputValue } = this.state;

    return (
      <div>
        <ul>{todos && todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
