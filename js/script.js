const { createApp } = Vue

createApp({
  data() {
    return {
        emailList: []
    }
  },

  mounted () {
    for(i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {

            console.log('mail della lista: ', resp.data.response);

            this.emailList.push(resp.data.response)
        });
    }
  }
}).mount('#app')