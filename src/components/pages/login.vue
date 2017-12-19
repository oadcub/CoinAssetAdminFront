<template>
    <div class="container-fluid login">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-10 col-sm-8 mx-auto login-form">

                    <h2 class="text-center logo_h2">
                        <img src="../../assets/img/logo_coinasset_blue.png" alt="Logo">
                    </h2>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <form action="index.html" id="authentication" method="post" class="login_validator">
                                    <div class="form-group">
                                        <label for="email" class="sr-only"> E-mail</label>
                                        <input type="text" class="form-control  " id="email" name="username"
                                               placeholder="E-mail">
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" class="form-control" id="password"
                                               name="password" placeholder="Password">
                                    </div>
                                    <div class="form-group checkbox">
                                        <label for="remember">
                                            <input type="checkbox" name="remember" id="remember">&nbsp; Remember Me
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <input v-on:click="login()" type="submit"  value="Sign In" class="btn btn-primary btn-block"/>
                                    </div>
                                   <router-link to="/reset_password" exact>Forgot Password ? </router-link>
<!-- <span class="float-right sign-up">New ?  <router-link to="/register" exact>Sign Up</router-link></span> -->
                                </form>
                            </div>
                        </div>
                        <!-- <div class="row text-center social">
                            <div class="col-12">
                                <p class="alter">Sign in with</p>
                            </div>
                            <div class="row m-auto">

                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-facebook">
                                        <i class="ti-facebook"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-twitter">
                                        <i class="ti-twitter-alt"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-google">
                                        <i class="ti-google"></i>
                                    </a>
                                </div>

                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validator from "../../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js"
export default {
    name: "login",
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            //=================Preloader===========//
            $(window).on('load', function() {
                $('.preloader img').fadeOut();
                $('.preloader').fadeOut();
            });
            //=================end of Preloader===========//
            $("#authentication").bootstrapValidator({
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'The email address is required'
                            },
                            regexp: {
                                regexp: /^\S+@\S{1,}\.\S{1,}$/,
                                message: 'Please enter valid email format'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Password is required'
                            }

                        }
                    }

                }
            });

        });
    },
    methods: {
        login () {
            this.$router.push('/')
            console.log('login')
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.login {
    padding-top: 6.5%;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
