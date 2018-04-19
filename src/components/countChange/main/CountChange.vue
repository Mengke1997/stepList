<template>
   <div style="position:relative">
        <el-input-number  v-model="num" @change="handleChange" :min="minCount" :max="maxCount"></el-input-number>
        <div class="warning" v-if="tipDisplay"><span class="el-icon-warning"></span>{{tipMessage}}</div>
   </div>
</template>
<script>
  export default {
    props:['min','max'],
    data() {
      return {
        num:0,
        minCount:0,
        maxCount: 0,
        tipMessage:'',
        tipDisplay:false
      };
    },
    created(){
        this.num = this.min;
        this.minCount = this.min;
        this.maxCount = this.max;
        
    },
    mounted(){
    },
    methods: {
      handleChange(value) {
        this.tipDisplay = false;
        if(value <= this.minCount) {
            this.tipDisplay = true;
            this.tipMessage = "起订量：" + this.minCount;
        }
        if(value >= this.maxCount) {
            this.tipDisplay = true;
            this.tipMessage = "库存：" + this.maxCount;
        }
      }
    },
    watch:{
        min:function (newvalue, oldvalue) {
            console.log(newvalue);
            this.num = newvalue;
            this.minCount = newvalue;
       },
       max:function (newvalue,oldvalue) {
           this.maxCount = newvalue;
       }
    },
    computed:{
       
    }
  };
</script>
<style lang="less">
.el-input-number {
    width: 100%;
}
.el-input-number .el-input__inner {
    padding: 0;
}
.el-input-number__decrease, .el-input-number__increase {
    width: 30%;
}
.warning {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    color: #e6a23c;
    font-size: 14px;
    margin-top: 5px;
    span {
        background-color:rgba(230,162,60,.1);
        color: #e6a23c;
        margin-right: 8px;
    }
}
</style>

