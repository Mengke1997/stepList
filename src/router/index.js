import Vue from 'vue'
import Router from 'vue-router';
import IndexPage from "../pages/IndexPage.vue"
import ProductList from "../pages/ProductList.vue"
import productInfo from "../pages/ProductInfo.vue"
import ListMethod from "../components/productListDetail/main/ListMethod.vue";
import BigImgList from "../components/productListDetail/main/BigImgList.vue";
import Verify from "../pages/verify.vue";
import Main from "../pages/Main.vue";
import StepList from '../pages/StepList.vue'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '/',
                    component: IndexPage
                },
                {
                    path: '/productList',
                    component: ProductList,
                    children: [
                        {
                            path: 'bigImgList',
                            component: BigImgList
                        }, {
                            path: '/',
                            component: ListMethod
                        }
                    ]
                },
                {
                    path: '/productInfo/:id',
                    component: productInfo,
                    props: true
                },

            ]
        },
        {
            path: '/stepList',
            component: StepList,
        },
        {
            path: '/verify',
            component: Verify,
        },
    ]
})
