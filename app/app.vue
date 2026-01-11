<template>
  <div class="portfolio">
    <!-- Personal Information & Bio Section -->
    <div class="card personal-section">
      <div class="personal-info">
        <div class="profile-section">
          <div class="profile-image">
            <img src="/images/ankit.jpeg" alt="Profile Photo" loading="lazy" />
          </div>
          <h1 class="name">ankit poudyal</h1>
          <div class="bio-section">
            <p>creating work people enjoy</p>
          </div>
          <div class="social-links">
            <a href="mailto:ankitpoudyal@utexas.edu" class="social-icon" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ankitpoudyal/" target="_blank" rel="noopener" class="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/poudyalankit" target="_blank" rel="noopener" class="social-icon" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="card">
      <h2>experience</h2>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/doordash_logo.jpg" alt="DoorDash" class="company-logo-img" loading="lazy" />
        </div>
        <div class="experience-content">
          <h3>software engineer</h3>
          <p class="company">doordash • jan 2026 - present</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/doordash_logo.jpg" alt="DoorDash" class="company-logo-img" loading="lazy" />
        </div>
        <div class="experience-content">
          <h3>software engineer intern</h3>
          <p class="company">doordash • may 2025 - aug 2025</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/alarm_logo.jpeg" alt="Alarm.com" class="company-logo-img" loading="lazy" />
        </div>
        <div class="experience-content">
          <h3>software engineer intern</h3>
          <p class="company">alarm.com • jun 2024 - aug 2024</p>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="card">
      <h2>education</h2>
      <div class="education-item">
        <div class="education-logo">
          <img src="/images/ut_logo.jpeg" alt="The University of Texas at Austin" class="education-logo-img" loading="lazy" />
        </div>
        <div class="education-content">
          <h3>master of science, computer science</h3>
          <p class="institution">the university of texas at austin • jan 2026 - dec 2026</p>
        </div>
      </div>
      <div class="education-item">
        <div class="education-logo">
          <img src="/images/uva_logo.jpeg" alt="University of Virginia" class="education-logo-img" loading="lazy" />
        </div>
        <div class="education-content">
          <h3>bachelor of science, computer science</h3>
          <p class="institution">university of virginia • aug 2022 - may 2025</p>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="card">
      <h2>projects</h2>
      <div class="projects-grid">
        <div class="project-item">
          <h3>venetia</h3>
          <p>automated shopping application for 300+ online stores</p>
          <div class="project-links">
            <a href="https://github.com/poudyalankit/Venetia" class="project-link">learn more</a>
          </div>
        </div>
        <div class="project-item">
          <h3>unitalk</h3>
          <p>cross-language chat platform for 30+ languages</p>
          <div class="project-links">
            <a href="https://github.com/poudyalankit/UniTalk" class="project-link">learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
  background: white;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-feature-settings: 'kern' 1, 'liga' 1;
}

.card {
  background: white;
  padding: 1.25rem;
  max-width: 500px;
  margin: 0 auto 0.5rem;
}

.personal-section {
  margin-bottom: 0.75rem;
}

.personal-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f0f0f0;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #333;
  letter-spacing: -0.025em;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.social-icon {
  width: 20px;
  height: 20px;
  color: #666;
  transition: color 0.2s ease;
}

.social-icon:hover {
  color: #007bff;
}

.bio-section {
  text-align: center;
  margin-bottom: 1rem;
}

.bio-section p {
  color: #555;
  line-height: 1.5;
  margin: 0;
  font-size: 0.90rem;
  font-weight: 400;
}

h2 {
  color: #333;
  margin: 0 0 1.25rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.education-item, .experience-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
}

.education-item:last-child, .experience-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.education-logo, .company-logo {
  width: 45px;
  height: 45px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.education-logo-img, .company-logo-img {
  max-width: 100%;
  height: auto;
  display: block;
  max-height: 45px;
  width: auto;
  border-radius: 8px;
}

.education-content h3, .experience-content h3 {
  margin: 0 0 0.4rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.institution, .company {
  color: #666;
  font-weight: 500;
  margin: 0 0 0.4rem 0;
  font-size: 0.9rem;
}

.education-content p:last-child, .experience-content p:last-child {
  color: #666;
  line-height: 1.4;
  margin: 0;
  font-size: 0.9rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

.project-item {
  padding: 1.25rem;
  border-bottom: 1px solid #e0e0e0;
  background: white;
}

.project-item:last-child {
  border-bottom: none;
}

.project-item h3 {
  margin: 0 0 0.75rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.project-item p {
  color: #666;
  line-height: 1.4;
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
}

.project-link:hover {
  text-decoration: underline;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
  .portfolio {
    padding: 1.5rem;
  }

  .card {
    padding: 1.25rem;
  }

  .personal-info {
    gap: 1.5rem;
  }

  .profile-image {
    width: 160px;
    height: 160px;
  }

  .name {
    font-size: 1.5rem;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  .card {
    max-width: 600px;
  }
}
</style>
<script setup lang="ts">
</script>
