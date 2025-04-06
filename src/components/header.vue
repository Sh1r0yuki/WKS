<template>
    <header class="header">
      <h1 class="logo">🎵 Blind Test</h1>
    </header>
  </template>
  
  <style scoped>
  *, *::before, *::after { box-sizing: border-box; }
  
  .header {
    width: 100%;
    background-color: #ffffff;
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    box-shadow: 0 6px 1.25rem rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 10;
    animation: fadeInSlideDown 0.8s ease-out;
  }
  
  .logo {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1d4ed8;
    letter-spacing: 1.2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  @keyframes fadeInSlideDown {
    from {
      opacity: 0;
      transform: translateY(-1.875rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>