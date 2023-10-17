<script>
export default {
    name: 'Main'
}
</script>

<template>

    <div class="card-container">

        <div class="card">card</div>

    </div>
  
</template>

<style scoped lang="scss">

.card-container{
    width: 100%;
    height: 100vh;
    padding-top: 20px;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card{
        width: 300px;
        height: 100px;
        background-color: white;
        margin-right: 5px;
    }
}

</style>