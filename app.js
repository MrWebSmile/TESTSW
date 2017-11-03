var app = new Vue({
  el:'#app',
  data:{
    todos:[],
    text: ""
  },
  methods:{
    add:function(){
      this.todos.push(this.text);
    }
  }

});
