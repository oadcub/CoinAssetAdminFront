-<template>
    <div class="card">
    <form-wizard  @on-complete="onComplete" id="adduser_form"
                 title="Add New Admin"
                 shape="tab"
                 back-button-text="Back"
                 next-button-text="Next"
                 finish-button-text="Finish!"
                 color="#9b59b6">
        <tab-content title="Admin Profile"
                     icon="ti-user" >
            <h2 class="hidden">&nbsp;</h2>
				
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="user_name" class="form-control-label float-sm-left ">User Name
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="user_name" name="user_name" type="text"
                           placeholder="User Name" class="form-control required"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="first_name" class="form-control-label float-sm-left ">First Name
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="first_name" name="first_name" type="text"
                           placeholder="First Name" class="form-control required"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="last_name" class="form-control-label float-sm-left ">Last Name
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="last_name" name="last_name" type="text"
                           placeholder="Last Name" class="form-control required"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="email" class="form-control-label float-sm-left ">Email </label>
                </div>
                <div class="col-sm-9">
                    <input id="email" name="email" placeholder="E-mail" type="text"
                           class="form-control required email"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="password" class="form-control-label float-sm-left ">Password
                        </label>
                </div>
                <div class="col-sm-9">
                    <input id="password" name="password" type="password"
                           placeholder="Password" class="form-control required"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="password_confirm" class="form-control-label float-sm-left   ">Confirm
                        Password
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="password_confirm" name="password_confirm" type="password"
                           placeholder="Confirm Password "
                           class="form-control required"/>
                </div>
            </div>
        </tab-content>
        <tab-content title="Bio"
                     icon="ti-id-badge">
            <h2 class="hidden">&nbsp;</h2>
            <div class="row form-group required">
                <div class="col-sm-3 text-right">
                    <label for="dob" class="form-control-label">Date of Birth</label>
                </div>
                <div class="col-sm-9">
                    <input id="dob" name="dob" type="text" class="form-control"
                           placeholder="dd/mm/yyyy"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3 text-right">
                    <label for="pic" class="form-control-label">Profile
                        picture</label>
                </div>
                <div class="col-sm-9">
                    <div class="fileinput fileinput-new" data-provides="fileinput">
                        <div class="fileinput-new thumbnail"
                             style="width: 200px; height: 200px;">
                            <img src="../../assets/img/original.jpg" alt="profile pic holder" class="img-thumbnail">
                        </div>
                        <div class="fileinput-preview fileinput-exists thumbnail"
                             style="max-width: 200px; max-height: 200px;"></div>
                        <div>
                            <span class="btn btn-secondary btn-file">
                                <span class="fileinput-new">Select image</span>
                                <span class="fileinput-exists">Change</span>
                                <input id="pic" name="pic_file" type="file" class="form-control"/>
                            </span>
                            <a href="#" class="btn btn-danger fileinput-exists"
                               data-dismiss="fileinput">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 text-right">
                    <label for="bio" class="control-label">Bio
                        <small>(brief intro)</small>
                    </label>
                </div>
                <div class="col-sm-9">
                    <textarea name="bio" id="bio" class="form-control resize_vertical"
                                                              rows="4"></textarea>
                </div>
            </div>
        </tab-content>
        <tab-content title="Address"
                     icon="ti-location-pin">
            <div class="row form-group">
                <div class="col-sm-3 text-right">
                    <label for="gender" class="form-control-label">Gender</label>
                </div>
                <div class="col-sm-9">
                    <select class="form-control select21" id="gender"
                            title="Select Gender..." name="gender">
                        <option disabled selected>Select Gender</option>
                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                        <option value="other">OTHER</option>
                    </select>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3 text-right">
                    <label for="country" class="form-control-label">Country</label>
                </div>
                <div class="col-sm-9">
                    <select class="select21 form-control" name="country" id="country">
                        <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option>Select Country</option>
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                        </optgroup>
                        <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                        </optgroup>
                        <optgroup label="Mountain Time Zone">
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                        </optgroup>
                        <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                        </optgroup>
                        <optgroup label="Eastern Time Zone">
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="row form-group ">
                <div class="col-sm-3 text-right">
                    <label for="state" class="form-control-label">State </label>
                </div>
                <div class="col-sm-9">
                    <input id="state" name="state" type="text" class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 text-right">
                    <label for="city" class="form-control-label">City </label>
                </div>
                <div class="col-sm-9">
                    <input id="city" name="city" type="text" class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 text-right">
                    <label for="address" class="form-control-label">Address </label>
                </div>
                <div class="col-sm-9">
                    <input id="address" name="address" type="text"
                           class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 text-right">
                    <label for="postal" class="form-control-label">Postal/zip</label>
                </div>
                <div class="col-sm-9">
                    <input id="postal" name="postal" type="text" class="form-control"/>
                </div>
            </div>
        </tab-content>
        <tab-content title="Admin Role"
						 icon="ti-user">
				<p class="text-danger"><strong>Be careful with role selection, if you give
					Owner access.. they can access all section</strong></p>
				<div class="row form-group required">
					<div class="col-sm-3 text-center">
						<label for="role" class="form-control-label">Role *</label>
					</div>
					<div class="col-sm-9">
						<select class="form-control required select21"
								title="Select group..." name="role" id="role">
							<option disabled selected>Select Role</option>
							<option value="Staff">Staff</option>
							<option value="Manager">Manager</option>
							<option value="Owner">Owner</option>
						</select>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3 text-center">
						Activate User

					</div>
					<div class="col-sm-9">
						<b-form-checkbox>&nbsp;Activate
							the user otherwise the user won't be able to access their
							account.</b-form-checkbox>
					</div>
				</div>
			</tab-content>
    </form-wizard>
    </div>

