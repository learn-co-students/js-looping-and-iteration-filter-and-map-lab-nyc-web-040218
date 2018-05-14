// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue;})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function(driver) {return driver.name;});
}

// function driverNamesWithRevenueOver(drivers, revenue) {
//   let newDrivers = [];
//
//   for(const driver of drivers) {
//     if (driver.revenue > revenue) {
//       newDrivers.push(driver.name);
//     }
//   }
//
//   return newDrivers;
// }

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {return Object.values(driver).includes(Object.values(obj)[0]);})
}

function exactMatchToList(drivers, obj) {
  newDrivers = exactMatch(drivers, obj);
  return newDrivers.map(function(driver) {return driver.name;});
}
