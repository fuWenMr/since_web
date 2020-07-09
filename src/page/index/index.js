// public 样式 放在这里是为避免重复引用和版本更新
import 'antd/dist/antd.css';


import './index.less';
import umbrella from 'umbrella-storage';
import message from 'antd/lib/message';
import { getUser, doLogin, getIndex } from '~/ajax';
import { debug1 } from '~/util/debug';
debug1('hello');
umbrella.setLocalStorage('app', { appId: '123' });
console.log('这是页面index heelo world');
console.log('从stroage中取出的内容', umbrella.getLocalStorage('app'));

message.success('假装这是一个持续的loading');


doLogin('a', 'b').then((code, data, msg) => {
  if (code === 0) {
    message.success('请求成功');
    return ;
  }
  message.error('大概是用户的错吧');
}).finally(() => {
  message.success('假装这是请求结束 loading消失');
});
