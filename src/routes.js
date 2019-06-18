import App from './app';
import Home from './containers/Home/index';
import Movie from './containers/Movie/index';
import NotFind from './containers/NotFind/index';

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
      path: '/wechat-page/movie/:id',
      component: Movie,
      key: 'movie'
    }, {
      component: NotFind
    }
  ]
}];