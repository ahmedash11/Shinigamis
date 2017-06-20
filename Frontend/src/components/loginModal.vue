<template>
<modal :show.sync="show" :on-close="close">
  <div class="modal-header">
    <h3>Sign In</h3>
  </div>

  <div class="modal-body">
    <div class="row uniform 50%">
      <div class="6u 12u$(xsmall)">
        <input type="text" name="email" id="email" value="" placeholder="Email" v-model="email" />
      </div>
      <div class="6u$ 12u$(xsmall)">
        <input type="password" name="password" id="password" value="" placeholder="Password" v-model="password" />
      </div>
      <div class="12u$">
        <input type="submit" value="Sign In" class="special" @click="login" />
      </div>
    </div>
  </div>
</modal>
</template>

<script>
import env from '../env'
import auth from '../auth'
import Modal from './modal'
export default {
  name: 'loginModal',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  props: ['show'],
  methods: {
    close: function() {
      this.$emit('update:show', false);
      this.email = '';
      this.password = '';
    },
    login: function() {
      this.$http.post(env.URL + '/admin/authenticate', {
        email: this.email,
        password: this.password
      }).then((response) => {
        if (response.body.success) {
          let data = {
            token: response.body.data.token,
            admin: JSON.stringify(response.body.data.admin)
          }
          auth.login(data)
          this.close();
        } else {
          this.error = response.body.msg
        }
      })
    }
  },
  components: {
    Modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container {
  width: 300px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label>.form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
