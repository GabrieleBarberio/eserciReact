import React, { createContext } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

const LanguageContext = createContext();

export class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "",
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div>
        <label htmlFor="LanguageSelect">Select Language:</label>

        <select
          id="LanguageSelect"
          value={selectedLanguage}
          onChange={this.handleLanguageChange}
        >
          <option value="default">-- Select --</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>

        <LanguageContext.Provider value={selectedLanguage}>
          <DisplayLanguage
            selectedLanguage={
              selectedLanguage == "default" ? "" : selectedLanguage
            }
          />
        </LanguageContext.Provider>
      </div>
    );
  }
}
