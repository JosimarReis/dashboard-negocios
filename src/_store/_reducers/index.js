import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { ramos } from './ramos.reducer';
import { produtos } from './produtos.reducer';
import { alert } from './alert.reducer';
import { estabelecimentos } from './estabelecimentos.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  authentication,
  users,
  produtos,
  alert,
  ramos,
  estabelecimentos
});

export default rootReducer;