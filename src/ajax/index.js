import {
  get,
  post,
  ajax,
} from './ajax_axios';

export const getIndex = (userNmae, password) => {
    return get('http://localhost:8081//page/index/index.html', { userNmae, password } );
}

export const doLogin = (userNmae, password) => {
  return post('./login', { userNmae, password } );
}

export const getUser = (userNmae, info) => {
  return get('./user', { userNmae, info } );
}
