import PropTypes from 'prop-types';
import { Card, Description, Image, UserName, UserInfo, Stats, StatsItem, Quantity } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <StatsItem>
          <UserInfo>Followers</UserInfo>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <UserInfo>Views</UserInfo>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <UserInfo>Likes</UserInfo>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
