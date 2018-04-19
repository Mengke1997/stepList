let wizardForm = new Vue({
    el: '#wizard-form',
    data: {
        industry: '无',
        industrySelected: false,
        scence: '无',
        scenceSelected: false,
        material: '无',
        shape: '无',
        thickness: '',
        connector: '无',
        weldingSize: '',
        splash: '无',
        quality: '无',
        exterior: '无',
        accuracy: '无',
    },
    watch: {
        thickness(val) {
            var reg = new RegExp('^[0-9.]*$');
            var str = '';
            if (!reg.test(val)) {
                str = val.substring(0, val.length - 1);
                this.thickness = str;
            }
        },
        weldingSize(val) {
            var reg = new RegExp('^[0-9.]*$');
            var str = '';
            if (!reg.test(val)) {
                str = val.substring(0, val.length - 1);
                this.weldingSize = str;
            }
        },
    },
    methods: {
        getIndustry(e) {
            e.preventDefault();
            this.industry = e.currentTarget.attributes['value'].value;
            this.scence = '无';
        },
        getScence(e) {
            e.preventDefault();
            this.scence = e.currentTarget.attributes['value'].value;
        },
        submit(e) {
            var thick = parseFloat(this.thickness);
            var weldingSize = parseFloat(this.weldingSize);
            if (this.industry == '家具' && this.scence == '箱体' && this.material == '铁' && thick == 1 && weldingSize == 1200 && this.splash == '少') {
                window.location = '/solutionDetail.html';
            } else {
                swal({
                    className: 'swal-common',
                    title: '暂无符合条件方案',
                    text: '是否发布新的需求？',
                    icon: 'info',
                    buttons: ['取消', '确认'],
                })
                    .then((isConfirm) => {
                        if (isConfirm) {
                            window.location = 'http://dect.robo2025.com/';
                        } else {
                            return;
                        }
                    });
            }
        },
    },
});
