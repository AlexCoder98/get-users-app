import React from 'react';

import Button from './components/Button/Button';
import UserList from './components/UserList/UserList';

import { AppState, AppProps } from './types/app-state';

import './App.css';

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    users: [],
  }

  async getUsers() {
    const pageNumber = Math.floor(Math.random() * 2) + 1;
    const url = `https://reqres.in/api/users?page=${pageNumber}`;
    try {
      const response = await fetch(url);
      const users = (await response.json());
      this.setState(state => ({
        users: users.data,
      }))
    } catch (error) {
      if (typeof error === 'string') {
        alert(error);
      } else if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header>
          <Button
            content={'Get Users'}
            onClick={this.getUsers.bind(this)}
          />
        </header>
        <UserList users={this.state.users} />
      </div>
    );
  }

}

export default App;
