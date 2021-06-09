// Get the button element
const addItemButton = document.getElementById('add-item-button');
// Set total items to zero
let totalItems = 0;
var shoppingList = [];
// Execute an event when the button is clicked
function run() {
    addItemButton.addEventListener('click', function() {
        // Get the input text element
        const itemText = document.getElementById('add-item'); 
        // Check if the input text box has a value
        if (itemText.value == '') {
            alert('Hi shopper,\nYou need to add an item');
        }
        if (shoppingList.includes(itemText.value.toLowerCase())) {
            alert('Hi shopper,\nYou have already added this item to your list');
        }
        if (shoppingList.length > 10) {
            alert('Hi shopper,\nYou are only allowed to add 10 items to the list');
        }
        if (itemText.value != '' && !shoppingList.includes(itemText.value.toLowerCase()) && shoppingList.length < 10) {
            // Get the ul element 
            const mainList = document.getElementById('main-list');
            // Create the li element
            let li = document.createElement('li');
            // Add the class 'main-item' to the li element
            li.classList.add('main-item');
            // Create the input element
            let inputCheck = document.createElement('input');
            // Set attribute ti type radio
            inputCheck.setAttribute('type', 'checkbox');
            
            // Append radio element as a child to li element
            li.appendChild(inputCheck);
            // Create the text node for the text input value
            let span = document.createElement('span');
            let textNode = document.createTextNode(capitalize(itemText.value));
            span.append(textNode);
            // Append as a child to li
            li.appendChild(span);
            // Append li element to the main list
            mainList.appendChild(li);
            // Append value to shopping list
            shoppingList.push(itemText.value.toLowerCase());
            inputCheck.addEventListener('change', function() {
                span.classList.toggle('strike');
            });
            // Clear the text field value
            itemText.value = '';
            // Get the item count paragraph
            let itemCount = document.getElementById('item-count');
            // Increment total items by one when item is added
            totalItems = totalItems + 1;
            // Create text count node with the total items value + items
            let itemCountNode = document.createTextNode(totalItems + ' items');
            // Replace the text count node each time a text is added
            itemCount.replaceChild(itemCountNode, itemCount.childNodes[0]);

        }
    }); 
}

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}


run()