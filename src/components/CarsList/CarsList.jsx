import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { List, Item } from './CarsList.styled';

const CarsList = ({ cars}) => {
  const location = useLocation();
  return (
    <List>
      {cars.map(({ id, original_title }) => (
        <Item key={id}>
          <Link state={{ from: location }} to={`/cars/${id}`}>
            {original_title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CarsList;