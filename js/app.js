
const list = document.getElementById('container');
console.log(list);

//provo a stampare in console i numeri da 1 a 100 con un ciclo for, per vedere se funziona
for(let i = 1; i <= 100; i++){
    //ad ogni iterazione mi creo un elemento html 
    let listElement = document.createElement('li');
    listElement.classList.add('list-item');
    //Se il numero è un multiplo di 3, invece del numero stampa 'Fizz'
    //Per dire che un numero è multiplo di 3 devo usare il modulo % di 3 = 0
    if( i % 15 === 0){
        listElement.append('FizzBuzz');
        listElement.classList.add('red');
    }else if( i % 5 === 0){
        listElement.append('Buzz');
        listElement.classList.add('yellow');
    }else if( i % 3 === 0){
        listElement.append('Fizz');
        listElement.classList.add('green');
    }else{
        listElement.append(i); // "appendo" ogni <li> al <ul> dell'HTML
        listElement.classList.add('blue');
    }
    
    console.log(listElement); 
    list.append(listElement);

    // console.log(i);
}