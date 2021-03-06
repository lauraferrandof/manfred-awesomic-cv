import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLanguageItem from "../FormLanguageItem";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import Button from "../Button";

const proficiencyLevels = [
  "elementary",
  "limited working",
  "professional working",
  "full professional",
  "native or bilingual"
];

class FormLanguages extends Component {
  render() {
    const {
      languages,
      languageDefault,
      proficiencyDefault,
      handleDefaultInputChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange
    } = this.props;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Languages</legend>

        <p className="form__section-description">
          List of languages and your proficiency level
          <span className="required_field">*</span></p>

        {languages && !!languages.length && languages.map((item, index) => {
          return (
            <FormLanguageItem
              key={index}
              ind={index}
              item={item}
              languages={languages}
              proficiencyLevels={proficiencyLevels}
              handleRemoveLanguageItem={handleRemoveLanguageItem}
              handleLanguageChange={handleLanguageChange}
            />
          );
        })}

        <div className="form__container">
          <p className="form__container-title">More languages</p>

          <FormInput
            labelContent="Language*"
            styles="form__input"
            inputType="text"
            inputName="languageDefault"
            inputValue={languageDefault}
            example="Ex: English"
            handleInputChange={handleDefaultInputChange}
          />

          <FormSelect
            labelContent="Proficiency*"
            styles="form__select"
            selectName="proficiencyDefault"
            selectValue={proficiencyDefault}
            selectOptions={proficiencyLevels}
            handleSelectChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddLanguageItem}
          >
            Add
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormLanguages.propTypes = {
  languages: PropTypes.array.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default FormLanguages;
