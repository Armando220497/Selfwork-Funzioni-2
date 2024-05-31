function fizzbuzz() {
    let N = (prompt("Inserisci un numero"));

    if (N <= 0) {
        console.log("Devi inserire un numero intero positivo.");
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}


fizzbuzz();
