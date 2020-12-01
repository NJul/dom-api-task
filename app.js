const advices = [
  {
    id: 1,
    title: `Designate a study area`,
    content: `The best study spot is one that is quiet, well-lit, and in a low-traffic area. Make sure there is a clear workspace to study and write on. Everyone’s needs are different, so it is important you find a spot that works for you.`,
  },
  {
    id: 2,
    title: `Talk to teachers`,
    content: `Teachers are there to help you do your best. Talk to your teacher and ask for clarification or extra help if you need it before your test. Taking the initiative to ask for help goes a long way with teachers!`,
  },
  {
    id: 3,
    title: `Study with a group`,
    content: `Working with classmates encourages an interactive environment to keep you engaged. This gives you a chance to test your knowledge with others, quiz each other on the content, and help boost each other’s confidence.`,
  },
  {
    id: 4,
    title: `Ask questions if you don't understands`,
    content: `Raise your hand and ask questions if you don’t understand something. If you don’t feel comfortable asking in front of everyone, write yourself a reminder to talk to the teacher after class.`,
    source: `https://www.oxfordlearning.com/how-to-study-effectively/`,
  },
];

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');

  function createMenuItems(advices) {
    const menuItems = advices.map(
      ({ title }) =>
        `<li class="nav-item"><a href="#" class="nav-link">${title}</a></li>`
    );
    return menuItems.join('');
  }

  navList.innerHTML = createMenuItems(advices);
});
