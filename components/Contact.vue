<template>
  <div class="contact-container" id="contact-section">
    <h2 class="contact-title">Contact</h2>
    <div class="contact-options">
      <a href="mailto:ankitpoudyal@virginia.edu" class="contact-option">
        <div class="icon email-icon"></div>
        <div class="text">
          <h3>Email</h3>
          <p>ankitpoudyal@virginia.edu</p>
        </div>
      </a>
      <a href="https://ankitpoudyal.com/resume" target="_blank" class="contact-option">
        <div class="icon resume-icon"></div>
        <div class="text">
          <h3>Resume</h3>
          <p>ankitpoudyal.com/resume</p>
        </div>
      </a>
      <a href="https://linkedin.com/in/ankitpoudyal" target="_blank" class="contact-option">
        <div class="icon linkedin-icon"></div>
        <div class="text">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/ankitpoudyal/</p>
        </div>
      </a>
      <a href="https://github.com/poudyalankit" target="_blank" class="contact-option">
        <div class="icon github-icon"></div>
        <div class="text">
          <h3>GitHub</h3>
          <p>github.com/poudyalankit</p>
        </div>
      </a>
    </div>
  </div>
</template>


<style scoped>
.contact-container {
  background-color: #141E3C;
  color: #FFFFFF;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-title {
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr)); /* Set to 2 columns */
  gap: 50px;
  justify-content: center;
}

.contact-option {
  display: flex;
  align-items: center;
  background-color: #1D2C59;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;
  position: relative; /* Needed to position the pseudo-element absolutely */
  overflow: hidden; /* Ensures the pseudo-element does not extend outside the container */
}

.contact-option::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px; /* Move closer to the right edge */
  transform: translateY(-50%); /* Centers vertically */
  opacity: 0; /* Start with a transparent arrow */
  transition: opacity 0.2s ease-out; /* Transition for the opacity */
  width: 20px; /* Width of the arrow icon */
  height: 20px; /* Height of the arrow icon */
  background-image: url('../assets/icons/link.svg'); /* Path to your arrow icon image */
  background-size: cover; /* Ensures the image covers the pseudo-element area */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}


.contact-option .text {
  justify-content: space-between; /* This will push the text and the icon apart */
  align-items: center;
  padding-right: 40px; /* Add padding to prevent text from overlapping the arrow */
}

.icon {
  /* Placeholder for the icons */
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-right: 15px;
  border-radius: 5px;
}

.email-icon {
  background-image: url("../assets/icons/mail.svg");
}

.resume-icon {
  background-image: url("../assets/icons/file.svg");
}

.linkedin-icon {
  background-image: url("../assets/icons/linkedin.svg");
}

.github-icon {
  background-image: url("../assets/icons/github.svg");
}

@media (hover: hover) {
  .contact-option:hover::after {
    opacity: 1;
  }
}

.text h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
  color: #BBBDC3;
}

.text p {
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: #BBBDC3
}

@media (max-width: 768px) {
  .contact-options {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>
