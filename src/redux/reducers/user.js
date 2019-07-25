let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const userReducer = (state = initialState, action) => {

   switch(action.type) {
      case 'LOGIN':
         return {
            loggedIn: true,
            user: action.user
         }
      
      case 'LOGIN_FAIL':
         return {}
      
      case 'LOGOUT':
         return {}
         
      default: 
         // return state;
   }

   return state;

}

export default userReducer;

