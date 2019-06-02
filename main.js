// alert('file linked');

function changeText(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'This is awesome';
}

function normal(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'Learning something';
}

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}
    
function clearDate(){
    var time = document.getElementById('time');
    time.innerHTML = '';
}

// TEST FULL STACK DEVELOPER JALA TECH
function map(array, func){
    var result = [];
    for(var i=0; i<array.length; i++){
        result.push(func(array[i]));
    }
    return result;
}

function questionable(func){
    return function(array){
        return map(array,func);
    };
}

function hitung(){
    g = function(x){
        return x*x
    };
    f = questionable([1,2,3]);
    console.log(f(g));
}

function catcher(x){
    try {
        console.log('A')
        call(x)
        console.log('B');
    } catch(e){
        console.log('C');
    } finally {
        console.log('D');
    }
}

function statement(){
    var i = a.x;
    var j = a['x'];
    var k = a[x];
    console.log(i);
    console.log(j);
    console.log(k);
}

function arrayz() {
    // person = {
    //     name: john,
    //     age : 18,
    // }
    person2 = {
        'name' : 'john',
        'age' : 18,
    }
    
    person3 = {
        name : 'john',
        age : 18,
    }
    if(person2 == person3) console.log("sama");
    console.log(person2);
    console.log(person3);
}

// ================================================

// var x = 100;
// function blah1(){
//     x = 5;
//     console.log(x);
// }
// function blah2(){
//     var x = 6;
//     console.log(x);
// }

// blah1();
// blah2();
// console.log(x);

// ================================================

// var arr = [];
// for(var i=0; i<10; i++){
//     var f = function(i){
//         return function(){
//             console.log(i);
//         }        
//     }(i);
//     arr.push(f);
// }
// for(var j=1; j<arr.length; j++){
//     if(arr[j] != arr[j-1]){
//         arr[j]();
//     }
// }

// ================================================

// Person = function(name){
//     this.name = name;
// }
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// console.log(alvin.name, alvin.age);
// Person.prototype.age = 20;
// berto = new Person("Berto");
// console.log(alvin.name, alvin.age);
// console.log(berto.name, berto.age);

// ================================================

// Person = function(name){
//     this.name = name;
// }
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// berto = new Person("Berto");
// berto.age = 20;

// if(alvin.hasOwnProperty('name')){
//     console.log('The first condition was true.');
// }
// if(berto.hasOwnProperty('name')){
//     console.log('The second condition was true.');
// }
// if(alvin.hasOwnProperty('age')){
//     console.log('The third condition was true.');
// }
// if(berto.hasOwnProperty('age')){
//     console.log('The fourth condition was true.');
// }

// ================================================

// var x = $.Deferred();

// $.ajax(url).done(function(user){
//     console.log('The first success!');
//     return $.ajax(url2, {user_id: data.id});
// }).pipe(function(data){
//     console.log('The second success!');
//     return $.ajax(url3, {object_id: data.id});
// }).pipe(function(data){
//     console.log('The third success!');
//     x.resolve(data);
// }).fail(function(error){
//     console.log("Something bad happened!");
// });

// x.then(function(data){
//     console.log("First argument to then was called.");
// }, function(data){
//     console.log("Second argument to then was called.");
// });

// ================================================

console.log(1);

setTimeout(function(){
    console.log(2);
}, 1000);

setTimeout(function(){
    console.log(3);
}, 2000);

setTimeout(function(){
    console.log(4);
}, 0);

console.log(5);
var start = new Date();
while(true){
    var now = new Date();
    if(now - start > 500){
        break;
    }
}
console.log(6);