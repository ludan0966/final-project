const as = document.querySelectorAll('.tab-nav a')

// Function to switch pages
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener('mouseenter', function () {
    document.querySelector('.tab-nav .active').classList.remove('active')
    this.classList.add('active')
    document.querySelector('.tab-content .active').classList.remove('active')
    document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active')
  })
}

//TO take note on HTML page
const tx = document.querySelector('#tx')
const total = document.querySelector('.total')
const note = document.querySelector('.note')
const button = document.querySelector('button')
const info = document.querySelector('.info')
tx.addEventListener('focus', function () {
  total.style.opacity = 1
})
tx.addEventListener('blur', function () {
  total.style.opacity = 0
})
tx.addEventListener('input', function () {
  total.innerHTML = `${tx.value.length}/200 words`
})

//Function for adding new notes
function addNewText() {
  if (tx.value.trim() !== '') {
    note.style.display = 'block';
    const newText = document.createElement('p');
    newText.textContent = tx.value;
    info.insertBefore(newText, info.children[2]);
  }
  tx.value = '';
  total.innerHTML = '0/200 words';
}

// Press Enter to call the function
tx.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    addNewText();
  }
});

// Click the Post button to call the function
button.addEventListener('click', function () {
  addNewText();
});

//TO take note on CSS page
const tx2 = document.querySelector('#tx2')
const total2 = document.querySelector('.total2')
const note2 = document.querySelector('.note2')
const button2 = document.querySelector('.button2')
const info2 = document.querySelector('.info2')
tx2.addEventListener('focus', function () {
  total2.style.opacity = 1
})
tx2.addEventListener('blur', function () {
  total2.style.opacity = 0
})
tx2.addEventListener('input', function () {
  total2.innerHTML = `${tx2.value.length}/200 words`
})

//Function for adding new notes
function addNewText2() {
  if (tx2.value.trim() !== '') {
    note2.style.display = 'block';
    const newText2 = document.createElement('p');
    newText2.textContent = tx2.value;
    info2.insertBefore(newText2, info2.children[2]);
  }
  tx2.value = '';
  total2.innerHTML = '0/200 words';
}

// Press Enter to call the function
tx2.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    addNewText2();
  }
});

// Click the Post button to call the function
button2.addEventListener('click', function () {
  addNewText2();
});

//TO take note on Javascript page
const tx3 = document.querySelector('#tx3')
const total3 = document.querySelector('.total3')
const note3 = document.querySelector('.note3')
const button3 = document.querySelector('.button3')
const info3 = document.querySelector('.info3')
tx3.addEventListener('focus', function () {
  total3.style.opacity = 1
})
tx3.addEventListener('blur', function () {
  total3.style.opacity = 0
})
tx3.addEventListener('input', function () {
  total3.innerHTML = `${tx3.value.length}/200 words`
})

//Function for adding new notes
function addNewText3() {
  if (tx3.value.trim() !== '') {
    note3.style.display = 'block';
    const newText3 = document.createElement('p');
    newText3.textContent = tx3.value;
    info3.insertBefore(newText3, info3.children[2]);
  }
  tx3.value = '';
  total3.innerHTML = '0/200 words';
}

// Press Enter to call the function
tx3.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    addNewText3();
  }
});

// Click the Post button to call the function
button3.addEventListener('click', function () {
  addNewText3();
});
