import React from 'react';
import PropTypes from 'prop-types';

const ListOfRepos = ({ repos }) => {
  const repoDetails = repos.map(repo => (
    <li key={repo.name}>
      <a href={repo.html_url}><p>{repo.name}</p></a>
    </li>
  ));

  return (
    <ul>
      {repoDetails}
    </ul>
  );
};

ListOfRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListOfRepos;
