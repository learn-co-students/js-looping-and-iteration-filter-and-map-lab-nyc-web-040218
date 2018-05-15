// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue; });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue; }).map(function (driver) {return driver.name});
}
function exactMatch(drivers, match) {
  return drivers.filter(function (driver)
  {return driver.name === match.name || driver.revenue === match.revenue});
}
function exactMatchToList(drivers, match) {
  return exactMatch(drivers,match).map(function(driver) {return driver.name})
}
