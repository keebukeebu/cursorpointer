const cursor = document.querySelector ('.cursor');

window.addEventListener('mousemove', (e)=> {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    console.log(e.pageX,e.pageY);
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
})
window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'))
    cursor.style.top = scrollY + fromTop + 'px';
    console.log(scrollY)
})

