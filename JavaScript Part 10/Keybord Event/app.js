let inp = document.querySelector("input");
inp.addEventListener("keydown", function(){
    console.log("Key was pressed");
});

// Types of Keyboard Events

// keydown → Fires when a key is pressed down (fires continuously if held).

// keyup → Fires when a key is released.

// keypress → (Deprecated ❌) Older event for when a key was pressed; now replaced by keydown/keyup.