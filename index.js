window.addEventListener('load', (event) => {
    let alpha = document.getElementById('enter');
    let bravo = document.getElementById('textarea')
    let charlie = document.getElementById('Username')
    let delta = document.getElementById('color-picker')
    console.log(alpha, bravo,'the page has loaded')
    alpha.addEventListener('click', () => {
        console.log(`${charlie.value}(${delta.value}) says ${bravo.value}`)
    })
})