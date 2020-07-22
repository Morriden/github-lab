export const getUserInfo = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json());
};

export const reposList = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json());
};
