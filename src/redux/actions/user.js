import userService from '../../services/UserService';

export const login = (email, password, history) => {
   return dispatch => {
      console.log('login action');
      userService.login(email, password)
         .then((user) => {
            if(user) {
               dispatch({
                  type: 'LOGIN',
                  user
               });
               localStorage.setItem('user', JSON.stringify(user));
               history.push('/');
            }
         })
         .catch(err => console.log(err));
   }
}

export const logout = () => {
   return dispatch => {
      dispatch({
         type: 'LOGOUT',
         user: {}
      });
      localStorage.removeItem('user');
   }
}

export const register = (data, history) => {
   return dispatch => {
      userService.register(data)
         .then(res => {
            console.log(res);
            history.push('/login');
         })
         .catch(err => console.log(err));
   }
}

