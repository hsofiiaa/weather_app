### Html структуру

```html
<div class="temperature-wrapper">
  <div class="temperature-display">
    <div class="temperature-icon">icons</div>
    temperature
  </div>
</div>
```

#### Props

```js
//Умови для іконок
const isCold = temperature <= 10;
const isHot = temperature > 20;

const props = {
  temperature: "number",
};
```
