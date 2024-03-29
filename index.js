let observer_boxes = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let boxes = entry.target.querySelectorAll('.middle-boxes');

    for (let box of boxes) {
      if (entry.isIntersecting) {
        box.classList.add('middle-boxes-animation');
      } else {
        box.classList.remove('middle-boxes-animation');
      }
    }
  });
});

observer_boxes.observe(document.querySelector('.middle'));

let observer_text = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let middleTitle = entry.target.querySelector('.middle-title');

    if (entry.isIntersecting) {
      middleTitle.classList.add('middle-title-animation');
    } else {
      middleTitle.classList.remove('middle-title-animation');
    }
  });
});

observer_text.observe(document.querySelector('.middle'));


// const handleOnMouseMove = e => {
//   const {
//     currentTarget: target
//   } = e;

//   const rect = target.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;

//   target.style.setProperty('--mouse-x', `${x}px`);
//   target.style.setProperty('--mouse-y', `${y}px`);
// }

// for (const box of document.querySelectorAll('.middle-boxes')) {
//   box.onmousemove = e => handleOnMouseMove(e)
// }