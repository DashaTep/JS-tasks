let div = document.querySelector('[data-widget-name]')
//alert(div.getAttribute('data-widget-name'))

let arr = document.querySelectorAll('a');
for( let item of arr){
    let href = item.getAttribute('href')
    if(href && href.includes('://') && (!href.startsWith('http://internal.com'))){
        item.style.color = 'orange'
    }
}

