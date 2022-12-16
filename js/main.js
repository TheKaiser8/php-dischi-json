const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
    };
  },
  created() {
    axios.get("http://localhost/php-dischi-json/api.php").then((response) => {
      this.disks = response.data;
    });
  },
}).mount("#app");
