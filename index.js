function driversWithRevenueOver(drivers, revenue){
    const newArray = [];
    for (const driver of drivers){
        if (driver.revenue >= revenue){
            newArray.push(driver);
        }
    }
    return newArray;
}

function driverNamesWithRevenueOver(drivers, revenue){
    const newArray = [];
    for (const driver of drivers){
        if (driver.revenue >= revenue){
            newArray.push(driver.name);
        }
    }
    return newArray;
}

function exactMatch(driver, obj){
    const newArray = [];
    for (const dri of driver){
        for (const key in obj){
            if (dri[key] == obj[key]){
                newArray.push(dri);
            }
        }
    }
    return newArray;
}

function exactMatchToList(driver, obj){
    const newArray = [];
    for (const dri of driver){
        for (const key in obj){
            if (dri[key] == obj[key]){
                newArray.push(dri.name);
            }
        }
    }
    return newArray;
}