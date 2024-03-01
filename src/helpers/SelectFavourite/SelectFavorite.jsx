import Select from "react-select";
import customStyles from './SelectFavourite.styled';

const options = [
  { value: null, label: "To $" },
  ...[...Array(21).keys()].map((price) => ({
    value: (price + 1) * 10,
    label: `$${(price + 1) * 10}`,
  })),
];

const SelectFavorite = ({ selectedPrice, setSelectedPrice }) => {
  const handleChange = (selectedOption) => {
    setSelectedPrice(selectedOption ? selectedOption.value : null);
  };

  const displayValue = selectedPrice !== null ? `To ${selectedPrice}$` : " ";

  return (
    <div>
      <Select
        className="basic-single"
        styles={customStyles}
        value={
          selectedPrice !== null
            ? { value: selectedPrice, label: `To ${selectedPrice}$` }
            : null
        }
        placeholder={`To ${displayValue}$`}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectFavorite;
