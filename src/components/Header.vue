<script>
export default {
    name: 'Header'

}
</script>

<template>

    <div class="header-container">

        <div class="logo-container">

            <img src="../assets/logo-boolflix.png" alt="">

        </div>

        <div class="search-container">

            <input type="search" placeholder="Cerca un film o una serie tv">

        </div>

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
            padding: 10px;
        }
    }

    .search-container{
        width: 85%;
        padding-right: 10px;
        display: flex;
        align-items: center;

        input{
            width: 100%;
            height: 65%;
            padding-left: 10px;
        }
    }
}

</style>