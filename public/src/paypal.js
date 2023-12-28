/* eslint-disable dot-notation */
const getFormValues = () => {
  const form = document.getElementById('buyer-form')

  const amount = parseFloat(document.getElementById('total-value').innerHTML.replace(/[^0-9.-]/g, ''))

  const firstName = form.elements['first_name'].value
  const lastName = form.elements['last_name'].value
  const addressLine1 = form.elements['address_line1'].value
  const addressLine2 = form.elements['address_line2'].value
  const city = form.elements['city'].value
  const stateProvince = form.elements['state_province'].value
  const zipPostalCode = form.elements['zip_postal_code'].value
  const country = form.elements['country'].value

  return {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    city,
    stateProvince,
    zipPostalCode,
    country,
    amount
  }
}

// eslint-disable-next-line no-undef
paypal.Buttons({
  style: {
    color: 'gold',
    shape: 'rect',
    label: 'paypal',
    layout: 'vertical',
    height: 40
  },
  createOrder: function (data, actions) {
    const formValues = getFormValues()
    console.log(formValues)
    return true
    /* return fetch('https://your-api-endpoint/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Add other headers if needed
      },
      body: JSON.stringify({
        // Include client data needed for order generation
        // Example: pass client data received from the form
        // Replace this with your actual client data
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        addressLine1: formValues.addressLine1,
        addressLine2: formValues.addressLine2,
        city: formValues.city,
        stateProvince: formValues.stateProvince,
        zipPostalCode: formValues.zipPostalCode,
        country: formValues.country,
        amount: formValues.amount // Example amount
        // Include other necessary data
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to generate order');
      }
      return response.json();
    })
    .then(orderData => {
      // Return the order ID obtained from the API response
      return orderData.orderID; // Replace 'orderID' with your actual order ID property
    })
    .catch(error => {
      console.error('Error generating order:', error);
      throw error; // Propagate the error for handling in the onError function
    }) */
  }
}).render('#paypal-button-container')
