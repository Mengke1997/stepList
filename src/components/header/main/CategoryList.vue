<template>
  <div class="produstListTitle">
        <ul class="categoryContent">
            <li>
                <span class="titleDesc" :style="styleObj">商品分类<i class="el-icon-arrow-down"></i></span>
                <div class="secondCate">
                    <ul class="secondCateContent">
                        <li v-for="(item,index) in cateList" :key="index" :id="index" @mouseenter="liMouseEnter">
                            <span class="el-icon-download"></span> 
                            <a href="javascript:;"><span>{{item.category_name}}</span></a>
                        </li>
                    </ul>
                    <ul class="thirdCategory" id="thirdCategory" :style="cateWidth">
                        <li class="clearfix" v-for="(item, index) in secondCateData" :key="index">
                            <a href="javascript:;"><span>{{item.category_name}}<i class="el-icon-arrow-right"></i></span></a> 
                            <div><a href="searchList.html" v-if="item.children != null" v-for="(item, index) in item.children" :key="index">{{item.category_name}}</a></div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import "../../../assets/iconfont/iconfont.css"
export default {
    name:"CategoryList",
    props:{
        styleObj:{
            type:Object,
        },
        cateWidth:{
            type:Object,
        },
        cateTop:{
            type:Object,
        }
    },
    created(){
       this.getCategoryData();
    },
    data(){
        return{
            cateList:[],
            secondCateData:[],
            thirdCateData:[]
        }
    },
    methods:{
          getCategoryData(){
              var url = this.$urlConfig.config.productUrl+'/api/goods_categories';
              this.$http({
                  method:'get',
                  url:url,
              }).then((res)=>{
                this.cateList = res.data.data;
                document.getElementById("thirdCategory").style.height = this.cateList.length*40-2 + "px";
              }).catch(function(error){
                  console.log(error)
              })
          },
          liMouseEnter(e){
              this.secondCateData = [];
              var id = e.currentTarget.id;
              if(this.cateList[id].children != null) {
                  this.secondCateData = this.cateList[id].children;
                //   console.log(this.secondCateData);
              }
              
          }
    }
}
</script>
<style lang="less" scoped>

@baseColor: #0275d8;
@fontSize: 1/16rem;
.produstListTitle {
  padding-left: 0px;
  .categoryContent {
      margin: 0;
      padding: 0;
      &:hover .el-icon-arrow-down {
        transform: rotate(180deg);
    }
    >li {
        width: 100%;
        position: relative;
        &:hover .secondCateContent {
            display:block;
        }
        .secondCate{
            &:hover .thirdCategory {
                display: block;
            }
        }
        .titleDesc {
            color: #fff;
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 14*@fontSize;
            background: #fff;
            color: #333;
            box-shadow: 0 0px 21px 1px rgba(0,0,0,.1);
            >i {
                margin-left:3*@fontSize;
                transform: rotate(360deg);
                transition: all 0.5s;
            }
        }
        .secondCateContent {
            display: none;
            position:absolute;
            width: 100%;
            z-index:9999;
            background-color: #fff;
            top:100%;
            padding: 15*@fontSize 0;
            box-shadow: 0 1px 10px 3px rgba(0,0,0,.1);
            .el-icon-download {
                color: #333;
                transform: rotate(-90deg);
                display: inline-block;
            }
            >li {
                height: 40*@fontSize;
                line-height: 40*@fontSize;
                text-align: left;
                padding-left: 10*@fontSize;
                cursor: pointer;
                &:hover {
                    background:#f4f4f4;
                    .el-icon-download,a {
                        color: @baseColor;
                    }
                }
                a {
                    color: #333;
                    font-size: 14*@fontSize;
                    &:hover {
                        color: @baseColor;
                    }
                }
            }
        }
        .thirdCategory {
            position: absolute;
            top: 100%;;
            left: 100%;
            z-index: 999;
            background-color: #fff;
            width: 835px;
            padding: 15*@fontSize 0;
            min-height: 320px;
            background-color: #fff;
            box-shadow: 0 1px 10px 3px rgba(0,0,0,.15);
            display: none;
            >li {
                text-align: left;
                padding-right: 30*@fontSize;
                line-height: 35*@fontSize;
                a {
                    font-size: 14*@fontSize;
                    color: #666;
                    padding: 0 10*@fontSize;
                    border-left: 1px solid #aaa;
                    &:hover {
                        color: @baseColor;
                    }
                }
                >a {
                    border-left: none;
                    font-size: 14px;
                    color: #666;
                    font-weight: 600;
                    float: left;
                    width: 170px;
                    text-align: right;
                    .el-icon-arrow-right {
                        font-size: 15*@fontSize;
                        margin-left: 6*@fontSize;
                        vertical-align: -1*@fontSize;
                    }
                    
                }
                >div {
                    overflow: hidden;
                }
               
            }
        }
    }
  }
}

</style>
