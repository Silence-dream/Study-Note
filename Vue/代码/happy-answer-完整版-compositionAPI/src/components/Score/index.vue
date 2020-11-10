<template>
  <div class="score_container">
    <!-- 分数和提示语 -->
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{ score }}</span>
        <span class="fenshu">分!</span>
      </header>
      <div class="result_tip">{{ scoreTips }}</div>
    </div>

    <div class="share_button" @click="showCover"></div>

    <div class="share_code">
      <header class="share_header">关注葡萄之家,获取答案.</header>
      <img src="/images/4-4.png" height="212" class="code_img" alt="" />
    </div>

    <div class="share_cover" v-show="showHide" @click="showCover">
      <img class="share_img" src="/images/5-2.png" alt="" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      // showHide: false, //是否显示提示
      // score: 0, //分数
      // scoreTips: "", //分数提示
      // rightAnswer: [2, 7, 12, 13, 18], //正确答案
      // scoreTipsArr: [
      //   "你说，是不是把知识都还给小学老师了？",
      //   "还不错，但还需要继续加油哦！",
      //   "不要嘚瑟还有进步的空间！",
      //   "智商离爆表只差一步了！",
      //   "你也太聪明啦，葡萄之家欢迎你！"
      // ]
    };
  },
  setup() {
    //#region  变量声明
    // /是否显示提示
    let showHide = ref(false);
    //分数
    let score = ref(0);
    //分数提示
    let scoreTips = ref("");
    //正确答案
    let rightAnswer = reactive([2, 7, 12, 13, 18]);
    let scoreTipsArr = reactive([
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，葡萄之家欢迎你！"
    ]);
    //#endregion

    // 把vuex里面的方法放到前面
    let store = useStore();

    //#region created()
    // 刚进入分数页面 显示分数
    calc();
    //  显示提示语
    getScoreTips();
    //#endregion

    //#region methodes 计算分数calc
    // 计算分数

    function calc() {
      // 遍历anwserId数组 取出用户选择的答案
      store.state.anwserId.forEach((item, index) => {
        // 判断用户选择的答案是否和正确答案一致,如果一致,那么加20分
        if (item == store.state.rightAnswer[index]) {
          store.state.score += 20;
        }
      });
    }
    //#endregion

    //#region methodes getScoreTips根据分数判断对应的提示语
    function getScoreTips() {
      if (score.value <= 20) {
        scoreTips.value = scoreTipsArr[0];
        return;
      }
      if (score.value <= 40) {
        scoreTips.value = scoreTipsArr[1];
        return;
      }
      if (score.value <= 60) {
        scoreTips.value = scoreTipsArr[2];
        return;
      }
      if (score.value <= 80) {
        scoreTips.value = scoreTipsArr[3];
        return;
      }
      if (score.value <= 100) {
        scoreTips.value = scoreTipsArr[4];
        return;
      }
    }
    //#endregion

    //#region methodes showCover 控制遮罩的显示和隐藏
    let showCover = function() {
      showHide.value = !showHide.value;
    };

    //#endregion

    //#region computed 计算id
    let anwserId = computed(() => store.state.anwserId);

    //#endregion

    //#region 返回
    return {
      showHide,
      score,
      scoreTips,
      rightAnswer,
      scoreTipsArr,
      showCover,
      anwserId
    };
    //#endregion
  }
  // computed: {
  //   ...mapState(["anwserId"])
  // }
  // created() {
  //   // // 刚进入分数页面 显示分数
  //   // this.calc();
  //   // //  显示提示语
  //   // this.getScoreTips();
  // }
  // methods: {
  //   // 计算分数
  //   // calc() {
  //   //   // 遍历anwserId数组 取出用户选择的答案
  //   //   this.anwserId.forEach((item, index) => {
  //   //     // 判断用户选择的答案是否和正确答案一致,如果一致,那么加20分
  //   //     if (item == this.rightAnswer[index]) {
  //   //       this.score += 20;
  //   //     }
  //   //   });
  //   // },
  //   // 根据分数判断对应的提示语
  //   // getScoreTips() {
  //   //   if (this.score <= 20) {
  //   //     this.scoreTips = this.scoreTipsArr[0];
  //   //     return;
  //   //   }
  //   //   if (this.score <= 40) {
  //   //     this.scoreTips = this.scoreTipsArr[1];
  //   //     return;
  //   //   }
  //   //   if (this.score <= 60) {
  //   //     this.scoreTips = this.scoreTipsArr[2];
  //   //     return;
  //   //   }
  //   //   if (this.score <= 80) {
  //   //     this.scoreTips = this.scoreTipsArr[3];
  //   //     return;
  //   //   }
  //   //   if (this.score <= 100) {
  //   //     this.scoreTips = this.scoreTipsArr[4];
  //   //     return;
  //   //   }
  //   // },
  //   // 控制遮罩的显示和隐藏
  //   // showCover() {
  //   //   this.showHide = !this.showHide;
  //   // }
  // }
};
</script>

<style lang="scss" scoped>
.score_container {
  height: 100%;
  background-image: url("/images/4-1.jpg");
}
// body {
//   background-image: url("/images/4-1.jpg");
//   padding-top: 1.2rem;
// }
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url("/images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url("/images/4-3.png") no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("/images/5-1.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
