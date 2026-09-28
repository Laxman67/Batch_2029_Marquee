//

// get user
// update user
// Log user data

const user = {
  name: 'Laksh',
  department: 'CSE',
  address: 'Punajb',
};
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(user);
  }, 1000);
});
