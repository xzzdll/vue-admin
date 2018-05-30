<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
<router-link to="/HelloWorld">
          {{author}}
 </router-link>
      </li>
      <li>
      <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <li>
      <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <li>
        <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <br>
      <li>
       <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
       <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <li>
        <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <li>
       <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
      <li>
       <router-link to="/HelloWorld">Go to Foo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    author () {
      return this.$store.state.author;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
