<template>
    <div class="banner">
        <p>Hello, I am </p><h1>Miguel Fuentes</h1>
        <p>Fullstack developer</p>
        <div>
            stack
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .banner {
        padding: 20px;
        position: sticky;
        top: 110px;
        left: 0px;
    }

    @media (max-width: 768px) {
        .banner {
            top: auto;
            left: 0px;
            position: relative;
        }
    }

</style>