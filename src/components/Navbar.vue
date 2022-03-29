<script>
</script>

<template>
    <div style="border: 2px solid grey; padding: 20px;">
        <h1 style="margin: 0px;">Rick & Morty Project</h1>
        <h3 style="margin: 0px;">By</h3>
        <h2 style="margin-top: 0px;">Michaël Champalet & Clément Dorchies</h2>

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
    margin-right: 10px;
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
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
