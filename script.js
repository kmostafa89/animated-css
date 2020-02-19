const data = getData();

async function getData() {
    const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo');
    console.log(response)
    const data = await response.json();
    return data

}




const mainHeader = document.getElementById('main-header');
console.log(mainHeader)


mainHeader.addEventListener('mouseover', e => {
    mainHeader.classList.remove('infinite');
    mainHeader.classList.remove('bounce');
    mainHeader.classList.add('zoomOutLeft');

})
// mainHeader.classList.remove('animated');