import { addNewUser, getUsers, getUserById, updateUser, deleteUser, getUserByEmail, loginUser } from '../controllers/userControllers';

const routes = (app) => {
  app.route('/users')
      .get(getUsers)
      .post(addNewUser);
  app.route('/user/:userID')
      .get(getUserById)
      .delete(deleteUser)
      .put(updateUser);
  app.route('/user/email/:email')
      .get(getUserByEmail);
  app.route('/user/login')
      .post(loginUser);
}

export default routes;
