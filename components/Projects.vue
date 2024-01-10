<template>
  <div class="projects-container" id="projects-section">
    <h2 class="projects-title">Projects</h2>
    <div class="projects">
      <a href="https://github.com/poudyalankit/UniTalk" target="_blank">
      <div class="project-card" style="background: #F67D7D">
        <h3 class="project-title">UniTalk</h3>
        <p class="project-description">Auto-translating chat platform supporting 30+ languages</p>
        <div class="project-image unitalk-image"></div>
      </div>
      </a>
      <a href="https://github.com/poudyalankit/Venetia" target="_blank">
      <div class="project-card" style="background: #9DA9EA">
        <h3 class="project-title">Venetia</h3>
        <p class="project-description">E-commerce automation software supporting 300+ online stores</p>
        <div class="project-image venetia-image"></div>
      </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  background-color: #1D2C59;
  color: #FFFFFF;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-title {
  margin-bottom: 100px;
  font-size: 36px;
  font-weight: 600;
  color: #FFFFFF;
}

.projects {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.project-card {
  border-radius: 20px;
  width: 550px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-50px);
}

.project-title {
  font-size: 24px;
  color: #FFFFFF;
  font-weight: 600;
}

.project-description {
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
}

.project-image {
  background-size: cover;
  height: 350px;
}

.venetia-image {
  background-image: url("../assets/images/venetia.png");
}

.unitalk-image{
  background-image: url("../assets/images/unitalk.png");
}

@media (max-width: 1280px) {
  .projects-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .projects {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .projects-title {
    margin-bottom: 30px;
  }

  .project-card {
    width: 500px;
    max-width: 100%;
    transform: translateY(0);
    margin: 0 auto 20px;
  }
  .project-image {
    height: 325px;
  }
}

@media (max-width: 600px) {
  .projects-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .projects {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .projects-title {
    margin-bottom: 30px;
  }

  .project-card {
    width: 400px;
    max-width: 100%;
    transform: translateY(0);
    margin: 0 auto 20px;
  }
  .project-image {
    height: 250px;
  }
}

@media (max-width: 510px) {
  .projects-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .projects {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .projects-title {
    margin-bottom: 30px;
  }

  .project-card {
    width: 90%;
    max-width: 100%;
    margin: 0 auto 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-title,
  .project-description {
    margin: 10px 0;
  }

  .project-image {
    flex-grow: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}


</style>
<script setup>
</script>
