
const list = document.getElementById('container');
console.log(list);

//provo a stampare in console i numeri da 1 a 100 con un ciclo for, per vedere se funziona
for(let i = 1; i <= 100; i++){
    //ad ogni iterazione mi creo un elemento html con la specifica classe
    let listElement = document.createElement('li');
    console.log(listElement);
    list.append( listElement );
    //Se il numero è un multiplo di 3, invece del numero stampa 'Fizz'
    //Per dire che un numero è multiplo di 3 devo usare il modulo % di 3 = 0
    // if( i % 3 === 0){
    //     console.log('Fizz');
    // }else if( i % 5 === 0){
    //     console.log('Buzz');
    // }else if( i % 15 === 0){
    //     console.log('FizzBuzz');
    // }

    // console.log(i);
}