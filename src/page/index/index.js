import './index.less';
import umbrella from 'umbrella-storage';
import { debug1 } from '../../util/debug';
debug1('hello');
umbrella.setLocalStorage('app', { appId: '123' });
console.log('这是页面index heelo world');
console.log('从stroage中取出的内容', umbrella.getLocalStorage('app'))