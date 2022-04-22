const registerReservationApi = async (user, reservation) => {
  try {
    const isAuthenticated = await auth0.isAuthenticated();
    if (isAuthenticated) {
      // Get the access token from the Auth0 client
      const token = await auth0.getTokenSilently();
      const userId = user.sub.split("|")[1];
      const reservationPayload = {
        user_id: userId,
        user_email: user.email,
        start: reservation.start,
        end: reservation.end,
        phone: reservation.phone,
        car_type: reservation.car_type,
        description: reservation.description,
      };
      // Make the call to the API, setting the token
      // in the Authorization header
      const response = await fetch(
        `${rentalCarApi}/api/v1/cars/123/reservations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(reservationPayload),
        }
      );

      // Fetch the JSON result
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    }
  } catch (e) {
    // Display errors in the console
    console.error(e);
    return null;
  }
};
