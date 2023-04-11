<template>
    <v-card class="customColor" :json-data="catBreed" 
    :elevation="elevation" @mouseover="increaseElevation" @mouseleave="decreaseElevation">
        <v-card-title>Breed: {{catBreed.breed}}</v-card-title>
        <v-card-subtitle>Origin: {{catBreed.origin}}</v-card-subtitle>
        <v-card-text>
            {{ catBreed.breed }} cats are originally from {{ catBreed.country }}
            and have {{ catBreed.pattern }} fur pattern.
        </v-card-text>  
    </v-card >
</template>

<script>
export default {
    name: "BreedListItem",
    props: ['catBreed'],
    data() {
        return { elevation: 5 }
    },
    methods: {
        increaseElevation() {
            this.elevation = 15;
        },
        decreaseElevation() {
            this.elevation = 5;
        }
    }
}
</script>

<style scoped>
.customColor{
    background-color: var(--v-primary-custom);
    color: var(--v-on-primary-custom);
    margin: 14px;
    width: 350px;
}
</style>