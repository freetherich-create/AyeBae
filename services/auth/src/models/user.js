// Minimal user model placeholder for early development
class UserStore {
  constructor() {
    this.users = new Map();
  }
  create({ email, passwordHash, displayName }) {
    const id = Date.now().toString();
    const user = { id, email, displayName, passwordHash };
    this.users.set(email, user);
    return user;
  }
  findByEmail(email) {
    return this.users.get(email);
  }
}

module.exports = new UserStore();
