// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  let newArr = []

  for (const driver of collection) {
    if (revenue < driver.revenue) {
      newArr.push(driver)
    }
  }
  return newArr
}

function driverNamesWithRevenueOver(collection, revenue) {
  let newArr = []

  for (const driver of collection) {
    if (revenue < driver.revenue) {
      newArr.push(driver.name)
    }
  }
  return newArr
}

function exactMatch(collection, matchObj) {
  key = Object.keys(matchObj)[0]
  value = matchObj[key]
  return collection.filter(driver => driver[key] === value)
  }

function exactMatchToList(collection, matchObj) {
  return exactMatch(collection, matchObj).map(driver => driver.name)
}
