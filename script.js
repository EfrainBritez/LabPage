// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Contact form handling
  const contactForm = document.getElementById("contactForm")
  const formMessage = document.getElementById("formMessage")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!data.firstName || !data.lastName || !data.email || !data.message) {
        showMessage("Por favor completa todos los campos requeridos.", "error")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        showMessage("Por favor ingresa un correo electrónico válido.", "error")
        return
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.textContent = "Enviando..."
      submitButton.disabled = true

      // Simulate API call delay
      setTimeout(() => {
        showMessage("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.", "success")
        contactForm.reset()

        submitButton.textContent = originalText
        submitButton.disabled = false
      }, 1500)
    })
  }

  function showMessage(message, type) {
    if (formMessage) {
      formMessage.textContent = message
      formMessage.className = `form-message ${type}`
      formMessage.style.display = "block"

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none"
      }, 5000)
    }
  }

  // Add loading animation for buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add subtle click effect
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 100)
    })
  })

  // Add fade-in animation for sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for animation
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})

// Add header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
    header.style.backgroundColor = "rgba(255,255,255,0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.boxShadow = "none"
    header.style.backgroundColor = "#fff"
    header.style.backdropFilter = "none"
  }
})
