<template>
    <div class="container-fluid register">
        <div class="container">
            <div class="row">
                <div class="col-lg-4  col-10 col-sm-8 m-auto login-form">

                    <h2 class="text-center logo_h2">
                        <img src="../../assets/img/logo_coinasset_blue.png" alt="Logo">
                    </h2>

                    <div class="card-body">

                        <form action="login.html" id="authentication" method="post" class="signup_validator">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label for="first" class="sr-only">First Name</label>
                                        <input type="text" class="form-control " id="first" name="first_name"
                                               placeholder="First name">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label for="last" class="sr-only">Last Name</label>
                                        <input type="text" class="form-control  " id="last" name="last_name"
                                               placeholder="Last name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="email" class="sr-only"> E-mail</label>
                                        <input type="text" class="form-control  " id="email" name="email"
                                               placeholder="E-mail">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" class="form-control " id="password"
                                               name="password" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="confirm-password" class="sr-only">Password</label>
                                        <input type="password" class="form-control " id="confirm-password"
                                               name="password_confirm" placeholder="Confirm Password">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group checkbox">
                                        <label for="terms">
                                            <input type="checkbox" name="terms" id="terms">&nbsp; I accept the <a href="javascript:void(0)">terms &amp; Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input v-on:click="register()" type="submit" value="Sign Up" class="btn btn-primary btn-block"/>
                                    </div>
                                    <span class="sign-in">Already a member?  <router-link to="/login" exact>Sign In</router-link></span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- <div class="row text-center social">
                        <div class="col-xl-12">
                            <p class="alter">Sign Up with</p>
                        </div>
                        <div class="row m-auto">
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-facebook">
                                    <i class="ti-facebook"></i>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-twitter">
                                    <i class="ti-twitter-alt"></i>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-google">
                                    <i class="ti-google"></i>
                                </a>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import validator from "../../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js"
export default {
    name: "register",
    mounted: function() {

        $('.signup_validator').bootstrapValidator({
            fields: {
                first_name: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and cannot be empty'
                        }
                    }
                },
                last_name: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                password: {
                    validators: {

                        notEmpty: {
                            message: 'Please provide a password'
                        }
                    }
                },
                password_confirm: {
                    validators: {
                        notEmpty: {
                            message: 'The confirm password is required'
                        },
                        identical: {
                            field: 'password',
                            message: 'Please enter the same password'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        regexp: {
                            regexp: /^\S+@\S{1,}\.\S{1,}$/,
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                email_confirm: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        regexp: {
                            regexp: /^\S+@\S{1,}\.\S{1,}$/,
                            message: 'The input is not a valid email address'
                        },
                        identical: {
                            field: 'email',
                            message: 'Please enter the same email as above'
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: 'The phone number is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^\d{10}$/,
                            message: 'The phone number should contain only 10 numbers'
                        }
                    }
                },
                terms: {
                    validators: {
                        notEmpty: {
                            message: 'The terms and conditions should be accepted'
                        }
                    }
                }
            }
        });
        var opts = $("#source").html(),
            opts2 = "<option></option>" + opts;
        $("select.populate").each(function() {
            var e = $(this);
            e.html(e.hasClass("placeholder") ? opts2 : opts);
        });
        $(".examples article:odd").addClass("zebra");

        $("#terms").on("ifChanged", function() {
            $('.signup_validator').bootstrapValidator('revalidateField', $('#terms'));
        });
        $("[type='reset']").on("click", function() {
            $('.signup_validator').bootstrapValidator("resetForm");
        });
        //password validation
        $('#password').on('keyup', function () {
            var pswd = $("#password input[name='password']").val();
            var pswd_cnf = $("#confirm-password input[name='password_confirm']").val();
            if (pswd != '') {
                $('.signup_validator').bootstrapValidator('revalidateField', $('#password'));
            }
            if (pswd_cnf != '') {
                $('.signup_validator').bootstrapValidator('revalidateField', $('#confirm-password'));
            }
        })

    },
    methods: {
        register () {
            this.$router.push('/')
            console.log('register')
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.register {
    padding-top: 6.5%;
    width: 100%;
    height:100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
