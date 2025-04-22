const carList = document.getElementById('carList');

const proxy = 'https://corsproxy.io/?';
const url = 'https://carapi.app/api/trims?year=2020';

fetch(proxy + url)
  .then(response => response.json())
  .then(json => {
    const cars = json.data.slice(0, 50); 
    cars.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.innerHTML = `
        <img src="https://via.placeholder.com/300x200?text=${encodeURIComponent(car.name)}" alt="${car.name}" />
        <h3>${car.year} ${car.name}</h3>
        <p>${car.description}</p>
        <p><strong>MSRP:</strong> $${car.msrp.toLocaleString()}</p>
      `;

      card.onclick = () => {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        window.location.href = 'cars-details.html';
      };

      carList.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
    carList.innerHTML = '<p>Failed to load car data. Please try again later.</p>';
  });
