import btn from "../LoadMore/LoadMore.styled"

const LoadMore = ({ onFindMore }) => {
  return (
    <btn type="button" onClick={onFindMore}>
      Load More
    </btn>
  );
};

export default LoadMore;