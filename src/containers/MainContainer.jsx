import React, { Component } from 'react';
import { getUserInfo, reposList } from '../services/GitHubFunctions';
import Form from '../components/Form/Form';
import ListOfRepos from '../components/Repos/ListOfRepos';
import UserInfo from '../components/UserInfo/UserInfo';

export default class MainContainer extends Component {

    state = {
      login: '',
      followers: 0,
      following: 0,
      url: '',
      repos: []
    }

    handleChange = ({ target }) => {
      this.setState({ login: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const { login } = this.state;
      Promise.all([
        getUserInfo(login),
        reposList(login)
      ])
        .then(([{ login, followers, following, url }, repos]) => this.setState({ login, followers, following, url, repos }));
    }

    render() {
      const { login, followers, following, url, repos } = this.state;
      return (
        <>
          <Form userName={login} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <ListOfRepos repos={repos}/>
          <UserInfo userName={login} followers={followers} following={following} link={url}/>
        </>
      );
    }
}
