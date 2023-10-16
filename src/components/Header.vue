<script>
export default {
    name: 'Header'

}
</script>

<template>

    <div class="header-container">

        <div class="logo-container">logo</div>

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
        background-color: white;
    }

    .search-container{
        width: 500px;
        background-color: white;
    }
}

</style>