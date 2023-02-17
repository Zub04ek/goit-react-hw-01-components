import PropTypes from 'prop-types';
import { TiMediaRecord } from "react-icons/ti";
import { Item } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item isonline={isOnline.toString()}>
      <TiMediaRecord size={30}/>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
};
