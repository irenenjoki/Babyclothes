/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if(toggle && nav)
	{
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	// Remove menu mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
// JavaScript code to get the current date and year
var currentDate = new Date();
var year = currentDate.getFullYear();


// Function to update the date and year
function updateDate() {
  document.getElementById('current-year').textContent = "© IRINNAH. All right Reserved " + year;
}

// Update the date and year initially
updateDate();

// Update the date and year every second
setInterval(updateDate, 1000);