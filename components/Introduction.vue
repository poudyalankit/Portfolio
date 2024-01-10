<template>
  <div class="introduction-container">
    <div class="text-content">
      <p class="greeting">Hi, I'm</p>
      <h1 class="name">Ankit Poudyal</h1>
      <p class="description">
        I’m a software engineer and a third-year student at the University of Virginia pursuing a Bachelor of Science in Computer Science.
      </p>
      <div class="button-container">
        <button class="projects-button" @click="scrollToSection('projects-section')">Projects</button>
        <button class="contact-button" @click="scrollToSection('contact-section')">Contact Me</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>

.introduction-container {
  background-color: #141E3C;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px;
  transform: translateY(-8%);
}


.text-content {
  max-width: 500px;
  width: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}

.greeting, .name, .description {
  margin: 0;
}

.greeting {
  font-size: 32px;
  font-weight: 600;
}

.name {
  color: #9DA9EA;
  font-size: 68px;
  font-weight: 700;
  line-height: 1.2;
  margin: 10px 0;
}

.description {
  color: #BBBDC3;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.button-container {
  display: flex;
  gap: 15px;
}

.projects-button {
  width: 200px;
  height: 42px;
  background: #1D2C59;
  border-radius: 15px;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s; /* Smooth transition for background color */
  border: none;
}

.contact-button {
  position: relative; /* Needed for absolute positioning of the pseudo-element */
  width: 200px;
  height: 42px;
  background: transparent;
  border-radius: 15px;
  color: #FFFFFF; /* Text color is always white, no transition */
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid rgba(187, 189, 195, 0.172549);
  margin-left: auto;
  overflow: hidden; /* Ensures the pseudo-element is clipped to the button's border radius */
  /* Removed the color transition */
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0; /* Start with 0 width */
  height: 100%;
  background-color: #2b4181; /* The fill color */
  transition: width 0.3s ease-out; /* Transition for the width */
  border-radius: 6px; /* Match the border radius of the button */
  z-index: -1; /* Ensure the text is above the pseudo-element */
}

@media (hover: hover) {
  .contact-button:hover::before {
    width: 100%;
  }

  .projects-button:hover {
    background-color: #2b4181;
  }
}


@media (max-width: 768px) {

  .greeting {
    font-size: 24px;
  }

  .name {
    font-size: 40px;
    white-space: nowrap;
    overflow: hidden;
  }

  .description {
    font-size: 16px;
    line-height: 1.4;
  }

}



</style>
