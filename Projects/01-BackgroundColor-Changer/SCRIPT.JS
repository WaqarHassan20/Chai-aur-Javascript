const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.id === 'grey') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
