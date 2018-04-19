<template>
  <div>
        <div class="wizard-navigation">
            <div class="nav-content" v-for='(item,idx) in arr'  :key='idx'>{{item}}</div>
            <div class="move-nav" :style='{left:left+"px"}' >{{arr[isActive-1]}}</div>
        </div>
        <div class="wizard-content">
            <div v-if='isActive==1' class="first-step">
                <div class="left">
                  <h4 class="title">
                    行业
                  </h4>
                  <div :class="['choose',chooseIdx === 0 ? 'active' : '']" @click='changeChoose(0)'>
                      <div class="icon">
														<i class="material-icons">home</i>
                      </div>
                      <h5>家具</h5>
                  </div>
                  <div :class="['choose',chooseIdx === 1 ? 'active' : '']" @click='changeChoose(1)'>
                      <div class="icon">
														<i class="material-icons">build</i>
											</div>
											<h5 class="">五金</h5>
                  </div>
                  <div :class="['choose',chooseIdx === 2 ? 'active' : '']" @click='changeChoose(2)'>
                    <div class="icon">
												<i class="material-icons">directions_car</i>
										</div>
										<h5 class="">汽车</h5>
                  </div>
                  <div :class="['choose',chooseIdx === 3 ? 'active' : '']" @click='changeChoose(3)'>
                    <div class="icon">
												<i class="material-icons">flash_on</i>
										</div>
										<h5 class="">电力</h5>
                  </div>
                </div>
                <div class="right">
                  <h4 class="title">
                    场景
                  </h4>
                  <transition
                    appear
                   :duration="{ enter: 1000}"
                    name="custom-classes-transition"
                    enter-active-class="animated bounceInUp"
                    appear-active-class="animated bounceInUp"
                  >
                    <div class="choose1 choose-content " v-if="choose===0">
                        <div :class="[item===0?'active':'']"  @click="itemChange(0)">
                          <p>箱体</p>
                        </div>
                        <div :class="[item===1?'active':'']"  @click="itemChange(1)">
                          <p>打印机体盒</p>
                        </div>
                    </div>
                  </transition>
                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animated bounceInUp"
                  >
                    <div class="choose2 choose-content" v-if="choose===1">
                        <div :class="[item===0?'active':'']"  @click="itemChange(0)">
                          <p>箱体</p>
                        </div>
                        <div :class="[item===1?'active':'']"  @click="itemChange(1)">
                          <p>打印机体盒</p>
                        </div>
                        <div :class="[item===2?'active':'']"  @click="itemChange(2)">
                          <p>支架</p>
                        </div>
                    </div>
                  </transition>
                </div>
            </div>
            <div v-if='isActive==2' class="second-step" id='second-step'> 
										<div>
											<div class="form-group label-floating">
												<label :class="['control-label',material.isFocus?'' :'noActive']">*母材成分
													<span id="materialError" :class="['errorSpan',material.materialValueEmpty?'':'hidden']">该项不能为空</span>
												</label>
												<select 
                            class="form-control" 
                            v-model="material.value" 
                            id="material" 
                            @blur='changeLabel2("material")' 
                            @click='changeLabel("material")'>
										      <option disabled="disabled" selected="selected"></option>
													<option value="铁">铁</option>
													<option value="碳钢">碳钢</option>
													<option value="不锈钢">不锈钢</option>
													<option value="铝">铝</option>
													<option value="其他">其他</option>
												</select>
                        <div class="line"></div>
											</div>
										</div>
										<div>
											<div class="form-group label-floating">
												<label :class="['control-label',shape.isFocus?'' :'noActive']">产品形状</label>
												<select 
                            class="form-control" 
                            v-model="shape.value"
                            @click='changeLabel("shape")' 
                            @blur='changeLabel2("shape")' >
									      	<option disabled="disabled" selected="selected"></option>
													<option value="长方形">长方形</option>
													<option value="正方形">正方形</option>
													<option value="菱形">菱形</option>
													<option value="圆形">圆形</option>
													<option value="梯形">梯形</option>
													<option value="其他">其他</option>
												</select>
                        <div class="line"></div>
											</div>
										</div>
										<div>
											<div class="thickness">
												<div class="form-group label-floating">
													<label :class="['control-label',thickness.isFocus?'' :'noActive']" id="thicknessLabel">*板厚（管直径及壁厚/mm）
														<span id="thicknessError" :class="['errorSpan',thickness.thicknessValueEmpty?'':'hidden']">该项不能为空</span>
													</label>
													<input type="text" class="form-control" id="thickness" v-model="thickness.value" @click='changeLabel("thickness")' @blur='changeLabel2("thickness")'>
                          <div class="line"></div>
												</div>
											</div>
										</div>
										<div>
											<div class="form-group label-floating">
												<label :class="['control-label',connector.isFocus?'' :'noActive']">接头形式</label>
												<select class="form-control" v-model="connector.value" @click='changeLabel("connector")' @blur='changeLabel2("connector")'>
										      <option disabled="disabled" selected="selected"></option>
													<option value="塔接">塔接</option>
													<option value="对接">对接</option>
													<option value="角接">角接</option>
													<option value="T字接">T字接</option>
													<option value="其他">其他</option>
												</select>
                        <div class="line"></div>
											</div>
										</div>
										<div>
											<div class="form-group label-floating">
												<label :class="['control-label',weldingSize.isFocus?'' :'noActive']">焊接尺寸（mm）</label>
												<input type="text" class="form-control" id="weldingSize" v-model="weldingSize.value" @click="changeLabel('weldingSize')" @blur='changeLabel2("weldingSize")' />
                        <div class="line"></div>
											</div>
										</div>
            </div>
            <div v-if='isActive==3' class="third-step">
              <ul>
                <li>
                  <label class="control-label">飞溅</label>
                  <select class="form-control valid" aria-invalid="false" v-model='splash'>
										<option disabled="disabled" selected="selected"></option>
                    <option value="少">少</option> 
                    <option value="中">中</option> 
                    <option value="多">多</option> 
                    <option value="无" selected="selected">无</option>
                  </select>
                  <div class="line"></div>
                </li>
                <li>
                  <label class="control-label">焊缝质量</label>
                  <select class="form-control valid" aria-invalid="false" v-model='weld'>
										<option disabled="disabled" selected="selected"></option>
                    <option value="低">低</option> 
                    <option value="中">中</option> 
                    <option value="高">高</option> 
                    <option value="无" selected="selected">无</option>
                  </select>
                  <div class="line"></div>
                </li>
                <li >
                  <label class="control-label">外观要求</label>
                  <select class="form-control valid" aria-invalid="false" v-model='appearance'>
										<option disabled="disabled" selected="selected"></option>
                    <option value="低">低</option> 
                    <option value="中">中</option> 
                    <option value="高">高</option> 
                    <option value="无" selected="selected">无</option>
                  </select>
                  <div class="line"></div>
                </li>
                <li>
                  <label class="control-label">精度要求</label>
                  <select class="form-control valid" aria-invalid="false" v-model='accuracy'>
										<option disabled="disabled" selected="selected"></option>
                    <option value="低">低</option> 
                    <option value="中">中</option> 
                    <option value="高">高</option> 
                    <option value="无" selected="selected">无</option>
                  </select>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
            <div v-if='isActive==4' class="fourth-step">
              <div class="tab-pane" id="fourthStep">
									<div class="row">
										<div class="col-sm-4 col-sm-offset-1">
											<h4 class="title">
												<i class="material-icons">store</i>行业&场景</h4>
											<div class="form-label">
												<label>行业：</label>
												<span>{{industry[chooseIdx]}}</span>
											</div>
											<div class="form-label">
												<label>场景：</label>
												<span>{{scence[item]}}</span>
											</div>
										</div>
										<div class="col-sm-4 col-sm-offset-1">
											<h4 class="title">
												<i class="material-icons">view_list</i>产品属性</h4>
											<div class="form-label">
												<label>母材成分：</label>
												<span>{{material.value}}</span>
											</div>
											<div class="form-label">
												<label>产品形状：</label>
												<span>{{shape.value}}</span>
											</div>
											<div class="form-label">
												<label>板厚(mm)：</label>
												<span>{{thickness.value}}</span>
											</div>
											<div class="form-label">
												<label>接头形状：</label>
												<span>{{connector.value}}</span>
											</div>
											<div class="form-label">
												<label>焊接尺寸(mm)：</label>
												<span>{{weldingSize.value}}</span>
											</div>
										</div>
										<div class="col-sm-4 col-sm-offset-1">
											<h4 class="title">
												<i class="material-icons">device_hub</i>工艺要求</h4>
											<div class="form-label">
												<label>飞溅：</label>
												<span>{{splash}}</span>
											</div>
											<div class="form-label">
												<label>焊缝质量：</label>
												<span>{{weld}}</span>
											</div>
											<div class="form-label">
												<label>外观要求：</label>
												<span>{{appearance}}</span>
											</div>
											<div class="form-label">
												<label>精度要求：</label>
												<span>{{accuracy}}</span>
											</div>
										</div>
									</div>
								</div>
            </div>
        </div>
        <div class="wizard-footer">
            <div class='prev' v-if="isActive!=1" @click="tabChange(-1)">
                上一步
            </div>
            <div class='next' @click="tabChange(1)">
                {{msg}}
            </div>
        </div>
  </div>
