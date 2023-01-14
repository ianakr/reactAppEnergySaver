class UserService {
  getUsers() {
    return fetch('http://localhost:3001/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  };

  getUser(id) {
    return fetch(`http://localhost:3001/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  addUser(user) {
    return fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  updateUser(user) {
    return fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  deleteUser(id) {
    return fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }
}

export default new UserService();

