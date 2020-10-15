let vm = Vue.createApp({
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async getBooks() {
      let result = await axios.get("/books");
      return result.data;
    },
  },
  created: function () {
    //设置url
    axios.defaults.baseURL = "http://localhost:3000";
    this.getBooks().then((result) => {
      // console.log(result[0].date);
      // console.log(dayjs(result[0].date).format("YYYY-MM-DD hh:mm:ss"));
      // 时间转换
      result.forEach((element) => {
        element.date = dayjs(element.date).format("YYYY-MM-DD hh:mm:ss");
      });
      this.books = result;
    });
  },
});

vm.mount("#app");

