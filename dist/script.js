const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const expanded = menu.getAttribute('aria-expanded') === 'true';
 menu.setAttribute('aria-expanded', String(!expanded));
 navigation.classList.toggle('open', !expanded);
 menu.textContent = expanded ? 'Menu' : 'Close';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
 navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu';
}));
document.addEventListener('keydown', e => {if(e.key==='Escape' && navigation.classList.contains('open')){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus();}});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);} }), {threshold:0.08});
 document.querySelectorAll('.section-heading,.about-copy,.work-card,.packages article').forEach(el=>observer.observe(el));
}
