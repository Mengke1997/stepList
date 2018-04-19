export default {
    updateCount(state, num) {
        state.count = num;
    },
    updateCategoryDisplay(state, bool) {
        state.categoryDisplay = bool;
    },
    updateIndexProduct(state, data) { // 更新首页数据
        state.indexProduct = [];
        state.indexProduct = data;
        // console.log(state.indexProduct);
    },
    updateproductList(state, data) { // 更新列表数据
        state.productList = [];
        state.productList = data;
    },
    updateproductInfo(state, data) { // 更新详情页数据
        state.productInfoData = [];
        state.productInfoData = data;
    },
    updatePrice(state, data) {
        if (state[data].length > 0) {
            for (let i = 0; i < state[data].length; i++) {
                let prices = state[data][i].prices;
                for (let j = 0; j < prices.length; j++) {
                    if (state[data][i].min_buy >= prices[j].min_quantity && state[data][i].min_buy <= prices[j].max_quantity) {
                        state[data][i].first_price = prices[j].price;
                    } else if (state[data][i].min_buy < prices[0].min_quantity) {
                        state[data][i].first_price = prices[0].price;
                    } else if (state[data][i].min_buy > prices[prices.length - 1].max_quantity) {
                        state[data][i].first_price = prices[prices.length - 1].price;
                    }
                }
            }
        }
    },
    updateUserInfo(state, data) {
        state.userInfo = {};
        state.userInfo = data;
        state.userInfoShow = true;
    },
};
