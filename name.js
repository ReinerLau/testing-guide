const { UserStore } = require("./UserStore");

function getUserDisplayName() {
  const user = UserStore.getUser();
  return `${user.LastName}, ${user.FirstName}`;
}

module.exports = getUserDisplayName;
