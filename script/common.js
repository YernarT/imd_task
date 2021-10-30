window.onload = function () {
	// cursor
	const cursorDOM = document.querySelector('.cursor');

	document.addEventListener('mousemove', function (e) {
		let { pageX: x, pageY: y } = e;

		cursorDOM.style.left = `${x - 25}px`;
		cursorDOM.style.top = `${y - 25 - window.scrollY}px`;
	});

	// shrink-box
	const shrinkBoxs = document.querySelectorAll('.shrink-box');
	const screenHeight = window.innerHeight;

	document.addEventListener('scroll', function () {
		shrinkBoxs.forEach(shrinkBox => {
			let dom2Top = shrinkBox.getBoundingClientRect().top;
			let dom2Bottom = shrinkBox.getBoundingClientRect().bottom;

			if (screenHeight / 2 >= dom2Top && screenHeight / 2 <= dom2Bottom) {
				shrinkBox.classList.add('shrink-box--active');
			} else {
				shrinkBox.classList.remove('shrink-box--active');
			}
		});
	});

	// bgColor && navbar style
	document.addEventListener('scroll', function () {
		if (screenHeight - 250 <= window.scrollY) {
			document.querySelector('.background-wall').style.opacity = 0;

			document.querySelector('.welcome .navbar .logo').style.color = '#000';
			document
				.querySelectorAll('.welcome .navbar .links .link a')
				.forEach(el => {
					el.style.color = '#000';
				});
		} else {
			document.querySelector('.background-wall').style.opacity = 1;

			document.querySelector('.welcome .navbar .logo').style.color = '#fff';
			document
				.querySelectorAll('.welcome .navbar .links .link a')
				.forEach(el => {
					el.style.color = '#fff';
				});
		}
	});
};
