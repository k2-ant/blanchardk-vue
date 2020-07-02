<template>
    <div class="col-4">
        <div class="card feature border-0">
            <img class="card-img-top" :src="cardImage" />

            <div class="card-body">
                <div class="card-title text-center">
                    <h5>{{ title }}</h5>
                </div>
                <div class="card-text text-center text-muted">
                    {{ body }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        body: String,
        cardImage: String
    },
    data : function() {
        return {
        }
    }
}
</script>

<style scoped>

    .feature {
        border: none !important;
    }

</style>