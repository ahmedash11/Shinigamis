<template>
<div class="contactUsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Contact Us</h2>
      </header>


      <div class="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-home" aria-hidden="true"></i> Headquarter Address</h3>
              </td>
              <td><input type="text" name="address" v-model="info.address"></td>
              <td><a v-on:click="updateContactUs()" class="button special">Update</a></td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i> Email</h3></td>
              <td><input type="text" name="address" v-model="info.email"></td>
              <td><a v-on:click="updateContactUs()" class="button special">Update</a></td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-phone-alt" aria-hidden="true"></i> Phone</h3>
                <td>
                  <div v-for="phone in info.phone">
                    {{phone}}
                    <br>
                  </div>
                </td>
                <td> <button data-toggle="modal" data-target="#editPhone" class="button special">Edit</button> </td>
            </tr>
            <tr>
              <td>
                <h3><i class="fa fa-mobile fa-2x" aria-hidden="true"></i> Mobile</h3>
                <td>
                  <div v-for="mobile in info.mobile">
                    {{mobile}}
                  </div>
                </td>
                <td> <button data-toggle="modal" data-target="#editMobile" class="button special">Edit</button> </td>
            </tr>
            <tr>
              <td>
                <h3><i class="fa fa-fax " aria-hidden="true"></i> Fax</h3>
                <td>
                  <div v-for="fax in info.fax">
                    {{fax}}
                    <br>
                  </div>
                </td>
                <td> <button data-toggle="modal" data-target="#editFax" class="button special">Edit</button> </td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-user" aria-hidden="true"></i> Contact Persons</h3></td>
              <td>
                <div v-for="contactPerson in info.contactsPersons">
                  {{contactPerson}}
                  <br>
                </div>
              </td>
              <td> <button data-toggle="modal" data-target="#editContactPerson" class="button special">Edit</button> </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="editPhone" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Phone</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addPhone()" role="form" style="display: block;">
                  <table>
                    <thead>
                      <tr>
                        <th>Phone</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="phone in info.phone">
                        <td>{{phone}}</td>
                        <td><a v-on:click="deletePhone(phone)" class="button special">Delete</a></td>
                      </tr>
                      <td><input type="text" name="phone" v-model="phone" required></td>
                      <td><button class="button special">+</button></td>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="editMobile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Mobile</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addMobile()" role="form" style="display: block;">
                  <table>
                    <thead>
                      <tr>
                        <th>Mobile</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="mobile in info.mobile">
                        <td>{{mobile}}</td>
                        <td><a v-on:click="deleteMobile(mobile)" class="button special">Delete</a></td>
                      </tr>
                      <td><input type="text" name="mobile" v-model="mobile" required></td>
                      <td><button class="button special">+</button></td>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="editFax" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Fax</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addFax()" role="form" style="display: block;">
                  <table>
                    <thead>
                      <tr>
                        <th>Fax</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="fax in info.fax">
                        <td>{{fax}}</td>
                        <td><a v-on:click="deleteFax(fax)" class="button special">Delete</a></td>
                      </tr>
                      <td><input type="text" name="fax" v-model="fax" required></td>
                      <td><button class="button special">+</button></td>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="editContactPerson" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Contact Persons</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addContactPerson()" role="form" style="display: block;">
                  <table>
                    <thead>
                      <tr>
                        <th>Contact Person</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="contactPerson in info.contactsPersons">
                        <td>{{contactPerson}}</td>
                        <td><a v-on:click="deleteContactPerson(contactPerson)" class="button special">Delete</a></td>
                      </tr>
                      <td><input type="text" name="contactPerson" v-model="contactPerson" required></td>
                      <td><button class="button special">+</button></td>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'contactUsAdmin',
  data() {
    return {
      info: {},
      phone: '',
      mobile: '',
      fax: '',
      contactPerson: ''
    }
  },
  created() {
    this.fetchInfo()

  },
  methods: {
    fetchInfo: function() {
      this.$http.get(env.URL + '/user/getInfo').then(response => {
        this.info = response.data.data.info
      })
    },
    updateContactUs: function() {
      this.$http.post(env.URL + '/admin/updateContactUs', this.info, {
        headers: auth.getAuthHeader()
      }).then(response => {
        alertify.notify(response.body.msg, 'success', 5);
        this.fetchInfo()
      }).catch(error => {
        if (error.body.msg instanceof String || typeof error.body.msg === "string") {
          swal(
            'Oops...',
            error.body.msg,
            'error'
          );
        } else {
          for (var i = 0; i < error.body.msg.length; i++) {
            var msg = error.body.msg[i].msg
            alertify.notify(msg, 'error', 5);
          }
        }
      })
    },
    addPhone: function() {
      var phones = this.info.phone
      if (phones.indexOf(this.phone) == -1) {
        this.info.phone.push(this.phone)
        this.phone = ''
        this.updateContactUs()
      } else {
        alertify.notify("Duplicate number", 'error', 5);
      }
    },
    deletePhone: function(phone) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        var phones = this.info.phone
        var index = phones.indexOf(phone)
        this.info.phone.splice(index, 1)
        this.updateContactUs()
      }, (dismiss) => {})
    },
    addMobile: function() {
      var mobiles = this.info.mobile
      if (mobiles.indexOf(this.mobile) == -1) {
        this.info.mobile.push(this.mobile)
        this.mobile = ''
        this.updateContactUs()
      } else {
        alertify.notify("Duplicate number", 'error', 5);
      }
    },
    deleteMobile: function(mobile) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        var mobiles = this.info.mobile
        var index = mobiles.indexOf(mobile)
        this.info.mobile.splice(index, 1)
        this.updateContactUs()
      }, (dismiss) => {})
    },
    addFax: function() {
      var faxes = this.info.fax
      if (faxes.indexOf(this.fax) == -1) {
        this.info.fax.push(this.fax)
        this.fax = ''
        this.updateContactUs()
      } else {
        alertify.notify("Duplicate number", 'error', 5);
      }
    },
    deleteFax: function(fax) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        var faxes = this.info.fax
        var index = faxes.indexOf(fax)
        this.info.fax.splice(index, 1)
        this.updateContactUs()
      }, (dismiss) => {})
    },
    addContactPerson: function() {
      var contactPersons = this.info.contactsPersons
      if (contactPersons.indexOf(this.contactPerson) == -1) {
        this.info.contactsPersons.push(this.contactPerson)
        this.contactPerson = ''
        this.updateContactUs()
      } else {
        alertify.notify("Duplicate name", 'error', 5);
      }
    },
    deleteContactPerson: function(contactPerson) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        var contactPersons = this.info.contactsPersons
        var index = contactPersons.indexOf(contactPerson)
        this.info.contactsPersons.splice(index, 1)
        this.updateContactUs()
      }, (dismiss) => {})
    }
  }
}
</script>

<style scoped>
.modal-content {
  position: relative;
  background-color: #1c1d26;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}

article.special, section.special {
    text-align: left; 
    padding-left: 2.55em;
}

h3{
text-align: center;
}
</style>
