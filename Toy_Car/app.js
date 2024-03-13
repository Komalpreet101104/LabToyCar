// the container element where toy cars will be displayed
const toyCarContainer = document.getElementById('toyCarContainer');

// an instance of the Hummer H2 toy car
const hummerH2 = new ToyCar(
    '2003 Hummer H2 w/Extra Wheels',
    'Gray',
    '1:24',
    'Diecast',
    '$29.99',
    'Jada Toys',
    '2003',
    'Detailed 1/24 scale diecast model of the 2003 Hummer H2 with extra wheels.',
    'pic.jpg',  
    true  
);

// TO display the Hummer H2 toy car in the interface.
displayToyCar(hummerH2);

function displayToyCar(toyCar) {
    const toyCarCard = document.createElement('div');
    toyCarCard.className = 'toyCarCard';

    
    toyCarCard.innerHTML = `
        <img src="${toyCar.imageURL}" alt="${toyCar.name}">
        <h3>${toyCar.name}</h3>
        <p>${toyCar.description}</p>
        <p>Price: ${toyCar.price}</p>
        <p>Extra Wheels Included: ${toyCar.extraWheels ? 'Yes' : 'No'}</p>
        <!-- Add more properties as needed -->
    `;

        // To append the toy car card to the toyCarContainer
toyCarContainer.appendChild(toyCarCard);
}
