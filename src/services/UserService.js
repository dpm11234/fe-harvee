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
      
      return user;
   }).catch(err => console.log(err));
}

const register = ({ name, email, password, password_confirmation }) => {
   return api.post('/register', {
      name,
      email,
      password,
      password_confirmation
   }).then(({data}) => {
      console.log(data);
      return data;
   }).catch(err => console.log(err));
}

const userService = {
   login,
   register
}

export default userService;
