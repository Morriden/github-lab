export const userInfo = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(({ userInfo }) => userInfo);
};

export const reposList = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(({ titles }) => titles);
};
