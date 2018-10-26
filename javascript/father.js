var room = {
    status: 'clean',
    message: 'The Room is clean'
};
let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        if (room.status == 'clean') {
            resolve(room);
        }
        else {
            room.status = 'not-clean',
                room.message = "The room is Not clean"
            reject(room)
        }
    })
}
let removeGarbage = function (room) {
    return new Promise(function (resolve, reject) {
        if (room.status == 'clean') {
            room.removeGarbage = "you can Remove Garbage";
            room.isGbRm = true;
            resolve(room);
        } else {
            room.removeGarbage = 'you cannot Remove Garbage';
            reject(room);
        }
    })
}
let winReward = function (room) {
    return new Promise(function (resolve, reject) {
        if (room.isGbRm) {
            room.winMsg = "You worth rewards";
            resolve(room);
        } else {
            room.winMsg = 'You worth not rewards';
            reject(room);
        }
    })
}

cleanRoom().then(function (result) {
    console.log(result);
    return removeGarbage(result);
}).then(function (room) {
    console.log(room);
    return winReward(room);
}).then(function (room) {
    console.log(room);
}).then(function (room) {
    console.log(room);
}).catch(function (reultFromReject) {
    console.log(reultFromReject);
})