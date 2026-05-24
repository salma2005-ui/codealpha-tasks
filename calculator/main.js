let display = document.getElementById('display');

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function() {
        let value = this.value;
        
        if(value == 'AC') {
            display.value = '';
        } 
        else if(value == 'DE') {
            display.value = display.value.toString().slice(0, -1);
        } 
        else if(value == '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } 
        else {
            display.value += value;
        }
    });
});
