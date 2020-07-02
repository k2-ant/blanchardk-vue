<template>
    <header class="masthead">
        <div class="row h-100 align-items-center overlay no-gutters">
            <div class="col-12 text-center float-left">
                <div class="row no-gutters">
                    <!-- spacer --> 
                    <div class="col-3">

                    </div>

                    <!-- text --> 
                    <div class="col-6">

                        <!-- header -->
                        <div class="row">
                            <div class="col">
                                <h1 class="float-center text-center heading">{{ heading }}</h1> 
                            </div>
                        </div>

                        <!-- subheader -->
                        <div class="row">
                            <div class="col">
                                <h4 class="float-center text-center subheading">{{ subheading }}</h4>
                            </div>
                        </div>
                        
                    </div>
                    <!-- spacer --> 
                    <div class="col-3">

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    components: {
    },
    data : function() {
        return {
            heading: "Share stories across generations.",
            subheading: "Weekly video life stories from your loved ones."
        }
    }
    
}
</script>

<style>
    .masthead {
        height: 100vh;
        min-height: 500px;
        background: 
        url('/img/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1;
    }

    .heading {
        text-align: left;
        color: white;
    }

    .subheading {
        text-align: left;
        color: white;
    }

</style>
