<template>
  <ul>
      <li v-for="(item,index) in teachLessons" :key="index">
          <a :href="item.aUrl" target="_blank">
                <img :src="item.imgUrl" alt="">
                <div class="teachInfoRight">
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                    <span class="time">{{item.time}}</span>
                </div> 
            </a>   
        </li>
  </ul>
        
  
</template>
<script>
export default {
    created(){
        // console.log(this);
    },
    props:['teachLessons'],
  data(){
      return {

      }
  }
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
  ul {

        li {
            border-bottom: 1px dotted #ccc;
            a {
                display: block;
                width: 100%;
                height: 156*@fontSize;
                position: relative;
                img {
                    width: 200*@fontSize;
                    height: 100*@fontSize;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;

                }
                .teachInfoRight {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 62%;
                    transform: translateY(-50%);
                    h4 {
                        font-size: 15px;
                        color: #333;
                        line-height: 25px;
                        height: 25px;
                        margin: 20px 0;
                        padding-bottom: 0;
                        font-weight: 600;
                    }
                    p {
                        font-size: 14px;
                        color: #333;
                        margin-bottom: 0;
                    }
                    .time {
                        float: right;
                        color: #999;
                        font-size: 12px;
                        margin: 10px 0;
                    }
                }
            }
        }
    }

</style>
