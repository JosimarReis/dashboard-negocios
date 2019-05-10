import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { produtos } from './produtos.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  authentication,
  users,
  produtos,
  alert
});

export default rootReducer;