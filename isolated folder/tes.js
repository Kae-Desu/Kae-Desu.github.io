let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
    [
        'quotes 1',
        'quotes 2',
        'quotes 3',
        'quotes 4',
        'quotes 5',
        'quotes 6',
        'quotes 7',
        'quotes 8',
        'quotes 9',
        'quotes 10',
    ];

btn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuotes;
})