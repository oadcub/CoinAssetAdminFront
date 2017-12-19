<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="text-center mbl m-t-10">
                                        <img src="../../assets/img/authors/avatar1.jpg" alt="img" class="rounded-circle img-bor"/>
                                    </div>
                                </div>
                                <br/>
                                <div class="card card-widget card-default">
                                    <div class="card-header">
                                        <span class="card-title"> <i class="icon-chart icons"></i> Verify Status<i
                                                class="icon-settings icons float-right mt-2"></i></span>
                                    </div>
                                    <div class="card-body profile_status">
                                        <div>
                                            <p>
                                                <strong>User Verified</strong>
                                                <small class="float-right text-muted">
                                                   320 Complete
                                                </small>
                                            </p>
                                            <div class="progress progress-xs mb-4 progress-striped active">
                                                <div class="progress-bar bg-info" role="progressbar"
                                                     aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 40%">
                                                        <span class="sr-only">
                                                    320 Complete (success)
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Coperate Verified</strong>
                                                <small class="float-right text-muted">
                                                    60 Complete
                                                </small>
                                            </p>
                                            <div class="progress progress-xs mb-4 progress-striped active">
                                                <div class="progress-bar bg-warning" role="progressbar"
                                                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 60%">
                                                        <span class="sr-only">
                                                    60 Complete (warning)
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Bank Account Verified</strong>
                                                <small class="float-right text-muted">
                                                    750 Complete
                                                </small>
                                            </p>
                                            <div class="progress progress-xs mb-4 progress-striped active">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                     aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 80%">
                                                        <span class="sr-only">
                                                    750 Complete (info)
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <b-tabs ref="tabs" class="profile-tabs">
                                            <b-tab title="Activities" active>
                                                <div id="tab-activity" class="tab-pane fadeInRight  active">


                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Recent Staff Activities</h3>
                    </div>
                    <div class="card-body">
                        <ul class="schedule-cont">
                            <li class="item danger">
                                <div class="data">
                                    <div class="time text-muted"> Just now</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    change balance from <span class="text-danger">500$</span> 
                                    to  <span class="text-danger">650$</span> for <span class="text-info">oadcub@gmail.com</span> </p>
                                </div>
                            </li>
                            <li class="item success">
                                <div class="data">
                                    <div class="time text-muted"> 7min ago</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    Approve Bank Account <span class="text-success">TMB</span> for  <span class="text-info">oadcub@gmail.com</span></p>
                                </div>
                            </li>
                            <li class="item info">
                                <div class="data">
                                    <div class="time text-muted">5hours ago</div>
                                   <p><span class="text-danger">Staff1</span> 
                                    Approve User <span class="text-info">oadcub@gmail.com</span> </p>
                                </div>
                            </li>
                            <li class="item warning">
                                <div class="data">
                                    <div class="time text-muted"> Yesterday</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    Approve Coperate <span class="text-warning">COINASSET COMPANY</span> 
                                    by  <span class="text-warning">invest@coinasset.co.th</span> </p>
                                </div>
                            </li>
                            <li class="item danger">
                                <div class="data">
                                    <div class="time text-muted"> Just now</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    change balance from <span class="text-danger">500$</span> 
                                    to  <span class="text-danger">650$</span> for <span class="text-info">oadcub@gmail.com</span> </p>
                                </div>
                            </li>
                            <li class="item success">
                                <div class="data">
                                    <div class="time text-muted"> 7min ago</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    Approve Bank Account <span class="text-success">TMB</span> for  <span class="text-info">oadcub@gmail.com</span></p>
                                </div>
                            </li>
                            <li class="item info">
                                <div class="data">
                                    <div class="time text-muted">5hours ago</div>
                                   <p><span class="text-danger">Staff1</span> 
                                    Approve User <span class="text-info">oadcub@gmail.com</span> </p>
                                </div>
                            </li>
                            <li class="item warning">
                                <div class="data">
                                    <div class="time text-muted"> Yesterday</div>
                                    <p><span class="text-danger">Staff1</span> 
                                    Approve Coperate <span class="text-warning">COINASSET COMPANY</span> 
                                    by  <span class="text-warning">invest@coinasset.co.th</span> </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                                                </div>
                                            </b-tab>
                                        </b-tabs>
                                        <!-- Tab panes -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "user_profile",
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/animate.css/animate.min.css"></style>
<style src="../../vendors/simple-line-icons/css/simple-line-icons.css"></style>
<style src="../../assets/css/custom_css/user_profile.css" scoped></style>
