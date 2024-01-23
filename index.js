/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

//const allWagesFor = function () {
    //const eligibleDates = this.timeInEvents.map(function (e) {
      //  return e.date
    //})

    //const payable = eligibleDates.reduce(function (memo, d) {
      //  return memo + wagesEarnedOnDate.call(this, d)
    //}.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   // return payable
//}

// createEmployeeRecord function
const createEmployeeRecord = (employeeData) => {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

// createEmployeeRecords function
const createEmployeeRecords = (employeesData) => {
    return employeesData.map(createEmployeeRecord);
};

// createTimeInEvent function
const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

// createTimeOutEvent function
const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

// hoursWorkedOnDate function
const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    return (timeOut.hour - timeIn.hour) / 100;
};

// wagesEarnedOnDate function
const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};

// allWagesFor function (provided)
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

// findEmployeeByFirstName function
const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find(employee => employee.firstName === firstName);
};

// calculatePayroll function
const calculatePayroll = (employeeRecords) => {
    return employeeRecords.reduce((totalPay, employee) => {
        return totalPay + allWagesFor.call(employee);
    }, 0);
};

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
};

