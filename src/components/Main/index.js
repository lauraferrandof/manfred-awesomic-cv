import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";

const tabs = [
  { name: "json", text: "JSON editor", linkTo: "/" },
  { name: "form", text: "Form", linkTo: "/form" },
  { name: "cv", text: "CV viewer", linkTo: "/preview" }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.getActiveTabFromLS()
    };
  }

  getActiveTabFromLS() {
    const localStorageActiveTab = localStorage.getItem("activeTab");
    const localStorageJSON = JSON.parse(localStorageActiveTab);
    if (!localStorageActiveTab) {
      return "json";
    } else {
      return localStorageJSON;
    }
  }

  handleTabClick(newActiveTabName) {
    this.setState({ activeTab: newActiveTabName });
    localStorage.setItem("activeTab", JSON.stringify(newActiveTabName));
  }

  render() {
    const { sample, cvRef, handleHTML, handlePrintBtn, handleJsonText, codeToExport, ...rest } = this.props;

    return (
      <main className="main">
        <div className="preview__wrapper">
          <nav className="main__nav">
            <ul className="nav__list">
              {tabs.map((tabItem, index) => (
                <li
                  key={index}
                  className={`nav__link ${
                    tabItem.name === this.state.activeTab ? "active" : ""
                    }`}
                  onClick={e => this.handleTabClick(tabItem.name)}
                >
                  {tabItem.name === this.state.activeTab ? (
                    tabItem.text
                  ) : (
                      <Link className="nav__link-route" to={tabItem.linkTo}>
                        {tabItem.text}
                      </Link>
                    )}
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Json sample={sample} handleJsonText={handleJsonText} />
              )}
            />
            <Route
              path="/form"
              render={() => <Form sample={sample} {...rest} />}
            />
            <Route
              path="/preview"
              render={() => (
                <Preview
                  sample={sample}
                  handlePrintBtn={handlePrintBtn}
                  cvRef={cvRef}
                  codeToExport ={codeToExport}
                  handleHTML={handleHTML}
                />
              )}
            />
          </Switch>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  rolesDefault: PropTypes.string.isRequired,
  goalDefault: PropTypes.string.isRequired,
  transportableSkillDefault: PropTypes.string.isRequired,
  significantExperienceDefault: PropTypes.string.isRequired,
  significantRelationshipsDefault: PropTypes.object.isRequired,
  companyDefault: PropTypes.string.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
  handleAddRoleItem: PropTypes.func.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleAddTransportableSkill: PropTypes.func.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
  handleAddSignificantRelationships: PropTypes.func.isRequired,
  handleRemoveSignificantRelationships: PropTypes.func.isRequired,
  handleSignificantRelationshipsInput: PropTypes.func.isRequired,
  handleDefaultInputChangeSignificantRelationships: PropTypes.func.isRequired,
  handleAddExperienceItem: PropTypes.func.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleAddEducationItem: PropTypes.func.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default Main;
