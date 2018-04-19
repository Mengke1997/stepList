<template>
  <div class="container">
        <el-row v-if="categoryDisplay">
            <el-col :span="4"><Logo /></el-col>
            <el-col :span="3"><CategoryList :styleObj="categoryStyleObj" :cateWidth="categoryWidth" :class={isShow:isShow} /></el-col>
            <el-col :span="9" :offset="2"><SearchInput /></el-col>
            <el-col :span="4" :offset="2"><RequireRelease /></el-col>
        </el-row>
        <el-row v-if="!categoryDisplay">
            <el-col :span="5"><Logo /></el-col>
            <el-col :span="9" :offset="2"><SearchInput /></el-col>
            <el-col :span="6" :offset="2"><RequireRelease /></el-col>
        </el-row>
  </div>
</template>
<script>
import Logo from "./Logo";
import CategoryList from './CategoryList';
import SearchInput from "./SearchInput";
import RequireRelease from './RequireRelease';
import {mapState} from 'vuex';
export default {
  name:"Header",
  props:{
      isShow:Boolean
  },
  components: {
      Logo,
      CategoryList,
      SearchInput,
      RequireRelease
  },
  created(){
  },
  data(){
      return {
            categoryStyleObj:{
                  'backgroundColor':"#fff",
                  'color':"#333"
            },
            categoryWidth:{
                'width':'835px',
                "top":"100%"
            }
      }
  },
  computed:{
      ...mapState(['categoryDisplay'])
  }
}
</script>
<style lang="less" scoped>
    .isShow{
        visibility: hidden;
    }
</style>
