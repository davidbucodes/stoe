import { RadioGroupView } from "@component/components/radioGroup/view";

export default function RadioGroup({
  options,
  selectedOption,
  onSelected,
}: {
  options: string[];
  selectedOption: string;
  onSelected: (selectedOption: string) => void;
}) {
  return (
    <RadioGroupView
      options={options}
      selectedOption={selectedOption}
      onSelected={onSelected}
    />
  );
}
