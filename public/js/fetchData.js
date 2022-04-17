function loadCarsData() {
  fetch('data/cars.json')
  .then(res => {
    return res.json();
  })
  .then(data => {

    data.forEach(function (current){
        let badge = document.createElement('div');
        badge.innerHTML = `
        <div class="car-wrapper">
        <div class="slider-wrapper">
          <h3 class="title-cars"> ${current.brand} ${current.model} </h3>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block swiper" src="${current.pics[0]}" alt="${current.brand}">
            </div>
            <div class="carousel-item">
              <img class="d-block swiper" src="${current.pics[1]}" alt="${current.brand}">
            </div>
            <div class="carousel-item">
              <img class="d-block swiper" src="${current.pics[2]}" alt="${current.brand}">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <div class="options-price">$${current.priceDay} COP/day</div>
        </div>
          <div class="details">
          <h3>Details</h3>
          <p>
          2 Baggages
          </p>
          <p>
          5 passengers
          </p>
          <p>
          Automatic
          </p>
          <p>
          Air conditioning
          </p>
          </div>
          <div class="rate-details">
          <h3>Rate Details</h3>
          <ul>
            <li>
            Unlimited Mileage
            </li>
            <li>
            Vehicle Assistance Service (mechanical defect)
            </li>
            <li>
            All Local Taxes and Fees
            </li>
            <li>
              One Additional Driver
            </li>
            <li>
            Third Party Liability Insurance $1Million , With No Deductible- (EP/LIS/TPL)
            </li>
            <li>
            Full Coverage of Rental Vehicle, With No Deductible: Accident & Theft (CDW/LDW)
            </li>
            <li>
            No Cancellation Fee</ul>
            </li>
          </ul>
          <button onclick="login()" class="reservation-cta">Reserve now!</button>
          </div>
          </div>
          `;
      document.getElementById('cars').appendChild(badge);

    })

  })
  .catch(err => {
    // Do something for an error here
    console.log(err)
    return err;
  });
}
