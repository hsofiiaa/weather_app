### Html структуру

```html
<div class="widget-controllers">
	<div class="button-container">
		<button type="button" class="_cold">Cold</button>
		<button type="button" class="_hot">Hot</button>
		<button type="button">Modal Base</button>
		<button type="button">Modal Temperature</button>
	</div>
</div>
```

#### Props

```js
   const props = {
	    onCold: "func",
		onHot: "func",
		onModal: "func",
		onModalTemperature: "func"
    }
```
