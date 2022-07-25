import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonList, ButtonClick } from './Feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Button>
    {options.map(option => {
      return (
        <ButtonList key={option}>
          <ButtonClick type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </ButtonClick>
        </ButtonList>
      );
    })}
  </Button>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
