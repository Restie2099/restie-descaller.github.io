/**
 * Opens the default tab by "clicking" it.
 */
function openDefaultTab() {
  document.getElementById('defaultTab').click();
}

/**
 * Displays and alert message.
 */
function showAlert() {
  alert('Hello and welcome to my resume!');
}

/**
 * Invokes the functions within on page load.
 */
function onPageLoad() {
  showAlert();
  openDefaultTab();

  // Add event listeners to those with the "accordion" class
  let acc = document.getElementsByClassName('accordion');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active-acc');
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}

/**
 * Opens the selected tab.
 * @param {*} event
 * @param {*} tabId
 */
function openTab(event, tabId) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.className += ' active';
}

/**
 * Display contact details on mouse hover.
 * @param {*} elem
 * @param {*} info
 */
function showInfo(elem, info) {
  switch (info) {
    case 'phoneNumber':
      elem.innerHTML = '+416 839 0544';
      break;

    case 'email':
      elem.innerHTML = 'rdescaller@gmail.com';
      break;

    case 'address':
      elem.innerHTML = 'Toronto ON, M5M 1B1';
      break;

    default:
      elem.innerHTML = '**** ****  **** **** ****';
      break;
  }
}

/**
 * Shows or hides the image given the element id.
 * @param {*} elemId
 */
function showOrHideImage(elemId) {
  let elem = document.getElementById(elemId);
  elem.classList.toggle('hide-image');
}

/**
 * Shows or hides the list item image.
 * @param {*} elemId
 * @param {*} image
 */
function showOrHideListImage(elemId, image) {
  let elem = document.getElementById(elemId);
  elem.classList.toggle('hide-image');
  switch (image) {
    // elemId = "software"
    case 'adobeIllustrator':
      elem.src = 'images/resume-tab/software/adobe_illustrator_logo.png';
      break;

    case 'adobePhotoshop':
      elem.src = 'images/resume-tab/software/adobe_photoshop_logo.png';
      break;

    case 'adobePremiere':
      elem.src = 'images/resume-tab/software/adobe_premiere_logo.png';
      break;

    case 'adobeInDesign':
      elem.src = 'images/resume-tab/software/adobe_indesign_logo.png';
      break;

    case 'corelDraw':
      elem.src = 'images/resume-tab/software/coreldraw_logo.png';
      break;

    case 'iMovie':
      elem.src = 'images/resume-tab/software/imovie_logo.jpg';
      break;

    // elemId = "interests"
    case 'comicbooks':
      elem.src = 'images/resume-tab/interests/comicbooks.jpg';
      break;

    case 'illustration':
      elem.src = 'images/resume-tab/interests/illustration.jpg';
      break;

    case 'artsAndCrafts':
      elem.src = 'images/resume-tab/interests/arts_and_crafts.jpeg';
      break;

    case 'toyCollecting':
      elem.src = 'images/resume-tab/interests/toy_collecting.jpg';
      break;

    case 'toyPhotography':
      elem.src = 'images/resume-tab/interests/toy_photography.jpg';
      break;

    case 'music':
      elem.src = 'images/resume-tab/interests/music.png';
      break;

    case 'moviesOrSeries':
      elem.src = 'images/resume-tab/interests/movies_or_series.gif';
      break;

    case 'basketball':
      elem.src = 'images/resume-tab/interests/basketball.gif';
      break;

    case 'badminton':
      elem.src = 'images/resume-tab/interests/badminton.gif';
      break;

    default:
      break;
  }
}

/**
 * Helper function for getting the image number from the regex pattern "../path/to/image/#.jpg"
 * @param {*} inputStr
 * @returns
 */
function getImageNumber(inputStr) {
  let length = inputStr.length;
  return parseInt(inputStr[length - 5]);
}

/**
 * Helper function for getting the total image count and the path where the images are located.
 * @param {*} key
 * @returns
 */
function getTotalImageCountAndPath(key) {
  switch (key) {
    case 'pens-and-ink-images':
      return [6, 'images/pens-and-ink-tab/'];

    case 'digital-colors-images':
      return [7, 'images/digital-colors-tab/'];

    default:
      return [0, ''];
  }
}

/**
 * Sets the displayed image on screen to the next one.
 * @param {*} elemId
 */
function nextImage(elemId) {
  let elem = document.getElementById(elemId);
  let [totalImgCount, imgPath] = getTotalImageCountAndPath(elemId);
  let currentImg = getImageNumber(elem.src);

  if (currentImg + 1 < totalImgCount) {
    // Check if the next image is still within the count
    elem.src = `${imgPath}/${currentImg + 1}.jpg`;
  } else {
    // Else, go to the very first image
    elem.src = `${imgPath}/0.jpg`;
  }
}

/**
 * Sets the displayed image on screen to the previous one.
 * @param {*} elemId
 */
function prevImage(elemId) {
  let elem = document.getElementById(elemId);
  let [totalImgCount, imgPath] = getTotalImageCountAndPath(elemId);
  let currentImg = getImageNumber(elem.src);

  if (currentImg - 1 >= 0) {
    // Check if the prev image is not negative
    elem.src = `${imgPath}/${currentImg - 1}.jpg`;
  } else {
    // Else, go to the very last image
    elem.src = `${imgPath}/${totalImgCount - 1}.jpg`;
  }
}
