import React from "react";

class TodoList3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddItem = () => {
    const { inputValue, todos } = this.state;
    if (inputValue !== "") {
      this.setState({
        todos: [...todos, inputValue],
        inputValue: "",
      });
    }
  };

  handleReset = () => this.setState({ todos: [], inputValue: "" });

  handleDelete = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, inputValue } = this.state;
    const { render } = this.props;

    return (
      <div>
        {render(todos, this.handleDelete)}
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

export default TodoList3;
