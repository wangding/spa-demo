const q = document.querySelector,
      $ = q.bind(document);

let $range = $('#range'),
    $age   = $('#age');

$range.onchange = () => $age.innerText = $range.value;
