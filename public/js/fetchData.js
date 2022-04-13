fetch('data/cars.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);

    data.forEach(function (current){
        let badge = document.createElement('div');
        badge.innerHTML = `
        <div class="car-wrapper">
        <div>
          <h3 class="title"> ${current.brand} ${current.model} </h3>
          <div class="swiper">
          <div class="swiper-wrapper">
          <div class="swiper-slide" id="swiper">
              <img src="${current.pics[0]}" width="200" height="200" alt="${current.brand}"/>
              </div>
              <div class="swiper-slide"><img src="${current.pics[1]}" width="200" height="200" alt="${current.brand}"/></div>
              <div class="swiper-slide"><img src="${current.pics[2]}" width="200" height="200" alt="${current.brand}"/></div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
        </div>
        <div class="options-only-phone">${current.priceDay}</div>
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