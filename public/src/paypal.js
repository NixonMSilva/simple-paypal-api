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
    return fetch('https://simple-paypal-api-logecywfca-uc.a.run.app/checkout', {
    // return fetch('http://localhost:8080/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        addressLine1: formValues.addressLine1,
        addressLine2: formValues.addressLine2,
        city: formValues.city,
        stateProvince: formValues.stateProvince,
        zipPostalCode: formValues.zipPostalCode,
        country: formValues.country,
        amount: formValues.amount
      })
    }).then(function (res) {
      return res.json()
    }).then(function (orderData) {
      return orderData.data.id
    })
  },
  onApprove: function (data, actions) {
    console.log(data)
    return fetch('https://simple-paypal-api-logecywfca-uc.a.run.app/capture', {
    // return fetch('http://localhost:8080/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderId: data.orderID
      })
    }).then(function (res) {
      return res.json()
    }).then(function (details) {
      console.log('Details', details)
      const transactionId = details.data.transactionId
      window.location.href = `/confirmed?id=${transactionId}`
    })
  }
}).render('#paypal-button-container')
