# Using Vue-Lax

## Setup
* Get started by installing vue-lax.
```bash
npm install vue-lax
```

* Add the plugin to Vue.(*main.js*)
```javascript
import { VueLax } from "vue-lax";

Vue.use(VueLax)
```
:::tip
You can also pass [options](/guide/plugin#Options) to the *VueLax* plugin
:::
The plugin also adds lax as prototype property to your Vue instance, so you can easily access it as `this.$lax` in all your components.

## Adding lax animations
When it comes to adding lax based animations, you have two options.
* Use the wrapper component around static markup or third party components.
* Add the mixin to your custom components.

## Using the wrapper
The wrapper does exactly what it's called. Wraps around a component and takes care of adjusting it so you can simply add markup for lax animations.

:::warning
If your component's reactivity can change the scroll animation, for example *margin-top based on some reactive property which can cause issues with transition effects*, use the mixin with the component instead.
:::
```Vue
<template>
	<lax-wrapper>
		<!-- Your markup or component here -->	
	</lax-wrapper>
</template>

<script>
import { LaxWrapper } from "vue-lax";
export default {
	components: {
		LaxWrapper,
	}
}
</script>
```
:::tip
You can add data-lax-* attributes directly to the wrapper as well.  
By default `<lax-wrapper>` renders as a div but you can pass a `tagName` prop to change this based on your need.  
```Vue
	<!-- This will render as a span -->	
	<lax-wrapper tagName="span">
		<!-- Your markup or component here -->	
	</lax-wrapper>
```
:::

## Using the mixin
The `mixin` hooks into 3 lifecycle events of your components.
* `mounted`: Adds the component to lax so it can be animated.
* `beforeDestroy`: Removes the component from lax so it doesn't get animated any more.
* `updated`: Updates the component's styles when a reactive property changes.

```Vue
<template>
	<!-- Your component template here -->	
</template>

<script>
import { LaxComponentMixin } from "vue-lax";
export default {
	mixins: [ LaxComponentMixin ]
}
</script>
```