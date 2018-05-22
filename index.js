// Code your solution here:


function driversWithRevenueOver(a,s) {
  return a.filter(function (driver){
    return driver.revenue > s
  })
}

function driverNamesWithRevenueOver(a,s) {
  let newA =  a.filter(function (driver) {
      return driver.revenue > s
  })

  return newA.map(function (driver){
    return driver.name
  })

}

function exactMatch(a,o) {
  return a.filter(function (driver) {
    return driver[Object.keys(o)[0]] === Object.values(o)[0]
  })
}

function exactMatchToList(a,o) {
  const newA = exactMatch(a,o);

  return newA.map(function (ele) {
    return ele.name
  })

}
