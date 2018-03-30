const routes = [
  { path: '/projects',    component: projects_list, props: true},
  { path: '/',            component: default_page},
  { path: '/home',component: default_page},
  { path: '/project/:id', component: single_project, props: true},
  { path: '/selections/:id',  component: single_selections, props: true},
  { path: '/students',    component: students}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

const app = new Vue({
  el: '#app',
  router,
  data: function(){
    return{
      loading: false
    }
  },
  methods:{
    getTagColors: function (projects,self){
      const tagsList   = ["Webapp", "Spring", "PHP", "JS", "React"];
      const colors     = ["orange", "lime", "php-purple", "pink", "baby-blue"];

      const projectTags = projects.tags.split(',');
      for(let i = 0; i < projectTags.length; i++)
      self.tagColors.push(colors[tagsList.indexOf(projectTags[i])]);
    }
  }
});
