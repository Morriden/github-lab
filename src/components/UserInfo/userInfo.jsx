import React from 'react';
import PropTypes from 'prop-types';

const userInfo = ({ userName, followers, following, link }) => (
  <section>
    <div>{userName}</div>
    <div>{followers}</div>
    <div>{following}</div>
    <div>{link}</div>
  </section>
);

userInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired
};

export default userInfo;
