### Html структуру

```html
    <div class="modal-wrapper"
        <div class="modal">
            <div class="modal-box">
                <header class="modal-header">
	                Temperature
                </header>
                <div class="modal-content">
	                <div class="input">
		                <input class="input-box" type="text" value={temperature}/>
	                </div>
                </div>
                <footer class="modal-footer">
	                {children}
                </footer>
            </div>
        </div>
    </div>
```

#### Props

```js
    const props = {
        children: "any"
        onClick: "func"
        isOpen: "bool"
        temperature: "number"
    }
```
