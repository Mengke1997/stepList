export default {
    // 获取商品列表数据，可用于首页，列表页
    updateProductListAsync(store, param) {
        // console.log(this)
        const that = this._vm;
        const loader = that.$loading({ fullscreen: true });
        const url = that.$urlConfig.config.productUrl + '/api/goods';
        that.$http({
            method: 'get',
            url,
            data: param.params,
        }).then((res) => {
            loader.close();
            // console.log(res)
            store.commit(param.mutionType, res.data.data);
            store.commit('updatePrice', 'indexProduct');
        }).catch((error) => {
            // console.log(error)
        });
    },
    updateProductInfoAsync(store, param) {
        const that = this._vm;
        const loader = that.$loading({ fullscreen: true });
        const url = that.$urlConfig.config.productUrl + '/api/goods/' + param;
        that.$http({
            methods: 'get',
            url,
        }).then((res) => {
            console.log(res);
            loader.close();
            const arr = [];
            arr.push(res.data.data);
            store.commit('updateproductInfo', arr);
            store.commit('updatePrice', 'productInfoData');
        });
    },
    login() { // 登录
        const that = this._vm;
        const loader = that.$loading({ fullscreen: true });
        const nextPath = encodeURIComponent(`${location.origin}/#/verify`);// 转码后可以成功跳转
        const url = that.$urlConfig.config.loginUrl + '/server/authorize' + '?' + 'next=' + nextPath;
        localStorage.setItem('originPath', location.href);
        location.href = url;
        loader.close();
    },
    register() { // 注册
        const that = this._vm;
        const loader = that.$loading({ fullscreen: true });
        const nextPath = encodeURIComponent(`${location.origin}/#/verify`);// 转码后可以成功跳转
        const url = that.$urlConfig.config.loginUrl + '/register' + '?' + 'next=' + nextPath; ;
        localStorage.setItem('originPath', location.href);
        location.href = url;
        loader.close();
    },
    loginOut() { // 退出登录
        const that = this._vm;
        const url = that.$urlConfig.config.loginUrl + '/logout';
        const token = that.$Cookies.get('accessData');
        console.log(token);
        const callbackUrl = location.href;
        location.href = url + '?' + 'access_token=' + token + '&next=' + callbackUrl;
    },
    // 获取用户名
    getUserInfo(store) {
        const that = this._vm;
        const url = that.$urlConfig.config.loginUrl + '/server/verify';
        that.$http({
            methods: 'get',
            url,
        }).then((res) => {
            store.commit('updateUserInfo', res.data.data);
        });
    },
};
