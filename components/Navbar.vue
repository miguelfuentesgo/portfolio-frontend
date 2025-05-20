<template>
    <nav class="navbar">
      <NuxtLink to="/" class="logo">Hi, I'm Miguel Fuentes</NuxtLink>
      
      <div :class="{ 'is-active': menuIsOpen }">
        <ul class="nav-links" >
          <li @click="toggleMenu()" :class="{active: currentPath == '/'}"><NuxtLink to="/"><font-awesome-icon icon="home" size="1x" /> Inicio</NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/proyectos'}"><NuxtLink to="/proyectos"><font-awesome-icon icon="diagram-project" size="1x" /> Proyectos</NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/acerca'}"><NuxtLink to="/acerca"><font-awesome-icon icon="address-card" size="1x" /> Acerca de mí</NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/contacto'}"><NuxtLink to="/contacto"><font-awesome-icon icon="user" size="1x" /> Contacto</NuxtLink></li>
        </ul>
        <div class="plane-road">
          <font-awesome-icon class="plane-selector" :class="getPlaneClass()" icon="plane" size="1x" />
        </div>
      </div>
      

      <div class="burguer" @click="toggleMenu(0)">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>
</template>
<script setup>
const route = useRoute();

const menuIsOpen = ref(false);

const toggleMenu = (time = 500) => {
  setTimeout(() => {
    menuIsOpen.value = !menuIsOpen.value;
  }, time);
}
  
const getPlaneClass = () => {
  if (currentPath.value === '/') {
    return 'first';
  } else if (currentPath.value === '/proyectos') {
    return 'second';
  } else if (currentPath.value === '/acerca') {
    return 'third';
  } else if (currentPath.value === '/contacto') {
    return 'fourth';
  }
}
const currentPath = computed(() => {
  return route.path;
})
</script>
<style lang="scss" scoped>
  .navbar {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: start;
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
      width: 600px;
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
          color: $color-secondary;
          background-color: rgba($color-background, 0.1);
          border: 1px solid $color-secondary;
          transform: scale(1.5);
        } 
      }
      .active a {
        color: $color-primary;
          background-color: rgba($color-background, 0.1);
          border: 1px solid $color-primary;
          transform: scale(1.5);
      }
    }

    .plane-road {
      margin-top: 20px;
      width: 600px;
      height: 40px;

      .plane-selector {
        
        right: 570px;
        position: absolute;
        transition: right 0.3s ease-in-out;

        &.second {
          right: 430px;
        }
        &.third {
          right: 255px;
        }
        &.fourth {
          right: 90px;
        }
      }

      
    }

    .burguer {
      display: none;
      flex-direction: column;
      cursor: pointer;

      .line {
        width: 25px;
        height: 3px;
        background-color: $color-secondary;
        margin: 4px 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }



  @media (max-width: 768px) {
    .navbar {

      .nav-links {
        width: auto;
        position: absolute;
        top: 70px;
        right: -250px;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        display: flex;
        transition: right 0.3s ease-in-out;
      }

      .plane-road {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50px;
        right: 0px;
        width: auto;
        height: 140px;
  
        .plane-selector {
          display: none;
          position: absolute;
          rotate: 90deg;
          right: -250px;
        }
  
        
      }

      .is-active {
        .nav-links {
          right: 25px; 
        }

        .plane-selector {
          display: block;
          right: 0px;
          transition: top 0.3s ease-in-out;
          
  
          &.second {
            right: 0px;
            top: 45px;
          }
          &.third {
            right: 0px;
            top: 90px;
          }
          &.fourth {
            right: 0px;
            top: 130px;
          }
      }
  }  
      .burguer {
        color: white;
        display: flex;
      }
    }
  }
</style>