</template>


<script>
export default {
  name: "stepTable",
  data() {
    return {
      isActive: 1,
      isShow: false,
      left: -8,
      arr: ["1、行业场景", "2、产品属性", "3、工艺要求", "4、方案确认"],
      msg: "下一步",
      chooseIdx: 0,
      industry: ["家具", "五金", "汽车", "电力"],
      choose: 0,
      item: 0,
      scence: ["箱体", "打印机体盒", "支架"],
      // 第二步数据
      material: { value: "", isFocus: false, materialValueEmpty: false },
      shape: { value: "", isFocus: false },
      thickness: { value: "", isFocus: false, thicknessValueEmpty: false },
      connector: { value: "", isFocus: false },
      weldingSize: { value: "", isFocus: false },
      // 第三步数据
      splash: "无",
      weld: "无",
      appearance: "无",
      accuracy: "无",
      boo: false
    };
  },
  watch: {
    isActive: function() {
      if (this.isActive > 3) {
        this.msg = "提交";
      } else {
        this.msg = "下一步";
      }
    },
    chooseIdx: function(val) {
      if (val > 1) {
        this.item = 3;
      }
    },
    material: {
      handler: function(val) {
        if (val.value !== "") {
          val.materialValueEmpty = false;
        }
      },
      deep: true
    },
    thickness: {
      handler: function(val) {
        if (val.value !== "" ) {
          val.thicknessValueEmpty = false;
        }
        if(!(/^[0-9.]*$/.test(val.value))){
          val.value=''
        }
      },
      deep: true
    },
    weldingSize:{
       handler: function(val) {
        if(!(/^[0-9.]*$/.test(val.value))){
          val.value=''
        }
      },
      deep: true
    }
  },
  methods: {
    // 步骤改变
    tabChange(step) {
      // 判断第二步两个必选项是否有值
      if (!(this.isActive > 3 && step > 0)) {
        if (
          this.material.value == "" &&
          this.thickness.value == "" &&
          this.isActive === 2 &&
          step > 0
        ) {
          this.material.materialValueEmpty = true;
          this.thickness.thicknessValueEmpty = true;
        } else if (
          this.material.value == "" &&
          this.isActive === 2 &&
          step > 0
        ) {
          this.material.materialValueEmpty = true;
        } else if (
          this.thickness.value == "" &&
          this.isActive === 2 &&
          step > 0
        ) {
          this.thickness.thicknessValueEmpty = true;
        } else {
          this.material.materialValueEmpty = false;
          this.thickness.thicknessValueEmpty = false;
          this.isActive += step;
          this.left += 263 * step;
        }
      }
      // 提交
      if (this.msg == "提交" && step>0) {
        this.$alert("这是一段内容", "标题名称", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
        const h = this.$createElement;
        this.$msgbox({
          message: `<div class='warn-box' >
                      <div class='warn-img-box'></div>  
                      <h1>暂无符合条件方案</h1>
                      <p>是否发布新的需求？</p> 
                    </div>`,
          showCancelButton: true,
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          center: false,
          dangerouslyUseHTMLString: true
        }).then(action => {
          window.location = "http://dect.robo2025.com/";
        });
      }
    },
    // 行业选项改变
    changeChoose(choose) {
      this.chooseIdx = choose;
      this.choose = choose;
    },
    // 场景内容变化
    itemChange(idx) {
      this.item = idx;
    },
    // label的上下移动
    changeLabel(boo) {
      this[boo].isFocus = true;
    },
    changeLabel2(boo) {
      if (this[boo].value === "") {
        this[boo].isFocus = false;
      }
    }
  }
};
</script>


<style lang="less" scoped>
@import "../../../assets/stepList/css/material-bootstrap-wizard.css";
@import "../../../assets/stepList/css/bootstrap.css";
@import "../../../assets/stepList/fonts/fonts.css";
@import "../../../assets/stepList/css/index.css";
@import url("https://cdn.bootcss.com/animate.css/3.5.1/animate.min.css");

@baseColor: #0275d8;
@fontSize: 1/16rem;
* {
  padding: 0;
  margin: 0;
}
div,
p {
  box-sizing: border-box;
}
.wizard-navigation {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: rgba(200, 200, 200, 0.2);
  line-height: 40px;
  position: relative;
  font-size: 12px;
  .nav-content {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .move-nav {
    position: absolute;
    width: 260.25px;
    text-align: center;
    padding: 3px;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    top: -4px;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-weight: 500;
    background-color: #3284d8;
    transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
    box-shadow: 0 16px 26px -10px rgba(34, 103, 152, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(34, 103, 152, 0.2);
  }
}
.wizard-content {
  width: 100%;
  height: 380px;
  padding: 30px 15px;
  box-sizing: border-box;
  select.form-control:focus {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
  }
  select:focus + .line {
    width: 400px;
  }
  input.form-control:focus {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
  }
  .line {
    width: 0;
    height: 2px;
    background-color: @baseColor;
    margin: 0 auto;
    position: absolute;
    top: 98px;
    left: 0px;
    right: 0px;
    transition: width 0.2s linear;
  }
  li {
    float: left;
    padding: 0 15px 0;
    height: 90px;
    width: 50%;
    position: relative;
  }
  .first-step {
    width: 100%;
    height: 100%;
    .title {
      padding: 0 15px 15px;
      margin: 10px 0;
      border-bottom: 2px solid @baseColor;
      font-weight: 700;
    }
    .left {
      width: 40%;
      height: 100%;
      float: left;
      .choose {
        width: 50%;
        height: 126px;
        float: left;
        padding: 0 15px;
        box-sizing: border-box;
        margin: 27px 0 0 0;
        cursor: pointer;
        .icon {
          width: 64px;
          height: 64px;
          border: 4px solid #ccc;
          border-radius: 50%;
          float: left;
          text-align: center;
          vertical-align: middle;
          color: #999999;
          margin: 0 auto 20px;
          transition: all 0.2s;
          -webkit-transition: all 0.2s;
          i {
            font-size: 26px;
            line-height: 58px;
          }
        }
        h5 {
          float: left;
          height: 64px;
          line-height: 64px;
          padding-left: 20px;
          font-size: 1.05rem;
        }
      }
      .choose.active {
        .icon {
          border-color: @baseColor;
          color: @baseColor;
        }
        h5 {
          color: @baseColor;
        }
      }
      .choose:hover {
        .icon {
          border-color: @baseColor;
          color: @baseColor;
        }
        h5 {
          color: @baseColor;
        }
      }
    }
    .right {
      width: 40%;
      height: 100%;
      float: right;
      .choose-content {
        width: 100%;
        div {
          width: 50%;
          float: left;
          padding: 20px 15px 0;
          cursor: pointer;
          p {
            border: 4px solid #ccc;
            color: #999;
            height: 50px;
            text-align: center;
            line-height: 45px;
            font-size: 0.9rem;
            transition: all 0.2s;
            -webkit-transition: all 0.2s;
          }
        }
        div:hover p {
          border-color: @baseColor;
          color: @baseColor;
        }
        div.active p {
          border-color: @baseColor;
          color: @baseColor;
        }
      }
    }
  }
  .second-step {
    width: 100%;
    height: 100%;
    padding: 0 85px;
    > div {
      float: left;
      width: 50%;
      padding: 0 10px;
      position: relative;
    }
    .line {
      top: 43px;
    }
    label.noActive {
      top: 0 !important;
      font-size: 14px !important;
    }
    input {
      height: 48px;
    }
    input + .line {
      top: 45px;
    }
    input:focus + .line {
      width: 400px;
    }
  }
  .third-step {
    width: 100%;
    height: 100%;
    padding: 0 85px;
    .line {
      top: 72px;
    }
    select:focus + .line {
      width: 396px;
    }
  }
  .fourth-step {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    .col-sm-4 {
      padding-left: 70px;
      .title {
        border-bottom: 2px solid @baseColor;
        padding-bottom: 15px;
      }
    }
  }
}
.wizard-footer {
  width: 100%;
  height: 60px;
  padding: 0 15px;
  box-sizing: border-box;
  div {
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: @baseColor;
    border-radius: 3px;
    cursor: pointer;
  }
  div.prev {
    float: left;
    background: #ccc;
  }
  div.next {
    float: right;
  }
}
</style>



