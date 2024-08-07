<template>
  <div class="introduction-container">
    <div>
      <h1 class="name">Personal Projects</h1>
      <h2 class="subheading">{{ currentDate }}</h2>
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
          <a href="https://ankitpoudyal.com/resume" target="_blank" class="icon-link">
            <div class="icon resume">
              <img src="~/assets/icons/resume.svg" alt="Resume Icon"/>
            </div>
            <span class="icon-text">Resume</span>
          </a>
        </div>
        <div class="icon-container">
          <NuxtLink to="/">
            <div class="icon home">
              <img src="~/assets/icons/home.svg" alt="Home Icon"/>
            </div>
            <span class="icon-text">Home</span>
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
      <div class="projects-container">
        <div class="project-box" v-for="project in projects" :key="project.id">
          <div class="content-container">
            <div class="text-container">
              <div class="project-subheading">{{ project.subheading }}</div>
              <div class="project-heading">{{ project.heading }}</div>
              <div class="project-description">{{ project.description }}
                <div class="tags-container">
                  <div class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</div>
                </div>
              </div>
              <a :href="project.url" target="_blank">
              <div class="learn-more">Learn More ></div>
              </a>
            </div>
            <img :src="require(`~/assets/images/${project.image}`)" alt="Project Image" class="project-image">
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<style scoped>
.introduction-container {
  text-align: center;
  position: relative;
  transform: translateY(5%);
}

.name {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 0;
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
}

.project-box {
  background: #F7F7F8;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 30px;
  width: 90%;
  max-width: 620px;
  min-height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-box:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 25%;
  height: auto;
  object-fit: cover;
  margin-top: 25px;
  margin-right: 20px;
  border-radius: 50%;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  max-width: 60%;
}

.project-subheading {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  color: #89898A;
}

.project-heading {
  margin-top: 8px;
  margin-bottom: 11px;
}

.project-description {
  margin-bottom: 100px;
}

.project-subheading, .project-heading, .project-description, .learn-more {
  text-align: left;
  width: 100%;
}

.project-heading {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
}

.project-description {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #828283;
}

.learn-more {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #2897FF;
  align-self: start;
  margin-top: auto;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 45px;
  margin-bottom: -45px;
}

.tag {
  width: 73px;
  height: 25px;
  background: #0276FF;
  border-radius: 15px;
  padding: 2px;
  font-size: 12px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .project-box {
    transition: none !important;
  }

  .project-box:hover {
    box-shadow: none !important;
    transform: none !important;
  }
}

@media (max-width: 600px) {
  .project-subheading {
    font-size: 12px;
    line-height: 14px;
  }

  .tags-container {
    display: none;
  }

  .project-heading {
    font-size: 20px;
    line-height: 24px;
  }

  .project-description, .learn-more {
    font-size: 12px;
    line-height: 14px;
  }

  .project-image {
    width: 30%;
    height: auto;
    object-fit: cover;
    margin-top: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .project-box {
    padding: 20px;
  }
}
</style>
<script setup>
import { ref, computed } from 'vue';
import projectsData from '../assets/projects.json';
const projects = ref(projectsData);

const currentDate = computed(() => {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options).replace(/\b(\d{1,2})(st|nd|rd|th)\b/, '$1$2,');
});
</script>
