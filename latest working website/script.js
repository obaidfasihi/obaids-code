document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];
    const price = parseInt(document.getElementById('price').value);

    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const cardName = document.createElement('h2');
    cardName.innerText = name;

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = title;

    const cardDescription = document.createElement('p');
    cardDescription.innerText = description;

    cardContainer.appendChild(cardName);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardDescription);

    // Handle image file
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const cardImage = document.createElement('img');
            cardImage.src = e.target.result;
            cardContainer.insertBefore(cardImage, cardName);
        };
        reader.readAsDataURL(imageFile);
    }

    // Append the card container to the cards container
    document.getElementById('cardsContainer').appendChild(cardContainer);

    // Create total bill container and append outside the card
    const totalbill = document.createElement('div');
    totalbill.classList.add('Bill');
    
    const prices = document.createElement('h2');
    prices.innerText = `Bill: ${price}`;  // Display the price with a label
    totalbill.appendChild(prices);

    // Append the total bill container to the main container
    document.getElementById('totalBillContainer').appendChild(totalbill);

    // Clear the form fields after submission
    document.getElementById('cardForm').reset();
});
