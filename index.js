
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driverObj) => (driverObj.revenue > revenue));
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map((driverObj) => (driverObj.name));
}

function exactMatch(drivers, obj) {
   return drivers.filter(function(driverObj) {
     for(const key1 in obj) {
       for(const key2 in driverObj) {
         if(key1 === key2 && obj[key1] === driverObj[key2]) {
           return driverObj;
         }
       }
     }
   });
 }

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map((driverObj) => (driverObj.name));
}
