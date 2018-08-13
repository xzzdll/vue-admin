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
      <div class="app-info-header">
        <span class="title">
          <i class="fa fa-volume-up" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;最新公告：</span>
      </div>
      <div class="app-info-content">
        <div></div>
      </div>
    </div>
    <div class="app-doc">
      <div class="app-doc-header">
        <span class="title">
          <i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;常见文档：</span>
      </div>
      <div class="app-doc-content">
        <div class="app-doc-content-padding">
          <el-row :gutter="20">
            <el-col v-for="(item) in docArray" :key="item.id" :span="6">
              <div class="app-doc-item clearboth">
                <div class="app-doc-item-left FL">
                  <span><img :src="lntroduce[`${item.type}`]" style="width:42px;height:56px;"></span>
                </div>
                <div class="app-doc-item-right FR">
                  <div class="doc-name">{{item.name}}</div>
                  <div class="doc-control" @click="downloadDoc(item)">点击下载</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
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
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      // 首页信息
      lntroduce: {
        iconPdf: iconPdf,
        iconExcel: iconExcel,
        iconDoc: iconDoc,
        sysName: '后台管理系统',
        discription: '宣传标语',
        imgUrl: welcomeBg
      },
      //  联系方式信息
      userInfo: {
        name: 'John',
        qq: '634408262'
      },
      // 公告
      noticeArray: [{
        id: 1,
        name: '第一个公告',
        conetnt: '第一个公告的内容'
      }],
      //  常见文档
      docArray: [
        {
          type: 'iconPdf',
          id: 1,
          name: '使用文档1'
        },
        {
          type: 'iconPdf',
          id: 2,
          name: '使用文档二使用文档二使用文档二使用文档二'
        },
        {
          type: 'iconDoc',
          id: 3,
          name: '使用文档二使用文档二使用文档二使用文档二'
        },
        {
          type: 'iconDoc',
          id: 4,
          name: '使用文档二使用文档二使用文档二使用文档二'
        },
        {
          type: 'iconExcel',
          id: 5,
          name: '使用文档二使用文档二使用文档二使用文档二'
        }
      ]
    };
  },
  methods: {
    downloadDoc (item) {
      this.$alert(`此功能未开通`).then(() => { }, () => { });
    }
  },
  mounted () {
    fetch('login', { userName: 'john', passWord: '1605' });
    // fetch('/artical/delete', { id: '5b6cf9c374aaf83d24340386' });
    // fetch('/artical/edit', { id: '5b6cf9c174aaf83d24340385', content: '测试啊啊啊' });
    // fetch('/artical/create', { title: '测试标题', content: '测试啊啊啊' });
    // fetch('/artical/list');
  }
};

</script>
<style lang="scss" scoped>
$bannerDiscriptionColor: #fff;
.app-welcome {
  .app-footer {
    height: 180px;
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
    .app-info-header {
      .title {
        .fa {
          font-size: 16px;
          color: #c2c4cc;
        }
        color: #6e6e6e;
        font-size: 14px;
      }
    }
    padding: 1.8% 0;
    border-top: 1px dashed #d5d8df;
    border-bottom: 1px dashed #d5d8df;
    margin-bottom: 4px;
  }
  .app-doc {
    .app-doc-content {
      padding: 2.5% 0;
      .app-doc-content-padding {
        .app-doc-item {
          box-shadow: -3px 10px 10px #dee1ea;
          margin-bottom: 15px;
          text-align: center;
          .app-doc-item-left {
            width: 30%;
            font-size: 44px;
            color: #7bc6ff;
          }
          .app-doc-item-right {
            width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .doc-name {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 10px 5px;
              color: #181818;
              font-size: 14px;
            }
            .doc-control {
              color: #a3a3a3;
              font-size: 12px;
              border: 1px dashed #a3a3a3;
              border-radius: 4px;
              display: inline-block;
              padding: 2px 5px;
              cursor: pointer;
            }
          }
          padding: 15px;
          background-color: #fff;
          border-radius: 4px;
        }
      }
    }
    .app-doc-header {
      .title {
        .fa {
          font-size: 16px;
          color: #c2c4cc;
        }
        color: #6e6e6e;
        font-size: 14px;
      }
    }
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
