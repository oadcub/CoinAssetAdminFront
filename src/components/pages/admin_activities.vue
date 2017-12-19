<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Admin Activity" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="Admin Activity" :rows="tableData" :columns="columndata"></datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import datatable from "../plugins/DataTable/DataTable.vue";
    export default {
        name: "admin_list",
        components: {
            datatable
        },
        data() {
            return {
                tableData: [],
                columndata: [{
                    label: 'ID',
                    field: 'id',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Name',
                    field: 'name',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Email',
                    field: 'email',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Role',
                    field: 'role',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Status',
                    field: 'status',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Activities',
                    field: 'action',
                    numeric: false,
                    html: true,
                }]
            }
        },
        mounted() {
            this.tableData = [{
                "id": "Stuff01",
                "name": "Kassaundra Shiffman",
                "email": "LStruble@tempor.com",
                "age": 22,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Manager01",
                "name": "Helena Zensen",
                "email": "BTrautman@magna.com",
                "age": 33,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Manager"
            }, {
                "id": "Stuff02",
                "name": "Gautam Nye",
                "email": "SThomad@turpis.ly",
                "age": 35,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff03",
                "name": "Wichaya Wagner",
                "email": "NLindsay@odio.org",
                "age": 55,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Owner01",
                "name": "Dawn Devereaux",
                "email": "NStair@ipsum.net",
                "age": 51,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Owner"
            }, {
                "id": "Stuff04",
                "name": "Marcus Wray",
                "email": "SPointelin@amet.com",
                "age": 23,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff05",
                "name": "Freddy Meng",
                "email": "SEtheridge@non.ly",
                "age": 32,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff06",
                "name": "Culveretta Gilberto",
                "email": "SGlynn@tempor.com",
                "age": 58,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff07",
                "name": "Rogelio Martin",
                "email": "BVollrath@at.io",
                "age": 50,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff08",
                "name": "Suwanto Boyes",
                "email": "THeppelmann@molestie.net",
                "age": 36,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff09",
                "name": "Felicia Kiab",
                "email": "JDauk@tincidunt.org",
                "age": 27,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff10",
                "name": "Dwayne Mawyer",
                "email": "AAlagisan@sed.gov",
                "age": 26,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff11",
                "name": "Braulio Nixon",
                "email": "SDavid@risus.net",
                "age": 36,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff12",
                "name": "Kantanzia Bottone",
                "email": "JHesters@porttitor.net",
                "age": 33,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff13",
                "name": "Geraldine Arnold",
                "email": "DTabor@amet.gov",
                "age": 45,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff14",
                "name": "Chun Pfeifer",
                "email": "BAnglin@molestie.io",
                "age": 44,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff15",
                "name": "Felix Brinkley",
                "email": "CJalowiecki@ac.ly",
                "age": 28,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff16",
                "name": "Kay Espinosa",
                "email": "JStufford@sit.net",
                "age": 22,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff17",
                "name": "Clayton Hammant",
                "email": "SParham@rutrum.gov",
                "age": 60,
                "status": "<span class='badge badge-success'>Active</span>",
                "role": "Stuff"
            }, {
                "id": "Stuff18",
                "name": "Kendra Schuessler",
                "email": "JGray@porta.ly",
                "age": 33,
                "status": "<span class='badge badge-danger'>Inactive</span>",
                "role": "Stuff"
            }]

            this.tableData.forEach((item, index) => {
                this.$set(item, "action", "<a class='btn btn-info' href='#/admin_activity'>Show</a>");
            });
        }
    }
</script>
