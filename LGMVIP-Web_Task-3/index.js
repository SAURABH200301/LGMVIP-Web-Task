document.getElementById('custom-button').addEventListener('click', function () {
  document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function () {
  var fileInput = document.getElementById('file-input');
  var customButton = document.getElementById('custom-button');
  if (fileInput.files.length > 0) {
    customButton.innerText = 'Chosen';

    setTimeout(() => {
      customButton.innerHTML = 'Change Image'
    }, 3000);

  } else {
    customButton.innerText = 'Choose Image';
  }
});

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('#place-holder').style.display = 'none';
  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let website = document.querySelector('input[name="website"]').value;
  let genderInput = document.querySelector('input[name="g"]:checked');
  let gender = genderInput.value;
  let skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(skill => skill.labels[0].textContent)
    .join(', ');
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  let imgElement = document.createElement('img');
  let h1Element = document.createElement('h1');
  let iElement = document.createElement('i');
  let emailElement = document.createElement('p');
  let websiteElement = document.createElement('p');
  let skillsElement = document.createElement('p');
  imgElement.src = URL.createObjectURL(document.getElementById('file-input').files[0]);
  h1Element.textContent = name;

  let gIcon;
  if (gender == 'Male') {
    gIcon = ' \u2642';
    iElement.style.color = 'blue';
    iElement.style.fontWeight = 'bolder';
  } else {
    gIcon = ' \u2640'; 
    iElement.style.color = 'pink';
    iElement.style.fontWeight = 'bolder';
  }
  iElement.textContent = gIcon;

  emailElement.textContent = email;
  websiteElement.textContent = website;
  skillsElement.textContent = skills;
  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(h1Element);
  cardDiv.appendChild(iElement);
  cardDiv.appendChild(emailElement);
  cardDiv.appendChild(websiteElement);
  cardDiv.appendChild(skillsElement);
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(cardDiv);
  document.getElementById('myForm').reset();

  var customButton = document.getElementById('custom-button');
  customButton.innerText = 'Choose Image';

}

let form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.style.display = 'block';