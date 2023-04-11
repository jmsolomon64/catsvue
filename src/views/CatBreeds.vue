<template>
    <div>
        <h1>List of Cat Breeds</h1>
    <hr/>
        <div class="flex">
            <BreedListItem :cat-breed="breed" v-for="(breed, index) in this.breeds.data"
            :key="index" />
        </div>
    </div>
</template>

<script>
import store from "@/store"
import { mapActions } from "vuex";
import BreedListItem from "@/components/BreedListItem.vue";

export default {
    name: "CatBreeds",
    components: { BreedListItem },
    computed: {
        breeds() { return store.state.catBreeds; }
    },
    methods: {
        ...mapActions({
            getCatBreeds: "getCatBreeds"
        }),
    },

    created() {
        this.getCatBreeds();
        console.log(this.breeds);
    } 
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
</style>