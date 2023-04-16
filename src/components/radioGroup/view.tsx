import { Styles } from "./styles";

export function RadioGroupView({
  options,
  selectedOption,
  onSelected,
}: {
  options: string[];
  selectedOption: string;
  onSelected: (selectedOption: string) => void;
}) {
  return (
    <Styles.RadioGroup>
      {options.map((option) => (
        <Styles.RadioButton key={option}>
          <Styles.RadioButtonInput
            checked={option === selectedOption}
            value={option}
            id={option}
            onChange={(e) => onSelected(e.target.value)}
          />
          <Styles.RadioButtonLabel htmlFor={option}>
            {option}
          </Styles.RadioButtonLabel>
        </Styles.RadioButton>
      ))}
    </Styles.RadioGroup>
  );
}
