<script setup lang="ts">

</script>

<template>
    <div class="banner">
        <p>Hello, I am </p><h1>Miguel Fuentes</h1>
        <p>Fullstack developer</p>
        <div class="icons-container">
            <div class="icon-container">
                <font-awesome-icon :icon="['fab', 'html5']" size="3x" class="icon html"  />
                <p>HTML</p>
            </div>
            <div class="icon-container">
                <font-awesome-icon :icon="['fab', 'css3-alt']" size="3x" class="icon css" />
                <p>CSS</p>
            </div>
            <div class="icon-container">
                <font-awesome-icon :icon="['fab', 'js-square']" size="3x" class="icon js" />
                <p>JAVASCRIPT</p>
            </div>
            <div class="icon-container">
                <font-awesome-icon :icon="['fab', 'vuejs']" size="3x" class="icon vue" />
                <p>VUEJS</p>
            </div>
            <div class="icon-container">

                <font-awesome-icon :icon="['fab', 'react']" size="3x" class="icon react" />
                <p>REACT</p>
            </div>
            <div class="icon-container">

                <font-awesome-icon :icon="['fab', 'python']" size="3x" class="icon python" />
                <p>PYTHON</p>
            </div>
            <div class="icon-container">

                <font-awesome-icon :icon="['fab', 'golang']" size="3x" class="icon golang" />
                <p>GOLANG</p>
            </div> 
            
            <div class="icon-container">

                <font-awesome-icon :icon="['fab', 'aws']" size="3x" class="icon aws" />
                <p>AWS</p>
            </div> 
            
            <div class="icon-container">

                <!-- <IconLogoDjango class="icon django" /> -->
                <img class="icon" src="../assets/icons/logo-django.svg" width="50" height="50" alt="Django Logo" />
                <p>DJANGO</p>
            </div>  
            
            
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .banner {
        padding: 20px;
        position: sticky;
        top: 110px;
        left: 0px;

        .icons-container {
            display: flex;
            flex-wrap: wrap;
            min-width: 200px;
            justify-content: start;
            
            transition: all 0.2s ease-in-out;
            .icon-container {
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                p {
                    display: none;
                    position: absolute;
                    bottom: -30px;
                   
                    text-align: center;
                }
                height: 80px;

                &:hover{
                    transform: translateY(-15px);
                    p {
                    
                        display: block;
                        z-index: 2;
                        
                    }
                }
            }
        }

        .icon {
            margin: 10px;
            color: gray ;
            transition: scale 0.2s ease-in-out;
            &:hover {
                scale: 1.2;
            }

            &.html {
                color: #E34F26; /* Naranja/rojo de HTML5 */
              }
            
              &.css {
                color: #1572B6; /* Azul de CSS3 */
              }
            
              &.js {
                color: #F7DF1E; /* Amarillo de JavaScript */
              }
            
              &.vue {
                color: #4FC08D; /* Verde de Vue.js */
              }
            
              &.react {
                color: #61DAFB; /* Azul cian de React */
              }
            
              &.python {
                color: #3776AB; /* Azul/gris oscuro de Python (usado para Django) */
              }
            
              &.golang {
                color: #00ADD8; /* Azul claro de GoLang */
              }
            
              &.aws {
                color: #FF9300; /* Naranja de AWS */
              }

            &.django {
                width: 3rem;
                height: 3rem;
                
            }
        }
    }

    @media (max-width: 768px) {
        .banner {
            top: auto;
            left: 0px;
            position: relative;
        }
    }

</style>