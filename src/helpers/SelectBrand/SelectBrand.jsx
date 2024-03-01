import Select from "react-select";
import customStyles from './SelectBrand.styled'

const SelectBrand  = ({ selectedMake, setSelectedMake, makes }) => {
  const options = [
    { value: null, label: "Enter the text" },
      ...makes.map((make, index) => ({
      value: make,
      label: make,
    })),
  ];

  const handleChange = (selectedOption) => {
    setSelectedMake(selectedOption ? selectedOption.value : "");
  };

  const displayValue =
    selectedMake !== null ? { selectedMake } : "Enter the text";

  return (
    <div>
      <Select
        className="basic-single"
        styles={customStyles}
        value={
          selectedMake !== null
            ? {
                value: selectedMake,
                label: selectedMake ? selectedMake : "Enter the text",
              }
            : null
        }
        placeholder={displayValue}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectBrand;