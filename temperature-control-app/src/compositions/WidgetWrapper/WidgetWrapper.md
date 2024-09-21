### Html структуру

```html
     <div class= "widget-container hot  cold neutral">
       
    </div>
```

#### Props

```js	
    // Умови для классів 
    const isHot= temperature > 20;
    const isCold= temperature <= 10;
    const isNeutral= temperature > 10 && temperature <= 20;

    const props = {
        children: "any"
        temperature: "number"
    }
```