</template>
<script>
    import Vue from 'vue'
    import VueFormWizard from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import jasney from "../../vendors/jasny-bootstrap/dist/js/jasny-bootstrap.min.js";
    import select2 from "../../vendors/select2/dist/js/select2.min.js";
    import validator from "../../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js";
    require("imports-loader?moment=moment!../../vendors/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js")
    import datepicker from "../../vendors/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
    Vue.use(VueFormWizard)
export default {
    name: "addnew_admin",
    methods: {
        onComplete: function(){
            alert('Admin registered');
        }
    },
    mounted: function() {
        "use strict";

        $(document).ready(function() {

            // bootstrap wizard//
            $(".select21").select2({
                theme: "bootstrap",
                placeholder: "",
                width: '100%'
            });
            $("#dob").datetimepicker({
                widgetPositioning: {
                    vertical: 'bottom'
                },
                format: 'DD/MM/YYYY',
                useCurrent: false,
                maxDate: 'now'
            });
            $("#adduser_form").bootstrapValidator({
                fields: {
                    first_name: {
                        validators: {
                            notEmpty: {
                                message: 'The first name is required'
                            }
                        },
                        required: true,
                        minlength: 3
                    },
                    last_name: {
                        validators: {
                            notEmpty: {
                                message: 'The last name is required'
                            }
                        },
                        required: true,
                        minlength: 3
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Password is required'
                            },
                            different: {
                                field: 'first_name,last_name',
                                message: 'Password should not match first or last name'
                            }
                        }
                    },
                    password_confirm: {
                        validators: {
                            notEmpty: {
                                message: 'Confirm Password is required'
                            },
                            identical: {
                                field: 'password'
                            },
                            different: {
                                field: 'first_name,last_name',
                                message: 'Confirm Password should match with password'
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
                    bio: {
                        validators: {
                            notEmpty: {
                                message: 'Bio is required and cannot be empty'
                            }
                        },
                        minlength: 20
                    },

                    gender: {
                        validators: {
                            notEmpty: {
                                message: 'Please select a gender'
                            }
                        }
                    },
                    activate: {
                        validators: {
                            notEmpty: {
                                message: 'Please check the checkbox to activate'
                            }
                        }
                    },
                    group: {
                        validators: {
                            notEmpty: {
                                message: 'You must select a group'
                            }
                        }
                    }
                }
            });

            $('#activate').on('ifChanged', function(event) {
                $('#adduser_form').bootstrapValidator('revalidateField', $('#activate'));
            });
        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/jasny-bootstrap/dist/css/jasny-bootstrap.min.css"></style>
<style src="../../vendors/select2/dist/css/select2.min.css"></style>
<style src="../../vendors/select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"></style>
<style src="../../assets/css/custom_css/wizard.css"></style>
<style src="../../assets/css/custom_css/vuewizard.css"></style>
