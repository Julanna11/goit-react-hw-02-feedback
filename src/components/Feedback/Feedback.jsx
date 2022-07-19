import React from 'react';
import { Button, ButtonList, ButtonClick } from './Feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback, opt }) => (
  <Button>
    {opt.map(opt => {
      return (
        <ButtonList key={opt}>
          <ButtonClick type="button" onClick={() => onLeaveFeedback(opt)}>
            {opt}
          </ButtonClick>
        </ButtonList>
      );
    })}
  </Button>
);

export default FeedbackOptions;
