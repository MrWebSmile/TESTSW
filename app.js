var app = new Vue({
  el:'',
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
