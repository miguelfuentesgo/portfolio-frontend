<template>
    <nav class="navbar">
      <NuxtLink to="/" class="logo">Hi, I'm Miguel Fuentes</NuxtLink>
      <ul class="nav-links">
        <li><NuxtLink to="/">Inicio</NuxtLink></li>
        <li><NuxtLink to="/proyectos">Proyectos</NuxtLink></li>
        <li><NuxtLink to="/acerca">Acerca de mí</NuxtLink></li>
        <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
      </ul>
    </nav>
</template>
<script>
</script>
<style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: $color-background;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $color-secondary;
      text-decoration: none;

      &:hover{
        color: $color-primary;
      }
    }
  
    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
  
      a {
        padding: 10px 20px;
        text-decoration: none;
        color: $color-secondary;
        font-weight: 500;
        border: 1px solid $color-background;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        &:hover {   
          color: $color-primary;
          background-color: rgba($color-background, 0.1);
          border: 1px solid $color-primary;
          transform: scale(1.5);
        } 
      }
    }
  }
</style>