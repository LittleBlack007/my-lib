import MyTest from './src/my-test.vue';

MyTest.install = function( Vue ) {
  Vue.component(MyTest.name, MyTest);
}

export default {
  MyTest,
};