document.getElementById('year').textContent = new Date().getFullYear();

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('isVisible');
            io.unobserve(e.target);
        }
    });
},{threshold:.15});
revealEls.forEach(el=>io.observe(el));

// FAQ accordion
document.querySelectorAll('.faqItem').forEach(item=>{
    item.querySelector('.faqQ').addEventListener('click', ()=>{
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faqItem').forEach(i=>i.classList.remove('open'));
        if(!isOpen){ item.classList.add('open'); }
    });
});
