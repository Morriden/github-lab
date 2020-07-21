import React from 'react';
import PropTypes from 'prop-types';

const ListOfRepos = ({ repos }) => {
  const repoDetails = repos.map(name => (
    <li key={name}>
      <p>{name}</p>
    </li>
  ));

  return (
    <ul>
      {repoDetails}
    </ul>
  );
};

ListOfRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListOfRepos;
