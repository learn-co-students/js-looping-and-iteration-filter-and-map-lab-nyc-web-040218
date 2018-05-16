// Code your solution here:

function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter(el => el.revenue > revenue)
}

function driverNamesWithRevenueOver(driverArray, revenue) {
  newArr = []
  return driversWithRevenueOver(driverArray, revenue).map(driver => driver.name)
}

function exactMatch(driverArray, matchObj) {
  key = Object.keys(matchObj)[0]
  value = matchObj[key]
  return driverArray.filter(driver => driver[key] === value)
}

function exactMatchToList(driverArray, matchObj) {
  return exactMatch(driverArray, matchObj).map(driver => driver.name)
}
