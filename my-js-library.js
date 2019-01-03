function randomize_list(passArray){
    var arrayIndex = passArray.length;
    var tempStorage = 0;
    var randomIndex = 0; 
    while (0 !== arrayIndex) {
        randomIndex = Math.floor(Math.random() * arrayIndex);
        arrayIndex -= 1; 
        tempStorage = passArray[arrayIndex];
        passArray[arrayIndex] = passArray[randomIndex];
        passArray[randomIndex] = tempStorage;
    }; 
    return passArray;
}; 