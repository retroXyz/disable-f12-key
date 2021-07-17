// key.js.
// f12.keyDisable.

// # $start?

function f12consoleKey(){ // .start?

    // EventListenersAdding.
     // .start?

    window.addEventListener('keydown', event=>{ // .start?

        if(event.keyCode == 123 && event.target == document.body){ // .start?
            event.preventDefault();
        }; // .end?

    }); // .end?

    // EventListenersAdding.
     // .end?

}; // .end?
f12consoleKey(); // .end?

// # $end?
