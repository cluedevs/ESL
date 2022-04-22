function loadSedanData() {
  fetch('data/sedan.json')
  .then(res => {
    return res.json();
  })
  .then(data => {

    data.forEach((current)=>{
        console.log(current.carId);
        let badgeSedan = document.createElement('div');
        badgeSedan.innerHTML = `
        <div class="car-wrapper">

        <div class="slider-wrapper">
          <h3 class="title-cars"> ${current.model} </h3>
        <div id="carouselControl${current.carId}" class="carousel slide" data-ride="carousel">
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
          <a class="carousel-control-prev" href="#carouselControl${current.carId}" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselControl${current.carId}" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <div class="options-price">$${current.priceDay} USD p/day</div>
        </div>
          <div class="details">
          <h3>Details</h3>
          <p>${current.brand} ${current.model} or similar </p>
          <p> Color ${current.color}
          </p>
          <p>
          ${current.baggages}  Baggages
          </p>
          <p>
          ${current.passengers}  passengers
          </p>
          <p>
          Air conditioning / Heating
          </p>
          <p>
          Pet friendly
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
            No Cancellation Fee
            </li>
            <li>
            Photos are for reference only
            </li>
            <li>
            A similar car with the same characteristics can be provided
            </li>
          </ul>
          <a class="route-link reservation-cta" href="/reservations" >RESERVE NOW!</a>
          </div>
          </div>
          `;
      document.getElementById('sedan').appendChild(badgeSedan);

    })

  })
  .catch(err => {
    // Do something for an error here
    console.log(err)
    return err;
  });
}