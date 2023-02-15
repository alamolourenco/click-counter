var count = 0;
var contar = document.getElementById('contar');
var zerar = document.getElementById('zerar')
var res = document.getElementById('res');

contar.onclick = function () {
    count++; // ++ é o mesmo que -> count = count + 1
    res.innerHTML = `<p> O contador está com <mark>${count}</mark> cliques </p>`;

    if (count === 1) {
        res.innerHTML = `<p> O contador está com <mark>${count}</mark> clique </p>`;
    }
}

zerar.onclick = function () {
    count = 0;
    res.innerHTML = `<p> O contador está com <mark>${count}</mark> cliques </p>`;
}