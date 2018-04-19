<template>
    <div class="likeBest">
        <Title title="猜你喜欢" englishTitle="" iconClass="icon-iconfonthuangguan"/>
        <ul class="likeContent">
            <li v-for="(item, index) in indexProduct" :key="index" v-if="index < 5">
                <a href="javascript:;">
                    <router-link :to="'/productInfo/'+item.gno">
                    <img :src="item.cover_url" alt="" />
                </router-link>
                    <div class="likeDesc">
                        <router-link :to="'/productInfo/'+item.gno">
                            <p>{{item.goods_name}}</p>
                        </router-link>
                        <p>
                            <span class="price">&yen; {{item.first_price}}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        
    </div>
  
</template>
<script>
import Title from "../../title/title";
import { mapState, mapActions } from 'vuex';
export default {
    components:{
        Title,
    },
    methods:{
    },
    computed:{
        ...mapState(['indexProduct'])
    }
  
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
    .likeBest {
        margin-top: 40px;
        .likeContent li {
            position: relative;
            border-bottom: 1px dashed #ccc;
            width: 100%;
            height: 134px;
            a {
            display: block;
            width: 100%;
            
            img {
                width: 100px;
                height: 100px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
            .likeDesc {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 57%;
                p:first-of-type {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 14*@fontSize;
                    color: #333;
                }
                .price {
                    color: #0275d8;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
            
        }
        }
         
    }
</style>
