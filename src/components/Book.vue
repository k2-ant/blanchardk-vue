<template>
    <div class="book">
        <div class="row">
            <div class="col">
                <img :src="img" class="book-cover" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span>{{ title }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span>{{ author }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : { 
        title: String,
        author: String,
        img: String
    }
}
</script>

<style>
    .book-cover {
        height: 10em;
    }

</style>