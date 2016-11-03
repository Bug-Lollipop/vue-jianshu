/**
 * Created by hx on 2016/11.03.
 */
'use strict';
//注册路由
// 定义路由规则
// 每条路由规则应该映射到一个组件。
export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: require('./components/Home.vue'),
      subRoutes: {
        '/article': {
          name: 'article',
          component: require('./components/Article.vue')
        }
      }
    },
    '/topic': {
      name: 'topic',
      component: require('./components/Topic.vue'),
      subRoutes: {
        'topic_article': {
          name: "topic_article",
          component: require('./components/Topic_article.vue')
        }
      }
    },
    '/bonus': {
      name: "bonus",
      component: require('./components/Bonus.vue')
    },
    '/login': {
      name: "login",
      component: require('./components/Login.vue')
    },
    '/download': {
      name: "download",
      component: require('./components/Download.vue')
    }
  })
}
