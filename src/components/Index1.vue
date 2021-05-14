<template>
    <div class="back1">
      <div class="mainInof"  v-for="infos,index1 in infoArr" :key="index1">
        <el-row type="flex" class="header" justify="space-around">
          <el-col :span="2" class="border1">         
            <div class="demo-basic--circle">
              <div class="block"><el-avatar :size="60" :src="circleUrl"></el-avatar></div>
            </div>
          </el-col>
          <el-col :span="2" class="border1 title">         
            <div :class="[infos.recEnd=='辨认成功'? 'textSuccess':'textFailed']">{{infos.recEnd}}</div>
            <div style="color:white">{{infos.recNum}}</div>
          </el-col>
          <el-col :span="2" :offset="18" class="border1">
            <div class="editBtn">
              编辑
            </div>
          </el-col>
        </el-row>    
        <div style="display:flex;flex-warp:no-warp">
          <div class="border2 itemPosBox">
            <img :src=infos.img1 alt="">
            <div class="itemPosText">货品位置</div>
          </div>
          <el-row :gutter="30" type="flex" justify="start"  style="width:1298px;padding-left:35px">
            <el-col :span="8" v-for="infos2,index2 in infoArr2" :key="index2" class="infos3Box">           
              <div class="border2 infoBox1">
                <img :src=infos2.img2 alt="">
                <div style="position:relative">{{infos2.param11}}</div>                    
                <div style="position:relative">{{infos2.param12}}</div>
                <div style="position:relative">{{infos2.param13}}</div>
                <div class="ctime"><i class="el-icon-time" style="margin-right:12px;font-size:27px;color:#00F5FF"></i>{{infos2.ctime1}}</div>  
                <div class="checkRes">
                  <div :class="[infos2.res1=='信息核对成功'? 'res1y':'res1n']"></div>
                  <div style="margin-top:7px" :class="[infos2.res1=='信息核对成功'? 'res1ty':'res1tn']">{{infos2.res1}}</div>
                </div>
                <el-row class="scanRes">
                  <el-col :span="16"><span class="percentBox">扫描吻合度：{{infos2.percent}}%</span></el-col>
                  <el-col :span="6" ><span class="changeResBtn" v-on:click="changeResBtn(index1,index2)">更改结果</span></el-col>
                </el-row>
                
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
    data() {
        return {
            data1:'1',
            data2:'2',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",          
            infoArr:[
              { "recEnd":"辨认失败","recNum":"A3765937457",
              "img1":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",              
              },
              { "recEnd":"辨认成功","recNum":"A3765937458",
              "img1":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              },
            ],
            infoArr2:[
              {
              "img2":"https://tse4-mm.cn.bing.net/th/id/OIP.sUGp5ljubwScAxJteYeQBAHaEK?w=311&h=180&c=7&o=5&pid=1.7",
              "param11":"D/C:9K81",
              "param12":"QC:G4048295",
              "param13":"LM:F0890784",
              "ctime1":"17:20:24",
              "res1":"信息核对成功",
              "percent":"90",
              },
              {
              "img2":"https://tse4-mm.cn.bing.net/th/id/OIP.XB3e45Q-Hkm0ns3Q7mQckQHaE7?w=279&h=186&c=7&o=5&pid=1.7",
              "param11":"D/C:9K81",
              "param12":"QC:G4048295",
              "param13":"LM:F0890784",
              "ctime1":"17:20:24",
              "res1":"信息核对失败",
              "percent":"60",
              },
              {
              "img2":"https://tse1-mm.cn.bing.net/th/id/OIP.IbqY-y3ptQ4DStR5S61UqQHaHa?w=186&h=186&c=7&o=5&pid=1.7",
              "param11":"D/C:9K81",
              "param12":"QC:G4048295",
              "param13":"LM:F0890784",
              "ctime1":"17:20:24",
              "res1":"信息核对成功",
              "percent":"90",
              }
            ]
        }
    },
    methods: {
        getData(){
            this.axios.post('/api/wjxlld/public/index.php/allapp/Index/getData',
						{
							page: '2',
							type: '3',
						}
					)
					.then((e) => {
						console.log(e)
						if (e.data.code == 1001) {
							this.data1 = e.data.data[1]
						} else if (e.data.code == 1002) {
							this.data1 = e.data.data[3].snumber;
						}
					})
        },
        changeResBtn(index1,index2){
          console.log(index1,index2)
        }
    },
}
</script>

<style scoped>
.back1{
  /* background-image: url("../assets/page1.png"); */
  background-color:#000024;
  background-size:1700px 1000px;
  background-repeat: no-repeat;
  width:1700px;
  height:1000px;
  background-position-y: 0px;
}
.mainInof{
  height:472px;
  border:2px solid rgb(59, 111, 170);
  margin-bottom:40px;
}
.header{
  padding-top:45px;
}
.border1{
  /* border:1px dotted #ff6666; */
  border-radius:10px;
}

.border2{
  margin-top:13px;
  border:1px groove  #018dc4;
  height:300px;
  border-radius:10px;
}
.border3{
  border:1px ridge  #006666;
}
.textFailed{
  color:#DC143C;
}
.textSuccess{
  color:#00CD00;
}
.title div{
  text-align: left;
  line-height: 35px;
  font-size:25px;
}
.editBtn{
  margin-top:10px;
  margin-left:20px;
  border:1px solid 	#00F5FF;
  border-radius: 25px;
  height:40px;
  width:90px;
  color:#00F5FF;
  font-size:22px;
  line-height:40px;
  cursor: pointer;
}
.itemPosBox{
  width:374px;
  margin-left:24px;
  overflow: hidden;
  position:relative;
}
.itemPosBox img{
  width:100%;
  height:100%;
  border-radius:10px;
}
.itemPosText{
  position:absolute;
  top:262px;
  left:25px;
  color:white;
  font-size:24px;
  z-index:10;
}
.infoBox1{
  font-size:23px;
  color:white;
  padding-top:10px;
  position:relative;
}
.infoBox1 img{
  width:100%;
  height:80%;
  position:absolute;
  left:0px;
  z-index:1;
  border-radius:10px;
}
.infoBox1 div{
  margin-top:10px;
  text-align:left;
  margin-left:20px;
  z-index:10;
}
.ctime{
  position: absolute;
  right: 24px;
  top: 8px;
}
.checkRes{
  /* 确认框 */
  width: 250px;
  display: flex;
  flex: no-warp;
  position: absolute;
  top: 197px;
  left: 54px;
}
.res1y{
  /* 信息核对样式 */
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-image: url(/img/yes&no.dd6b9c46.jpg);
  background-size: 248%;
  background-position: -5px -41px;
}
.res1n{
  /* 信息核对样式 */
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-image: url(/img/yes&no.dd6b9c46.jpg);
  background-size: 248%;
  background-position: -40px -41px;
}
.res1ty{
  color:white;
}
.res1tn{
  color:red;
}
.scanRes{
  width:369px;
  position:absolute;
  bottom:16px;
  left:-10px;
}
.scanRes div{
  margin:0;
}
.changeResBtn{
  color:#1E90FF;
}
</style>

