<template>
    <div class="row">
        <div class="col">
            <div class="form-holder">
                <form class="contained-form form-email" id="signup-form" action="https://stephenweber.us18.list-manage.com/subscribe/post?u=f8494b492b3dc3e9ae3519f39&amp;id=9b647c968e" method="post" data-success="Thanks you for your interest! We will email you as soon as its ready."
                    data-error="Uhoh! It looks like your email might be incorrect.">
                    <h6 class="text-white">Join the first wave</h6>
                    <input type="text" name="EMAIL" id="mce-EMAIL" class="validate-required validate-email signup-email-field" placeholder="Email Address">
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f8494b492b3dc3e9ae3519f39_9b647c968e" tabindex="-1" value=""></div>
                    <input type="submit" value="Sign Up">
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>


<style>
    .contained-form input[type="text"] {
        border-radius: 2em 0em 0em 2em;
        border: none;
        height: 3em;
        padding: 1.5em;
    }

    .contained-form input[type="submit"] {
        height: 3em;
        width: 10em;
        border: none;
        border-radius: 0em 2em 2em 0em;
        background: 
        linear-gradient(
            rgba(234, 28, 145,1.00),
            rgba(254, 18, 195,1.00)
        );
        color: #ffffff;
        font-weight: bold;
        font-size: 1em;
    }

    .contained-form input[type="submit"]:hover {
        background: 
            linear-gradient(
                rgba(254, 18, 195,1.00),
                rgba(234, 28, 145,1.00)
            );
        cursor: pointer;
    }
</style>