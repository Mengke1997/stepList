<template>
    <div>
        <div class="zoomImg" v-for="(item, index) in productInfoData" :key="index">
        <div class="imgBox" id="imgBox" @mouseenter="imgBoxEnter" @mousemove="imgMove" @mouseleave="imgBoxLeave">
            <div class="normalImg">
                <img :src="item.pics[0].img_url" alt="" id="normalImg"/>
                <div id="mask" class="mask"></div>
            </div>
            <div id="bigBox" class="bigBox">
                <img :src="item.pics[0].img_url" id="bigImg"/>
            </div>
        </div>
        <div class="swiper-container" id="swiper1">
            <ul class="smallImg clearfix swiper-wrapper">
                <li v-for="(itemPics, index) in item.pics" :key="index" @mouseenter="smallImgEnter" data-index="index" :class="[borderIndex==index?'borderColor':'','swiper-slide']">
                    <img :src="itemPics.img_url" alt="">
                </li>
            </ul>
            <!-- <div class="swiper-button-prev"><i class="iconfont icon-fanhui"></i></div> -->
            <!-- <div class="swiper-button-next"><i class="iconfont icon-gengduo1"></i></div> -->
        </div>
       
    </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            borderIndex:0,
            zoomData:[],
            initImgSrc:''
        }
    },
    mounted(){
        this.mySwiper();
    },
    methods:{
        smallImgEnter(e){
            var src = e.currentTarget.children[0].src;
            document.getElementById("normalImg").src=src;
            document.getElementById("bigImg").src=src;
            var index = e.currentTarget.dataset.index;
            this.borderIndex = index;
        },
        imgBoxEnter(e){
            document.getElementById("bigBox").style.display='block';
            document.getElementById("mask").style.display='block';
        },
        imgBoxLeave(e) {
            document.getElementById("bigBox").style.display='none';
            document.getElementById("mask").style.display='none';
        },
        imgMove(e){
            // 获取鼠标在盒子中的位置
            var boxX = e.pageX - e.currentTarget.offsetLeft;
            var boxY = e.pageY - e.currentTarget.offsetTop;
            
            var maskX = boxX - document.getElementById("mask").offsetWidth/2;
            var maskY = boxY - document.getElementById("mask").offsetHeight/2;

            if(maskX < 0) {
			    maskX = 0;
		    }
		    if(maskX > e.currentTarget.clientWidth - document.getElementById("mask").clientWidth) {
		    	maskX = e.currentTarget.clientWidth - document.getElementById("mask").clientWidth;
		    }
            if(maskY < 0) {
			    maskY = 0;
		    }
		    if(maskY > e.currentTarget.clientHeight - document.getElementById("mask").clientHeight) {
		    	maskY = e.currentTarget.clientHeight - document.getElementById("mask").clientHeight;
            }
            document.getElementById("mask").style.left = maskX+"px";
            document.getElementById("mask").style.top = maskY+"px";
            // 大图片移动距离
            var bigImgMove = document.getElementById("bigImg").offsetWidth - document.getElementById("bigBox").offsetWidth;
            var maskToMove = document.getElementById("imgBox").offsetWidth - document.getElementById("mask").offsetWidth;
            var rate = bigImgMove / maskToMove;
            document.getElementById("bigImg").style.left = -rate*maskX + "px";
            document.getElementById("bigImg").style.top = -rate*maskY + "px";

        },
        mySwiper: function () {
            new Swiper('#swiper1', 
            {
                navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                },
                slidesPerView: 4,
                spaceBetween: 0,
            })
        },
    },
    computed:{
        ...mapState(['productInfoData'])
    },
    watch:{
        productInfoData:function (newvalue,oldvalue) {
            this.zoomData = [];
            this.zoomData = newvalue[0].pics;
            this.initImgSrc = this.zoomData[0].img_url;
        }
    }
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
.zoomImg {
    padding-left: 0;
    width: 420*@fontSize;
    margin-top: 30*@fontSize;
    .imgBox {
        width: 100%;
        height: 420px;
        border:1px solid #eee;
        position: relative;
        .normalImg {
            img {
                width: 100%;
                height: 418px;
            }
            .mask {
                width: 100*@fontSize;
                height: 100*@fontSize;
                background-color: rgba(0,0,0,0.1);
                position: absolute;
                top:0;
                left:0;
                z-index:1;
                display: none;
                cursor: move;
            }
        }
        .bigBox {
            position: absolute;
            top: 0;
            left: 105%;
            border:1px solid #ddd;
            overflow: hidden;
            width: 100%;
            height: 420px;
            z-index:999;
            display: none;
            #bigImg {
                position: absolute;
                top:0;
                left:0;
                max-width: 300%;
                width: 600*@fontSize;
                height: 600*@fontSize;
            }
        }
    }
    .smallImg {
        width: 100%;
        padding:15px 0;
        li {
            width: 25%;
            height: 105px;
            float: left;
            overflow: hidden;
            border: 1px solid transparent;
            box-sizing: border-box;
            &:hover {
                border: 1px solid #ccc;
            }
            img {
                width: 100%;
                height: 103*@fontSize;
            }
        }
    }
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
    right: -6px;
}
.swiper-button-prev {
    left: -1px;
}
.borderColor {
    border: 1px solid #ccc!important;
}
</style>
