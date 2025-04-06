<template>
    <footer class="footer">
      <p>&copy; 2025 MonSite. Tous droits réservés.</p>
    </footer>
  </template>
  
  <style scoped>
  *, *::before, *::after { box-sizing: border-box; }
  
  .footer {
    width: 100%;
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    color: #ffffff;
    padding: 2rem 1rem;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    box-shadow: 0 -0.125rem 0.625rem rgba(0, 0, 0, 0.2);
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    transition: background 0.4s ease;
  }
  
  .footer:hover {
    background: linear-gradient(135deg, #2563eb, #60a5fa);
  }
  
  @media (max-width: 37.5rem) {
    .footer {
      font-size: 0.9rem;
      padding: 1.5rem 0.5rem;
    }
  }
  </style>