<template>
    <div class="row">
        <div class="col">
            <h5 class="mt-5">{{ title }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style>
    .title {
        align-content: left;
        text-align: left;
    }
</style>