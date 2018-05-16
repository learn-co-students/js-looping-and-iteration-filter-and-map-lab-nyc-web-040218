// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}
function driverNamesWithRevenueOver(drivers, revenue) {
  let hashes = driversWithRevenueOver(drivers, revenue)
  return hashes.map(driver => driver.name)
}

function exactMatch(extDrivers, matchee) {
  return extDrivers.filter(function(driver){
    let matches = false

      for (name in matchee){
        matches = driver[name] === matchee[name]
      }
      return matches
  });
}

function exactMatchToList(drivers, matcher){
  let hashes = exactMatch(drivers, matcher)
  return hashes.map(driver => driver.name)
}
