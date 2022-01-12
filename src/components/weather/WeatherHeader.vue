<template>
    <nav class="level weather-header">
        <div class="level-left">
            <h1 class="title">Paris</h1>
        </div>
        <div class="level-right">
            <b-tooltip label="Fermer le menu" position="is-left">
                <b-button type="is-danger" rounded icon-right="close" />
        </b-tooltip>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style>
    .weather-header {
        -webkit-box-shadow: 0px 9px 19px 2px rgba(0,0,0,0.88); 
        box-shadow: 0px 9px 19px 2px rgba(0,0,0,0.88);
    }
</style>