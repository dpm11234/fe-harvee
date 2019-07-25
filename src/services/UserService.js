import api from '../utils/api';

const login = (email, password) => {
   return api.post('/login', {
      email,
      password
   }).then(({data}) => {
      const user = {
         'user': data.user,
         'token': data.token,
         'token_type': data.token_type
      }
      console.log(user);
      return user;
   }).catch(err => console.log(err));
}

const userService = {
   login
}

export default userService;
