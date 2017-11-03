var app = new Vue({
  el: '#appTodo',
  data:{
    todos: [],
    text: ""
  },
  methods:{
    add: function(){
      this.todos.push( {text: this.text} )
      console.log(this.todos.text)
    }
  }

});
