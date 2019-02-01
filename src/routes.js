import App from './app';
import Home from './containers/Home/';
import NotFind from './containers/NotFind';

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [{
  path: '/wechat-page',
  component: App,
  loadData: App.loadData,
  routes: [
    {
      path: '/wechat-page/list',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    }, {
      component: NotFind
    }
  ]
}];