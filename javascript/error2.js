try {
    var employee = {
        name: "Ram",
        id: 12345,
        salary: 200000,
        dept: "Dev"
    }
    try{
        if (employee.address == undefined) {
            var error = {
                name: 'Not Found',
                message: 'Address is not Found',
                stack: 'Not Found : Address is not Found'
            }
            throw error;
        } else {
            console.log(employee.address);
        }
    }catch(error){
        console.log(error.name);
        
    }

    function employeeData() {
        try {
            var empString = JSON.stringify(employee);
            alert(empString);
        } catch (err) {
            console.log("Outer Error Handler :", err);
        }

    }
    employeeData();
} catch (err) {
    console.log("Outer Error Handler :", err);
}