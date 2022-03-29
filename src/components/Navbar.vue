<script>
</script>

<template>
    <div style="border: 2px solid grey; padding: 20px;">
        <h1>Rick & Morty Project</h1>
        <h2>By Michaël Champalet & Clément Dorchies</h2>

        <div style="margin: auto;">
            <button style="background-color: grey; border-radius: 5px; border: 0px; width: 10%; margin-right: 10px;">
                <RouterLink to="/" style="text-decoration: none; color: white;">Accueil</RouterLink>
            </button>
            <button style="background-color: grey; border-radius: 5px; border: 0px; width: 10%; margin-left: 10px; margin-right: 10px;">
                <RouterLink to="/Caractere" style="text-decoration: none; color: white;">Caractere</RouterLink>
            </button>
            <button style="background-color: grey; border-radius: 5px; border: 0px; width: 10%; margin-left: 10px;">
                <RouterLink to="/Episode" style="text-decoration: none; color: white;">Episode</RouterLink>
            </button>
        </div>
    </div>
</template>

<style>
</style>
