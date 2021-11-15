let p = document.getElementsByClassName("paragraphe");

for ( let i = 0 ; i < p.length ; i++) {

    if ((i + 1) % 2 === 0) {
        continue;
    }

    else if (i === p.length) {
        break;
    }

    else {
        p[i].innerHTML = i + 1;
    }

    console.log(i);

}