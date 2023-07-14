import React, { Component, createContext } from "react";

const LanguageContext = createContext();

export class DisplayLanguage extends Component {
  static contextType = LanguageContext;

  render() {
    const language = this.contextType;
    const selectedLanguage = this.props.selectedLanguage;

    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <p>selected: {selectedLanguage}</p>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
