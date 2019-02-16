import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';


class FormSignificantRelationShipsItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveSignificantRelationships, ind } = this.props;
    handleRemoveSignificantRelationships(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleSignificantRelationshipsInput, ind } = this.props;
    handleSignificantRelationshipsInput(value, name, ind);
  }

    render() {
      const { relationships, ind } = this.props;
      const { name, comment, role, contact, company } = relationships;
      return (
        <div ind={ind} className="form__container">
          <FormInput
            labelContent="Name"
            styles="form__input"
            inputType="text"
            inputName="name"
            inputValue={name}
            example="Ex: Steve Jobs"
            handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Comment"
            styles="form__input"
            inputType="text"
            inputName="comment"
            inputValue={comment}
            example="Ex: "
            handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Role"
            styles="form__input"
            inputType="text"
            inputName="role"
            inputValue={role}
            example="Ex: CEO"
            handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Contact"
            styles="form__input"
            inputType="email"
            inputName="contact"
            inputValue={contact}
            example="Ex: email@email.com"
            handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Company"
            styles="form__input"
            inputType="text"
            inputName="company"
            inputValue={company}
            example="Ex: IBM"
            handleInputChange={this.handleInputChange}
          />
          <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
          </Button>
          </div>
        </div>

      );
    }
  }

  FormSignificantRelationShipsItem.propTypes = {
    relationships: PropTypes.object.isRequired,
    ind: PropTypes.number.isRequired,
    handleRemoveSignificantRelationships: PropTypes.func.isRequired,
    handleSignificantRelationshipsInput: PropTypes.func.isRequired
  }


export default FormSignificantRelationShipsItem;
