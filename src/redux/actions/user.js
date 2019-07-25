import userService from '../../services/UserService';

export const login = (email, password) => {
   return dispatch => {
      userService.login(email, password)
         .then((user) => {
            dispatch({
               type: 'LOGIN',
               user
            });
            localStorage.setItem('user', JSON.stringify(user));
         })
         .catch(err => console.log(err));
   }
}

