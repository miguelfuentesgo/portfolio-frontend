<template>
    <nav class="navbar">
      <NuxtLink to="/" class="logo">M</NuxtLink>
      
      <div :class="{ 'is-active': menuIsOpen }">
        <ul class="nav-links" >
          <li @click="toggleMenu()" :class="{active: currentPath == '/'}"><NuxtLink to="/">Inicio <font-awesome-icon icon="home" size="1x" /></NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/proyectos'}"><NuxtLink to="/proyectos">Proyectos  <font-awesome-icon icon="diagram-project" size="1x" /></NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/acerca'}"><NuxtLink to="/acerca">Experiencia  <font-awesome-icon icon="address-card" size="1x" /></NuxtLink></li>
          <li @click="toggleMenu()" :class="{active: currentPath == '/contacto'}"><NuxtLink to="/contacto">Contacto  <font-awesome-icon icon="user" size="1x" /></NuxtLink></li>
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
    height: 100px;
    display: flex;
    position: sticky;
    top: 0px;
    
    justify-content: space-between;
    align-items: start;
    padding: 20px 20px;
    background-color: $color-background;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  
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
      background-color: $color-background;
  
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
        } 
      }
      .active a {
        color: $color-primary;
          background-color: rgba($color-background, 0.1);
          border: 1px solid $color-primary;
          
      }
    }

    .plane-road {
      margin-top: 20px;
      width: 600px;
      height: 40px;

      .plane-selector {
        
        right: 560px;
        position: absolute;
        transition: right 0.3s ease-in-out;

        &.second {
          right: 420px;
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
        width: 160px;
        position: absolute;
        top: 60px;
        right: -250px;
        flex-direction: column;
        gap: 2px;
        align-items: end;
        justify-content: center;
        display: flex;
        transition: right 0.3s ease-in-out;
        
        li {
          width: 100%;
          text-align: end;
          a {
            display: block;
            width: 100%;
          }
        }
       
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
          transition: top 0.3s ease-in-out, right 0.3s ease-in-out;
        }
  
        
      }

      .is-active {
        .nav-links {
          right: 25px; 
        }

        .plane-selector {
          display: block;
          right: 0px;
          
          
  
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