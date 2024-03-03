<template>
  <div ref="introContainer" class="introduction-container">
    <div class="profile-picture-container">
      <img src="~/assets/images/ankit.jpeg" alt="Ankit Poudyal" class="profile-picture"/>
    </div>
    <div>
      <h1 class="name">Ankit Poudyal</h1>
      <h2 class="subheading">CS @ UVA Engineering</h2>
      <div class="icons-container">
        <div class="icon-container">
          <a href="https://github.com/poudyalankit" target="_blank" class="icon-link">
            <div class="icon github">
              <img src="~/assets/icons/github.svg" alt="GitHub Icon"/>
            </div>
            <span class="icon-text">GitHub</span>
          </a>
        </div>
        <div class="icon-container">
          <a href="/resume" target="_blank" class="icon-link">
            <div class="icon resume">
              <img src="~/assets/icons/resume.svg" alt="Resume Icon"/>
            </div>
            <span class="icon-text">Resume</span>
          </a>
        </div>
        <div class="icon-container">
          <NuxtLink to="/projects">
            <div class="icon projects">
              <img src="~/assets/icons/projects.svg" alt="Projects Icon"/>
            </div>
            <span class="icon-text">Projects</span>
          </NuxtLink>
        </div>
        <div class="icon-container">
          <a href="mailto:ankitpoudyal@virginia.edu" class="icon-link">
            <div class="icon email">
              <img src="~/assets/icons/email.svg" alt="Email Icon"/>
            </div>
            <span class="icon-text">Email</span>
          </a>
        </div>
        <div class="icon-container">
          <a href="https://www.linkedin.com/in/ankitpoudyal" target="_blank" class="icon-link">
            <div class="icon linkedin">
              <img src="~/assets/icons/linkedin.svg" alt="LinkedIn Icon"/>
            </div>
            <span class="icon-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.introduction-container {
  text-align: center;
  position: relative;
  transform: translateY(25%);
}

.profile-picture-container {
  width: 50%;
  max-width: 250px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto 20px;
}

.profile-picture {
  width: 100%;
  height: 100%;
  display: block;
}

.name {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 0px;
}

@media (max-width: 600px) {
  .profile-picture-container {
    width: 60%;
    max-width: 180px;
  }
}
</style>
