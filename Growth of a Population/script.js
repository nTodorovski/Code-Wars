function nb_year(p0, percent, aug, p) {
    let counter = 1;
    let sum = p0+(p0*(percent/100)+aug);
    while(p>sum){
        counter++
        sum = sum+(sum*(percent/100)+aug);
    }
    return counter;
}