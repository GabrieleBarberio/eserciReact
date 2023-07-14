import React, { Component } from "react";

class TodoList2 extends React.Component {
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

  handleReset = () => this.setState({ todos: [], inputValue: "" });
  handleDelete = (index) => {
    const { todos } = this.state; //instazio todo in questo scope
    const updatedTodos = todos.filter((_, i) => i !== index); // salvo in una variabile intermedia il nuovo array
    this.setState({ todos: updatedTodos }); //aggiorno lo state dopo l'eliminazione
  };
  render() {
    const { todos, inputValue } = this.state;

    return (
      <div>
        <ul>
          {todos &&
            todos.map((todo, i) => {
              return (
                <li key={i}>
                  {todo}{" "}
                  <button onClick={() => this.handleDelete(i)}>Delete</button>
                </li>
              );
            })}
        </ul>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>Add Todo</button>
          <button onClick={this.handleReset}> Reset</button>
        </div>
      </div>
    );
  }
}

export default TodoList2;
