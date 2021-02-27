let cities = document.getElementById("input");
let getValue = document.getElementById("getValue");
let result = document.getElementById("result");

function paths(count) {

    if (count === 1)
    {
        return count;
    }

    return count * paths(count-1)
}

function handleResult() {
    result.innerHTML = paths(cities.value);
}

getValue.addEventListener("click", handleResult);
