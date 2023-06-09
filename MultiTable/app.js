function one(){
    var multi = document.getElementsByTagName('p');

    for(i=1;i<=10;i++){
        // document.write(1 + " " + "*" + " " + i + " " + "=" + " " + 1*i + "<br>" + "<br>");
        multi[i].textContent = 1 + "*" + i + "=" +  1*i  ; 
    }
}
function two(){
    var multi = document.getElementsByTagName('p');

    for(i=1;i<=10;i++){  
        multi[i].textContent = 2 + "*" + i + "=" +  2*i  ; 
    }
}
function three(){
    var multi = document.getElementsByTagName('p');

    for(i=1;i<=10;i++){
        multi[i].textContent = 3 + "*" + i + "=" +  3*i  ; 
    }
}
function four(){
    var multi = document.getElementsByTagName('p');

    for(i=1;i<=10;i++){
        multi[i].textContent = 4 + "*" + i + "=" +  4*i  ; 
    }
}
function five(){
    var multi = document.getElementsByTagName('p');

    for(i=1;i<=10;i++){
        multi[i].textContent = 5 + "*" + i + "=" +  5*i  ; 
    }
}

