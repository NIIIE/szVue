<template>
    <div class="back2" >          
      <div id="mainBox">
        <header id="headBox"></header>
        <div style="display: flex;flex-wrap: nowrap;">
          <div class="leftBox">
            <div class="eqStateTitle">设备运行状态</div>
            <div class="eqState">
              <div v-for="state,index in states" :key="index" class="state4">
                <div>{{state.num}}</div>
                <div>{{state.state}}</div>
              </div>
            </div>
            <div class="stateAll"></div>
            <div class="eqPerTitle">设备利用率</div>
            <div class="eqPerBox">
              <div id="eqCharts">

              </div>
              <div class="eqName" v-for="name,indexs in eqNames" :key="indexs">
                <div>{{name.name}}</div>
              </div>

            </div>
          </div>
          <div class="midBox"></div>
          <div class="rightBox"></div>
        </div>       
      </div>
    </div>
</template>

<script>

  export default {
     mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("eqCharts"));
      // 绘制图表
      myChart.setOption({
        // color:['#4472C5','#ED7C30','#80FF80','#FF8096','#800080'],
        tooltip: {
        trigger: 'item'
        },
        legend: {
          // 图例
            top: '0%',
            left: 'center',
            // orient: 'vertical',  //垂直显示
            //  y: 'center',    //延Y轴居中
            //  x: 'left',//居右显示
            // itemWidth: 50,//控制图列宽度
            // itemHeight:50,//控制图例高度
            textStyle:{
              // 图例文颜色
              color:"lightskyblue",
              fontSize:16
            }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '100%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'bottom',

            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},                  
            ]
          }
        ]
      })
    },

    data() {
      return {
       states:[{"num":203,"state":"待机"},{"num":158,"state":"离线"},
       {"num":49,"state":"报警"},{"num":635,"state":"运行"},],
       eqNames:[{"name":"DW-28",},{"name":"DW-59"},
       {"name":"DW-79"},{"name":"DW-EXT"},],
      }
    },
    methods: {
     
    }
  }
</script>

<style scoped>
@import "../../public/static/css/index3.css"; 

.back2{
  background-image: url("../assets/map.jpg");
  /* background-color:#000024; */
  background-size:1700px 1000px;
  background-repeat: no-repeat;
  width:1700px;
  height:1000px;
  background-position-y: 0px;
}


</style>
