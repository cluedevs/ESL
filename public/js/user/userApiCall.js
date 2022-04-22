const registerUserApi = async (user) => {
  try {
    const isAuthenticated = await auth0.isAuthenticated();
    if (isAuthenticated) {
      // Get the access token from the Auth0 client
      const token = await auth0.getTokenSilently();
      const userId = user.sub.split("|")[1];
      const userPayload = {
        user_email: user.email,
        name: user.given_name + " " + user.family_name,
      };
      // Make the call to the API, setting the token
      // in the Authorization header
      const response = await fetch(`${rentalCarApi}/api/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(userPayload),
      });

      // Fetch the JSON result
      const responseData = await response.json();
      return responseData;
    }
  } catch (e) {
    // Display errors in the console
    console.error(e);
  }
};
