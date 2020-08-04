# Introduction
Vue lax allows you to use [lax.js](https://github.com/alexfoxy/lax.js) with vue.  
Lax is a Simple & light weight (3kb minified & zipped) vanilla javascript plugin to create smooth & beautiful animations when you scrolllll! Harness the power of the most intuitive interaction and make your websites come alive!  
lax.js is very easy to setup and comes with a great api, which can be used to add it to a vue project easily.  
To use lax.js with Vue we only need to do a few things.
* Setup lax when Vue mounts.
* Add our component element to lax to be updated automatically when they get *`mounted`*.
* Remove the component from lax before it gets destroyed (*`beforeDestroy`*)
* Update the component in lax whenever the component gets *`updated`*.

You can read this [article](https://dev.to/killdozerx2/using-lax-js-with-a-vue-project-3699) if you would like to setup lax with your vue project directly.  

**Vue-Lax** makes this process easier.  
Read the source code explanation [here](/source-code/) or [get started](/guide/using-vue-lax)
