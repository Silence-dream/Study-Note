<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="questions.length > 0">
          <!-- 题干 -->
          <header class="item_title">{{ itemTitle }}</header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in questions[itemNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="choosed(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: chooseNum == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        v-if="itemNum < questions.length"
        @click="nextItem"
      ></span>
      <!-- 提交按钮 -->
      <span
        class="submit_item button_style"
        @click="submitAnswer"
        v-else
      ></span>
    </section>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      // // 答案的索引
      // chooseNum: null,
      // // topic_answer_id 答案id 在整套数据中是唯一的
      // chooseId: null
    };
  },
  setup() {
    // console.log(1);
    let store = useStore();
    // 替换created()
    store.dispatch("getData");

    //#region 改写choose函数 让li选中
    //答案的索引
    let chooseNum = ref(null);
    // topic_answer_id 答案id 在整套数据中是唯一的
    let chooseId = ref(null);
    let choosed = function(index, id) {
      chooseNum.value = index;
      chooseId.value = id;
      // console.log(index, id);
    };
    //#endregion

    //#region  下一个题目
    let nextItem = function() {
      // 判断用户是否选择 如果选择 那么就把选择的id传递到vuex
      if (chooseNum.value != null) {
        chooseNum.value = null;
        // 把chooseId传给addNum
        store.dispatch("addNum", chooseId.value);
      } else {
        // 如果没有选择 提示用户  你还没有选择答案
        alert("你还没有选择答案");
      }
    };
    //#endregion

    //#region submitAnswer()改写提交答案
    let router = useRouter();
    let submitAnswer = function() {
      // 判断用户是否选择 如果选择 那么就把选择的id传递到vuex
      if (chooseNum.value != null) {
        chooseNum.value = null;
        // 把chooseId传给addNum
        store.dispatch("addNum", chooseId.value);
        router.push("/score");
      } else {
        // 如果没有选择 提示用户  你还没有选择答案
        alert("你还没有选择答案");
      }
    };
    //#endregion

    //#region    改写mapState(["itemNum", "questions"]),
    let itemNum = computed(() => store.state.itemNum);
    let questions = computed(() => store.state.questions);
    //#endregion

    //#region   渲染题干改写
    let itemTitle = computed(() => {
      return store.state.questions[store.state.itemNum - 1].topic_name;
    });

    //#endregion
    return {
      choosed,
      chooseNum,
      chooseId,
      nextItem,
      submitAnswer,
      itemNum,
      questions,
      itemTitle
    };
  },
  // created() {
  //   this.$store.dispatch("getData");
  // },

  methods: {
    // 让li选中
    // choosed(index, id) {
    //   this.chooseNum = index;
    //   this.chooseId = id;
    // },
    // 点击 下一个题目
    // nextItem() {
    //   // 判断用户是否选择 如果选择 那么就把选择的id传递到vuex
    //   if (this.chooseNum != null) {
    //     this.chooseNum = null;
    //     // 把chooseId传给addNum
    //     this.$store.dispatch("addNum", this.chooseId);
    //   } else {
    //     // 如果没有选择 提示用户  你还没有选择答案
    //     alert("你还没有选择答案");
    //   }
    // },
    // 提交答案
    // submitAnswer() {
    //   // 判断用户是否选择 如果选择 那么就把选择的id传递到vuex
    //   if (this.chooseNum != null) {
    //     this.chooseNum = null;
    //     // 把chooseId传给addNum
    //     this.$store.dispatch("addNum", this.chooseId);
    //     this.$router.push("/score");
    //   } else {
    //     // 如果没有选择 提示用户  你还没有选择答案
    //     alert("你还没有选择答案");
    //   }
    // }
  },
  computed: {
    // ...mapState(["itemNum", "questions"]),
    // 渲染题干
    // itemTitle() {
    //   return this.questions[this.itemNum - 1].topic_name;
    // }
  }
};
</script>

<style lang="scss">
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
