import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userName, followers, following, link }) => (
  <section>
    <div>{userName}</div>
    <div>{followers}</div>
    <div>{following}</div>
    <a href={link}><div>{link}</div></a>
  </section>
);

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired
};

export default UserInfo;
