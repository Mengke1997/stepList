<template>
  <div class="productRank">
        <Title title="产品销售排行榜" englishTitle="" iconClass="icon-xingyepaixing"/>
        <div class="swiper-container" id="rankSwiper">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                   <ul class="cat-list">
                        <li v-for="(item, index) in indexProduct" :key="index" v-if="index >=1 && index < 5">
                            <router-link :to="'/productInfo/'+item.gno" class="clearfix" title="item.goods_name">
                                <img src="../../../assets/images/top1.png" alt="" class="imgLeft" v-if="index === 1">
                                <img src="../../../assets/images/top2.png" alt="" class="imgLeft" v-if="index === 2">
                                <img src="../../../assets/images/top3.png" alt="" class="imgLeft" v-if="index === 3">
                                <img src="../../../assets/images/top4.png" alt="" class="imgLeft" v-if="index === 4">
                                <p class="descInfo" title="item.goods_name">  
                                    {{item.goods_name}}               
                                </p>                    
                                <img :src="item.cover_url" alt="" class="imgRight">   
                            </router-link>
                        </li>
                    </ul>
               </div>
               <div class="swiper-slide">
                   <ul class="cat-list">
                        <li v-for="(item, index) in indexProduct" :key="index" v-if="index >=6 && index < 10">
                            <router-link :to="'/productInfo/'+item.gno" class="clearfix" title="item.goods_name">
                                <img src="../../../assets/images/top5.png" alt="" class="imgLeft" v-if="index === 6">
                                <img src="../../../assets/images/top6.png" alt="" class="imgLeft" v-if="index === 7">
                                <img src="../../../assets/images/top7.png" alt="" class="imgLeft" v-if="index === 8">
                                <img src="../../../assets/images/top8.png" alt="" class="imgLeft" v-if="index === 9">
                                <p class="descInfo" title="item.goods_name">  
                                    {{item.goods_name}}               
                                </p>
                                <img :src="item.cover_url" alt="" class="imgRight">      
                            </router-link>
                        </li>
                    </ul>
               </div>
            </div>
            <!-- Add Pagination -->
            
        </div>
        <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Title from "../../title/title";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {mapState, mapActions} from 'vuex'
export default {
    components:{
        Title,
    },
    mounted(){
        this.mySwiper();
    },
    methods:{
        mySwiper: function () {
            new Swiper('#rankSwiper', 
            {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '" style="width:20px;height: 20px;margin-left: 10px;">' + '</span>';
                    },
                },
                
            })
        },
    },
    computed:{
        ...mapState(['indexProduct'])
    }
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
.productRank {
    position: relative;
    .swiper-pagination {
        position: absolute;
        top: 0;
        right: 0;
    }
}
.cat-list li {
    border-bottom: 1px dotted #ddd;
    a {
        display: block;
	    width: 100%;
	    height: 100%;
        position: relative;
        height: 130*@fontSize;
        .imgLeft {
            position: absolute;
            width: 50*@fontSize;
            height: 50*@fontSize;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        p {
            position: absolute;
            top: 50%;
            left: 46%;
            transform: translate(-50%, -50%);
            margin: 0;
            width: 48%;
            color: #333;
             display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 2;
             overflow: hidden;
             font-weight: 700;
             font-size: 12*@fontSize;

        }
        .imgRight {
            position: absolute;
            width: 80*@fontSize;
            height: 80*@fontSize;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }
        
    }
}
</style>
