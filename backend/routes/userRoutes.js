import { addNewUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers';

const routes = (app) => {
  app.route('/users')
      .get(getUsers)
      .post(addNewUser);
  app.route('/user/:userID')
      .get(getUserById)
      .delete(deleteUser)
      .put(updateUser);
}

export default routes;
