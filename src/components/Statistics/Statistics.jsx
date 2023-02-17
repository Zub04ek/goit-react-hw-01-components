import PropTypes from 'prop-types';
import { List, ListItem,  Format,  Percent } from './Statistics.styled';

export const Statistics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <List>
        {props.stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Format>{label}</Format>
            <Percent>{percentage}%</Percent>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ),
  }),
};
