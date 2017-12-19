<template>
    <div>
        <div class="row">
       
            <div class="col-lg-12">
                <!-- First Basic Table strats here-->
                <div class="card ">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="ti-menu"></i> Verify User
                        </h3>
                        <span class="float-right">
                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                    <i class="fa fa-fw ti-close removecard "></i>
                                </span>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Loyce</td>
                                    <td>Larson</td>
                                    <td>Industrial</td>
                                    <td><span class="badge badge-success p-1">Approved</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vincenzo</td>
                                    <td>Bashirian</td>
                                    <td>Baby</td>
                                    <td><span class="badge badge-danger">Rejected</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Winona</td>
                                    <td>Hagenes</td>
                                    <td>Health</td>
                                    <td><span class="badge badge-success p-1">Approved</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Clark</td>
                                    <td>Ebert</td>
                                    <td>Tools</td>
                                    <td><span class="badge badge-success p-1">Approved</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Waino</td>
                                    <td>Labadie</td>
                                    <td>Music</td>
                                    <td><span class="badge badge-warning p-1">Pending</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Jackson</td>
                                    <td>Abshire</td>
                                    <td>Shoes</td>
                                    <td><span class="badge badge-danger">Rejected</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Erica</td>
                                    <td>Lehner</td>
                                    <td>Shoes</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Dorris</td>
                                    <td>Bins</td>
                                    <td>Outdoors</td>
                                    <td><span class="badge badge-success p-1">Approved</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Norene</td>
                                    <td>Rolfson</td>
                                    <td>Baby</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Katharina</td>
                                    <td>Kovacek</td>
                                    <td>Garden</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                           <p> <b-btn v-b-modal.modaledit variant="primary"><span class="fa fa-fw ti-pencil"></span></b-btn></p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- First Basic Table Ends Here-->
      
        <b-modal id="modaledit" size="lg"  title="User details" >
            <div class="modal-body" style="text-align:left">


<form-wizard  
					  title="Verify User"
					  shape="tab"
					  back-button-text="Back"
					  next-button-text="Next"
					  finish-button-text="Finish"
					  color="#9b59b6">
			<tab-content title="User Profile"
						 icon="ti-user" >
				<h2 class="hidden">&nbsp;</h2>
	<div class="row form-group required">
					<div class="col-sm-3 text-center">
						<label for="group" class="form-control-label float-right">Status</label>
					</div>
					<div class="col-sm-9">
						<span class='badge badge-success'>Active</span>
					</div>
				</div>
				<div class="row form-group required">
					<div class="col-sm-3 text-center">
						<label for="group" class="form-control-label float-right">User Type *</label>
					</div>
					<div class="col-sm-9">
						<select class="form-control required select21"
								title="Select group..." name="role" id="role">
							<option value="Personal">Personal</option>
							<option value="Coperate">Coperate</option>
						</select>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="first_name" class="form-control-label float-right">First Name *
						</label>
					</div>
					<div class="col-sm-9">
						<input id="first_name" name="first_name" type="text"
							   placeholder="First Name" class="form-control required" value="Addison"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="last_name" class="form-control-label float-right">Last Name *
						</label>
					</div>
					<div class="col-sm-9">
						<input id="last_name" name="last_name" type="text"
							   placeholder="Last Name" class="form-control required" value="Schmeler"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="email" class="form-control-label float-right">Email *</label>
					</div>
					<div class="col-sm-9">
						<input id="email" name="email" placeholder="E-mail" type="text"
							   class="form-control required email" value="Addisone@sf.com"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="password" class="form-control-label float-right">Password
							*</label>
					</div>
					<div class="col-sm-9">
						<input id="password" name="password" type="password"
							   placeholder="Password" class="form-control required"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="password_confirm" class="form-control-label float-right">Confirm
							Password *
						</label>
					</div>
					<div class="col-sm-9">
						<input id="password_confirm" name="password_confirm" type="password"
							   placeholder="Confirm Password "
							   class="form-control required"/>
					</div>
				</div>

				<div class="row form-group">
					<div class="col-sm-3  float-right">
						<label for="activecheckbox" class="form-control-label float-right">Confirm
							Activate User *
						</label>
					</div>
					<div class="col-sm-9">
						<b-form-checkbox>&nbsp;Activate
							the user otherwise the user won't be able to access their
							account.</b-form-checkbox>
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

					</div>
				</div>
				<div class="row form-group required">
					<div class="col-sm-3 text-right">
						<label for="bio" class="control-label">Bio
							<small>(brief intro) *</small>
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
						<label for="gender" class="form-control-label">Gender *</label>
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
			<tab-content title="Bank Account"
						 icon="ti-user">

				<div class="row form-group">
					<div class="col-sm-3">
						<label for="Bank" class="form-control-label float-right">Bank Code
						</label>
					</div>
					<div class="col-sm-9">
						<input name="Bank" type="text"
							   placeholder="Bank" class="form-control required" value="SCB"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="Bank" class="form-control-label float-right">Bank Name
						</label>
					</div>
					<div class="col-sm-9">
						<input name="Bank" type="text"
							   placeholder="Bank" class="form-control required" value="Siam Commercail Bank"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="Bank" class="form-control-label float-right">Account Number
						</label>
					</div>
					<div class="col-sm-9">
						<input name="Bank" type="text"
							   placeholder="Bank" class="form-control required" value="2278889984"/>
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-3">
						<label for="Bank" class="form-control-label float-right">Account Name
						</label>
					</div>
					<div class="col-sm-9">
						<input name="Bank" type="text"
							   placeholder="Bank" class="form-control required" value="Addison Undisan"/>
					</div>
				</div>
			</tab-content>
		</form-wizard>



 
            </div>
            <div slot="modal-footer" class="w-100" style="text-align:right">
                <b-btn size="sm" class="" variant="success" >
                    <span class="ti-check"></span>Approve
                </b-btn>
                <b-btn size="sm" class="" variant="warning" >
                    <span class="ti-minus"></span>Pending
                </b-btn>
                <b-btn size="sm" class="" variant="danger" >
                    <span class="ti-close"></span>Reject
                </b-btn>
            </div>
        </b-modal>
            <!-- /.modal-dialog -->
        <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title custom_align" id="Heading5">Delete this entry</h4>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-info">
                            <span class="glyphicon glyphicon-info-sign"></span>&nbsp; Are you sure you want to
                            delete this record ?
                        </div>
                    </div>
                    <div class="modal-footer ">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">
                            <span class="glyphicon glyphicon-ok-sign"></span> Yes
                        </button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">
                            <span class="glyphicon glyphicon-remove"></span> No
                        </button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <b-modal id="modaldelete" title="Edit details" >
            <div class="modal-body">
                <div class="alert alert-info">
                    <span class="glyphicon glyphicon-info-sign"></span>&nbsp; Are you sure you want to
                    delete this record ?
                </div>
            </div>
            <div slot="modal-footer" class="float-right">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                    <span class="ti-check"></span> Yes
                </button>
                <button type="button" class="btn btn-success" data-dismiss="modal">
                    <span class="ti-close"></span> No
                </button>
            </div>
        </b-modal>
        <!-- second row ends here -->
     
        <!-- row span table ends here-->
    </div>
</template>
<script>
	import Vue from 'vue'
	import VueFormWizard from 'vue-form-wizard'
	import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
export default {
    name: "simple_tables",
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
