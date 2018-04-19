<template>
    <div>
        <Title title="品牌" englishTitle="Brands" iconClass="icon-like1"/>
        <div class="brandsTitle">
            <h5>品牌检索</h5>
            <ul>
                <li><a href="javascript:;" class="active">A-D</a></li>
                <li><a href="javascript:;">E-J</a></li>
                <li><a href="javascript:;">K-M</a></li>
                <li><a href="javascript:;">N-S</a></li>
                <li><a href="javascript:;">T-Z</a></li>
            </ul>
        </div>
        <div class="brandsContent">
            <div class="swiper-container" id="swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
                        <a href="javascript:;">
                            <img :src="item" alt="">
                        </a>
                    </div>
                    <!-- <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="../../../assets/images/ggauto.png" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="../../../assets/images/gs.png" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="../../../assets/images/kuka.png" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="../../../assets/images/kawasaki.png" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="../../../assets/images/otc.png" alt="">
                        </a>
                    </div> -->
                </div>
                <!-- Add Arrows -->
                <div class="swiper-button-prev"><i class="iconfont icon-fanhui"></i></div>
                <div class="swiper-button-next"><i class="iconfont icon-gengduo1"></i></div>
            </div>
        </div>
            
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import Title from "../../title/title.vue"
  export default {
    mounted:function(){
        // 找到了更好的方法再优化
        setTimeout(function(){
            this.mySwiper();                                 
        }.bind(this),300);
    },
    created(){
    },
    components:{
        Title
    },
    data(){
        return {
            imgList:[
                require("../../../assets/images/gugao.png"),
                require("../../../assets/images/ggauto.png"),
                require("../../../assets/images/gs.png"),
                require("../../../assets/images/kuka.png"),
                require("../../../assets/images/kawasaki.png"),
                require("../../../assets/images/otc.png")
            ]
        }
    },
    methods:{
        mySwiper: function () {
            new Swiper('#swiper1', 
            {
                navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                },
                slidesPerView: 5,
                spaceBetween: 0,
                autoplay:{
                    delay: 3000,
                    disableOnInteraction: false,
                },
                observer:true,
                observeParents:true
            })
        },
    }
   
  };
</script>
<style lang="less" scoped>
 @baseColor: #0275d8;
 @fontSize: 1/16rem;
        .brandsTitle {
            h5 {
                font-size: 14*@fontSize;
                font-weight: normal;
                display: inline-block;
                vertical-align: 12*@fontSize;
                margin-right: 30*@fontSize;
            }
            ul {
                display: inline-block;
                li {
                    float: left;
                    margin-right: 10px;
                    &:hover a{
                        border: 1px solid @baseColor;
                        color: @baseColor;
                    }
                    a {
                        display: block;
                        padding: 0 50px;
                        color: #333;
                         height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border: 1px solid transparent;
                        font-size: 14px;
                        border-radius: 6px;
                        &.active {
                            border: 1px solid @baseColor;
                            color: @baseColor;
                        }
                    }
                }
            }
        }
        .brandsContent {
            height: 120*@fontSize;
        }
       .swiper-container {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            text-align: center;
            background: #fff;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            a {
                display: block;
                width: 215*@fontSize;
                height: 85*@fontSize;
                margin-right: 10*@fontSize;
                margin-left: 10*@fontSize;
                img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.25s;
                    &:hover {
                        transform: translateY(-3px);
                    }
                }
            }
        }
        .swiper-button-next, .swiper-button-prev {
            background-image : none;
            line-height: 44px;
            transform: translateY(-55%);
            margin-top: 0;
            i {
                font-size: 22px;
                color: #333;
            }
        }
        .swiper-button-next {
            right: -5px;
        }
        .swiper-button-prev {
            left: 0px;
        }
</style>
