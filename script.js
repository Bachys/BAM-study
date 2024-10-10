// TABS

const tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

function hideTabs () {
  tabsItems.forEach(item => item.classList.add('hide'));
  tabsBtns.forEach(btn => btn.classList.remove('active'));
}

function showTabs (index) {
  tabsItems[index].classList.remove('hide');
  tabsBtns[index].classList.add('active');
}

hideTabs()
showTabs(0)

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
  hideTabs();
  showTabs(index);
}));


// ANCHORS

const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach(anc => {
  anc.addEventListener('click', function(event) {
    event.preventDefault();

    const id = anc.getAttribute('href')
    const element = document.querySelector(id);

    window.scroll({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });

  });
});

