function toggleMenu(){ document.getElementById('menu').classList.toggle('active'); }

function toggleFAQ(el){ let p = el.nextElementSibling; p.style.display = p.style.display === 'block' ? 'none' : 'block'; }

function validateForm(){ let valid = true; let name = document.getElementById('name').value; let email = document.getElementById('email').value;

if(name === ""){ document.getElementById('nameError').innerText = "Name required"; valid = false; } else document.getElementById('nameError').innerText = "";

if(!email.includes('@')){ document.getElementById('emailError').innerText = "Valid email required"; valid = false; } else document.getElementById('emailError').innerText = "";

return valid; }

const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); }); });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));