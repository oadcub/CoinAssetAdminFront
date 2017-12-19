<template>
    <div class="container-fluid reset">
        <div class="row">
            <div class="col-lg-4 col-sm-8 col-10 m-auto login-form">
                <h2 class="text-center">
                    <img src="../../assets/img/logo_coinasset_blue.png" alt="Logo">
                </h2>
                <div class="row">
                    <div class="col-xl-12">
                        <h4 class="text-center marginTB">Reset Password</h4>
                    </div>
                    <div class="col-xl-12">
                        <form action="login.html" id="authentication" method="post" class="reset_validator">
                            <div class="form-group">
                                <label for="password" class="sr-only">Password</label>
                                <input type="password" class="form-control" id="password"
                                       name="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="confirm-password" class="sr-only">Password</label>
                                <input type="password" class="form-control" id="confirm-password"
                                       name="password_confirm" placeholder="Confirm Password">
                            </div>
                            <div class="col-12 text-center">
                                <div class="form-group">
                                    <input v-on:click="resetPassword()"  type="submit" value="Reset Password" class="btn btn-primary center-block"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validator from "../../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js"
export default {
    name: "reset_password",
    mounted: function() {
        $('.reset_validator').bootstrapValidator({
            fields: {
                password: {
                    validators: {

                        notEmpty: {
                            message: 'Enter new password'
                        }
                    }
                },
                password_confirm: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm your new password'
                        },
                        identical: {
                            field: 'password',
                            message: 'Password is not matching the above one'
                        }
                    }
                }
            }
        });
    },
    methods: {
        resetPassword () {
            this.$router.push('/')
            console.log('resetPassword')
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.container-fluid.reset {
    padding-top: 6.5%;
    width: 100%;
    top: 0;
    height:100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    background-size: 100% 100%;
    overflow-y: auto;
}
</style>
