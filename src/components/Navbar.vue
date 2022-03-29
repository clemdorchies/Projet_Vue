<script>
</script>

<template>
    <div style="border: 2px solid grey; padding: 20px;">
        <h1>Rick & Morty Project</h1>
        <h2>By Michaël Champalet & Clément Dorchies</h2>

        <div style="margin: auto;">
            <RouterLink to="/" tag="button" class="buttonLeft">Accueil</RouterLink>
            <RouterLink to="/Caractere" tag="button" class="buttonMid">Caractere</RouterLink>
            <RouterLink to="/Episode" tag="button" class="buttonRight">Episode</RouterLink>
        </div>
    </div>
</template>

<style>
.buttonLeft {
    background-color: grey;
    border-radius: 5px;
    border: 0px;
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
    margin-right: 10px;
}
.buttonMid {
    background-color: grey;
    border-radius: 5px;
    border: 0px;
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
}
.buttonRight {
    background-color: grey;
    border-radius: 5px;
    border: 0px;
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
    margin-left: 10px;
}
</style>
