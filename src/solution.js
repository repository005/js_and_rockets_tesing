// Please implement your solution in this file

export const prepareData = ({year, customerName}) => {
  return function(payload) {

    const filteredList = payload.filter(launch => {
      const belongsToYear = +launch.launch_year === year;
      const belongsToCustomer = launch.rocket.second_stage?.payloads?.find(payload => {
        return payload.customers.find(customer => {
          return customer.includes(customerName);
        })
      });
  
      return belongsToYear && belongsToCustomer;
    });
  
    const modifiedList = filteredList.map(({
      flight_number,
      mission_name,
      rocket
    }) => {
      return {
        flight_number,
        mission_name,
        payloads_count: rocket.second_stage.payloads.length
      }
    });
  
    modifiedList.sort((a, b) => {
      return b.payloads_count - a.payloads_count || b.flight_number - a.flight_number;
    })
  
    return modifiedList;
  }
}

export const renderData = (data) => {
  const container = document.getElementById('out');
  const stringifiedData = JSON.stringify(data, null, 2);
  container.append(stringifiedData)
}
