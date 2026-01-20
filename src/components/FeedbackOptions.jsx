import { Button } from "./styles";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </div>
  );
}
