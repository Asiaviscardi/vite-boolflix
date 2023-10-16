<script>
export default {
    name: 'Header'

}
</script>

<template>

    <div class="header-container">

        <div class="logo-container"><img src="../assets/logo-boolflix.png" alt=""></div>

        <div class="search-container">barra di ricerca</div>

    </div>
  
</template>

<style scoped lang="scss">

.header-container{
    background-color: black;
    display: flex;
    justify-content: space-between;

    .logo-container{
        width: 200px;

        img{
            width: 100%;
        }
    }

    .search-container{
        width: 500px;
        background-color: white;
    }
}

</style>