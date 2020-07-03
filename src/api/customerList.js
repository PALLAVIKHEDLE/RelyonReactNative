import axios from 'axios';

export async function getCustomerList() {
  return await axios
    .get(
      `https://saralaccess.com/SaralServices/GetCustomer/Details?&companyId=506&&companyId=506`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(function(response) {
      //handle Success
      return response;
    })
    .catch(function(error) {
      //handle error
      return error;
    });
}
