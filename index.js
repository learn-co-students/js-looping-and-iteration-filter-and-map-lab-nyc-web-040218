// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) { 
    return driver.name;
  });
}

function exactMatch(drivers, addToDrivers) {
  return drivers.filter(function (driver) {
    for (const key in addToDrivers) {
      return driver[key] === addToDrivers[key];
    };
  });
}

function exactMatchToList(drivers, addToDrivers) {
  return exactMatch(drivers, addToDrivers).map(function (driver) {
    return driver.name;
  });
}
