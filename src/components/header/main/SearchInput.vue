<template>
    <div class="group-search">
        <div class="group-inner">
            <div class="mod-search clearfix">
                <div class="search-input">
                    <input type="text" class="main-search-keywords" maxlength="30" autocomplete="off" autofocus="true" placeholder="请输入产品名称及产品编号" spellcheck="false">
                    <button id="wagsearch-submit"><i class="el-icon-search"></i></button>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
  name:"SearchInput",

}
</script>
<style lang="less" scoped>
@baseColor: #0275d8;
@fontSize: 1/16rem;
.group-search{
    height: 70*@fontSize;
    line-height: 70*@fontSize;
    overflow: hidden;
    position: relative;
   .group-inner {
        .mod-search {
            .search-input {
               width: 100%;
               padding: 0;
               margin: 0;
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                input {
                    float: left;
                    width: 80%;
                    height: 40*@fontSize;
                    padding:0;
                    margin: 0;
                    outline: none;
                    border-width: 0;
                    border: 1px solid #ccc;
                    border-right:1px solid @baseColor;
                    box-sizing: border-box;
                    padding-left: 10*@fontSize;
                    font-size: 14*@fontSize;
                }
                #wagsearch-submit {
                    width: 20%;
                    float: right;
                    font-size: 14*@fontSize;
                    border-radius: 0;
                    outline: 0;
                    cursor: pointer;
                    color: #fff;
                    background: #0275d8;
                    height: 40*@fontSize;
                    border: none;
                    outline: none;
                    .el-icon-search {
                        font-size: 20*@fontSize;
                        font-weight: 800;
                    }
            }  
            }
            
        }
    }
}
</style>
