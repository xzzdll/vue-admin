<template>
  <div class="app-scroll-page app-welcome">
    <div class="app-banner">
      <img style="width: 100%" :src="lntroduce.imgUrl" class="app-banner-img" />
      <div class="app-banner-discription">
        <h1 class="title">{{lntroduce.sysName}}</h1>
        <div class="discription">{{lntroduce.discription}}</div>
      </div>
    </div>
    <div class="app-contact">
      <el-row :gutter="20">
        <el-col :span="12" :offset="9">
          <div>
            <span class="app-contact-title">出现状况，请联系:</span>
            <span class="app-contact-p">
              <i class="fa fa-qq" aria-hidden="true"></i>&nbsp;QQ:{{userInfo.qq}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="app-info">
      <el-row :gutter="20">
        <el-col :span="12">
          <div id="main" style="height:200px">
          </div>
        </el-col>
        <el-col :span="12">
          <div id="main2" style="height:200px">
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="app-doc">

    </div>
    <div class="app-footer">
      <div class="app-footer-pic"><img src="../../assets/welcome/banner.png" height="100%" /></div>
      <div class="app-footer-copyRight">MADE BY JOHN</div>
    </div>
  </div>
</template>
<script>
import welcomeBg from '../../assets/welcome/Ba.png';
import iconDoc from '../../assets/welcome/doc.png';
import iconExcel from '../../assets/welcome/exc.png';
import iconPdf from '../../assets/welcome/pdf.png';
import echarts from 'echarts';
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      // 首页信息
      lntroduce: {
        iconPdf: iconPdf,
        iconExcel: iconExcel,
        iconDoc: iconDoc,
        sysName: 'John博客后台管理系统',
        discription: '我可不喜欢失败',
        imgUrl: welcomeBg
      },
      //  联系方式信息
      userInfo: {
        name: 'John',
        qq: '634408262'
      },
      articals: [],
      names: []
    };
  },
  methods: {
    initEcharts (id) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(id));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: this.names
        },
        series: [
          {
            name: '访问数量',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.articals
          }
        ],
        color: [
          '#5bd75b', '#83aaf0', '#ff9873', '#9fd7fb', '#e18cde'
        ]
      });
    }
  },
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        this.articals = data.list.map(x => {
          return { name: x.title, value: x.times };
        });
        this.names = data.list.map(x => {
          return x.title;
        });
        this.initEcharts('main');
        // this.initEcharts('main2');
      } else {
        this.$message.error(data.message);
      }
    });
  }
};

</script>
<style lang="scss" scoped>
$bannerDiscriptionColor: #fff;
.app-welcome {
  .app-footer {
    height: 225px;
    width: 100%;
    position: relative;
    .app-footer-copyRight {
      padding: 10px 0;
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      color: #a2a2a2;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .app-footer-pic {
      text-align: center;
      height: 100%;
      position: absolute;
      right: 0;
      left: 0;
      width: 100%;
    }
  }
  background-color: #edeff5;
  .app-info {
    padding: 1.8% 0;
    border-top: 1px dashed #d5d8df;
    border-bottom: 1px dashed #d5d8df;
    margin-bottom: 4px;
  }
  .app-doc {
    padding: 1.8% 0;
    border-top: 1px dashed #d5d8df;
    margin-bottom: 4px;
  }
  .app-contact {
    padding: 1.8% 0;
    border-bottom: 1px dashed #d5d8df;
    margin-bottom: 4px;
    .app-contact-title {
      font-size: 12px;
      color: #6e6e6e;
      padding: 20px 0;
    }
    .app-contact-p {
      padding: 0 10px;
      .fa {
        color: #fff;
        border-radius: 3px;
        height: 27px;
        line-height: 27px;
        width: 27px;
        text-align: center;
      }
      .fa-qq {
        background-color: #00a0e9;
      }
      .fa-mobile {
        background-color: #2667cb;
      }
      .fa-phone {
        background-color: #8467e9;
      }
      font-size: 16px;
      color: #1d1d1d;
    }
  }
  .border-dot {
    border: 1px dashed #000;
  }
  position: relative;
  .app-banner {
    // margin-bottom: 50px;
    border-radius: 18px;
    //box-shadow: -4px 10px 20px #949192;
    position: relative;
    height: 180px;
    width: 100%;
    .app-banner-img {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .app-banner-discription {
      .title {
        margin: 0 0 20px 0;
        font-size: 44px;
      }
      .discription {
        letter-spacing: 12px;
        font-size: 18px;
      }
      text-align: center;
      color: $bannerDiscriptionColor;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 0 auto;
      transform: translateY(-50%) translateX(-50%);
    }
  }
}
</style>
