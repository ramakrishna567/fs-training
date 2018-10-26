let lowestFloor = 0;
let currentFloor;
let wantFloor;
let highestFloor = 6;


wantFloor = +prompt("Which Floor you want to go: \n Door is opened");

// Initiallt lifts starts ground floor and moves up
if (wantFloor <= highestFloor && wantFloor > lowestFloor && wantFloor != '') {
    alert("door is closed");
    for (currentFloor = 0; currentFloor <= wantFloor; ++currentFloor) {

        if (currentFloor < wantFloor) {

            alert(`moving up floor is: ${currentFloor}`);
        }
        else if (currentFloor == wantFloor) {
            console.log("Your floor reached", wantFloor);
            console.log("door is opened");
        }

    }
    currentFloor = wantFloor;

    let wantLift = prompt("Do wanwantLift move with lift again");
    if (wantLift != '' && wantLift == 'yes' || wantLift == 'YES' || wantLift == 'Yes') {
        console.log("current floor is", currentFloor);
        wantFloor = +prompt("Which Floor you want to go:");
        if (currentFloor == wantFloor) {
            console.log(`Your at Current Floor ${wantFloor}`);
        }
        // lifr mooving upwords
        else if (wantFloor > currentFloor && wantFloor > lowestFloor && wantFloor != '') {
            alert("door is closed");
            for (currentFloor; currentFloor <= wantFloor; ++currentFloor) {

                if (currentFloor < wantFloor) {
                    alert(`moving up floor ${currentFloor}`);
                }
                else if (currentFloor == wantFloor) {
                    console.log("Your floor reached", currentFloor);
                    console.log("door is opened");
                }
            }
        }

        // lift moving down
        if (wantFloor < currentFloor && wantFloor >= lowestFloor) {
            alert("door is closed");
            for (currentFloor = currentFloor; currentFloor >= wantFloor; currentFloor--) {

                if (currentFloor > wantFloor) {
                    alert(`moving down floor ${currentFloor}`);
                }
                else if (currentFloor == wantFloor) {
                    console.log("Your floor reached", wantFloor);
                    console.log("door is opened");
                }
            }
        }

    }
    else if (currentFloor == wantFloor) {
        alert(`Your at current floor is ${wantFloor}\n`);
    }
    else {
        alert("Thanks for visi=t \n Visit Again!!");
    }
}

else if (wantFloor == lowestFloor) {
    alert(`your at current floor is ${wantFloor} \n Visit Again`);
}
else if (wantFloor > highestFloor || wantFloor != '') {
    console.log("there are only 6floors in this building \n also no underground floors");
}
