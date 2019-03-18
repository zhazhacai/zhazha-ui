<template>
  <div class="top-bar-component">
    <div class="controls" v-if="true">
      <div class="pick-up-btn" @click="pickMenu">
        <span v-if="isPickUp">展开</span>
        <span v-else>收缩</span>
      </div>
      <div class="options">
        概览
      </div>
    </div>
    <div class="blank">
    </div>
    <div class="links">
      <div class="pick-up-btn">
        <el-tooltip class="tooltip" effect="dark" content="帮助中心" placement="bottom">
          <a href="http://help.casabaplus.com">
            帮助
          </a>
        </el-tooltip>
      </div>
    </div>
    <div class="links">
      <div class="pick-up-btn">
        <el-tooltip class="tooltip" effect="dark" content="消息中心" placement="bottom">
          <a href="http://help.casabaplus.com">
            消息
          </a>
        </el-tooltip>
      </div>
    </div>
    <div class="profile">

      <div class="text">
        <h6>admin</h6>
        <p>UNEX 前端开发</p>
      </div>
      <div class="avatar"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI5MDQ4NjQ0NDA0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxOTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwaDEwMjR2MTAyNEgweiIgZmlsbD0iI0Y1RjVGNSIgcC1pZD0iNTIwMCI+PC9wYXRoPjxwYXRoIGQ9Ik04NjcuNyAxMTZoLTcxMmMtMTMuOCAwLTI1IDExLjItMjUgMjV2MTAyLjJoNzYyVjE0MWMwLTEzLjgtMTEuMi0yNS0yNS0yNXoiIGZpbGw9IiNDQ0NDQ0MiIHAtaWQ9IjUyMDEiPjwvcGF0aD48cGF0aCBkPSJNMTMwLjcgMzY3LjFoNzYydjU0MGgtNzYyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNTIwMiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTMuOSA0NzEuN0g5NC43Yy0zMi40IDAtNDkuNy0yMy41LTM4LjUtNTIuNSAyNC44LTY2IDQ5LjYtMTMyIDc0LjUtMTk4aDEwOC45Yy0xNy43IDY2LTM1LjUgMTMyLTUzLjIgMTk4LTcuNyAyOS00MC4xIDUyLjUtNzIuNSA1Mi41eiIgZmlsbD0iI0NDQ0NDQyIgcC1pZD0iNTIwMyI+PC9wYXRoPjxwYXRoIGQ9Ik0yNDkuNiA0NzEuN2gtMTkuMmMtMzIuNCAwLTUyLjItMjMuNS00NC4yLTUyLjUgMTcuNy02NiAzNS41LTEzMiA1My4yLTE5OGgxMDguOWMtMTAuNiA2Ni0yMS4zIDEzMi0zMS45IDE5OC00LjQgMjktMzQuMyA1Mi41LTY2LjggNTIuNXoiIGZpbGw9IiNFQUVBRUEiIHAtaWQ9IjUyMDQiPjwvcGF0aD48cGF0aCBkPSJNMzg1LjQgNDcxLjdoLTE5LjJjLTMyLjQgMC01NC43LTIzLjUtNDkuOC01Mi41IDEwLjYtNjYgMjEuMy0xMzIgMzEuOS0xOThoMTA4LjljLTMuNSA2Ni03LjEgMTMyLTEwLjYgMTk4LTEuNCAyOS0yOC43IDUyLjUtNjEuMiA1Mi41eiIgZmlsbD0iI0NDQ0NDQyIgcC1pZD0iNTIwNSI+PC9wYXRoPjxwYXRoIGQ9Ik01MjEuMiA0NzEuN0g1MDJjLTMyLjQgMC01Ny4zLTIzLjUtNTUuNS01Mi41IDMuNS02NiA3LjEtMTMyIDEwLjYtMTk4SDU2NmMzLjUgNjYgNy4xIDEzMiAxMC42IDE5OCAxLjkgMjktMjMgNTIuNS01NS40IDUyLjV6IiBmaWxsPSIjRUFFQUVBIiBwLWlkPSI1MjA2Ij48L3BhdGg+PHBhdGggZD0iTTY1NyA0NzEuN2gtMTkuMmMtMzIuNCAwLTU5LjgtMjMuNS02MS4xLTUyLjUtMy41LTY2LTcuMS0xMzItMTAuNi0xOThINjc1YzEwLjYgNjYgMjEuMyAxMzIgMzEuOSAxOTggNC44IDI5LTE3LjUgNTIuNS00OS45IDUyLjV6TTkyOC41IDQ3MS43aC0xOS4yYy0zMi40IDAtNjQuOC0yMy41LTcyLjQtNTIuNS0xNy43LTY2LTM1LjUtMTMyLTUzLjItMTk4aDEwOC45YzI0LjggNjYgNDkuNiAxMzIgNzQuNSAxOTggMTEuMSAyOS02LjEgNTIuNS0zOC42IDUyLjV6IiBmaWxsPSIjQ0NDQ0NDIiBwLWlkPSI1MjA3Ij48L3BhdGg+PHBhdGggZD0iTTc5Mi44IDQ3MS43aC0xOS4yYy0zMi40IDAtNjIuMy0yMy41LTY2LjctNTIuNS0xMC42LTY2LTIxLjMtMTMyLTMxLjktMTk4aDEwOC45YzE3LjcgNjYgMzUuNSAxMzIgNTMuMiAxOTggNy45IDI5LTExLjkgNTIuNS00NC4zIDUyLjV6TTEzMC43IDgwOC4xaDc2MnYxMDBoLTc2MnoiIGZpbGw9IiNFQUVBRUEiIHAtaWQ9IjUyMDgiPjwvcGF0aD48cGF0aCBkPSJNNDM4LjQgNzMzLjFIMTk3LjdjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMTU0YzAtNi42IDUuNC0xMiAxMi0xMmgyNDAuN2M2LjYgMCAxMiA1LjQgMTIgMTJ2MTU0YzAgNi42LTUuNCAxMi0xMiAxMnoiIGZpbGw9IiNGMUYxRjEiIHAtaWQ9IjUyMDkiPjwvcGF0aD48cGF0aCBkPSJNODE3LjQgOTA3LjFINTg3Ljl2LTQwMmMwLTYuNiA1LjQtMTIgMTItMTJoMjA1LjVjNi42IDAgMTIgNS40IDEyIDEydjQwMnoiIGZpbGw9IiNDQ0NDQ0MiIHAtaWQ9IjUyMTAiPjwvcGF0aD48L3N2Zz4=" /></div>
    </div>
  </div>
</template>

<script>

 export default{
   props: ['info'],
   data(){
     return{
        isPickUp: false,

     }
   },
   methods: {
     pickMenu () {
        this.isPickUp = !this.isPickUp
        this.$emit('pick-up-menu', this.isPickUp)
      },
        handleMbSwitchMenu () {
          // this.$store.commit('frame/setMobileMenuVisible',!this.mobileMenuVisible)
        },
        isMb () {
          return document.body.clientWidth <=768
        }
   }
 }
</script>

<style lang="scss">
  .el-header{
    height: 56px !important;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.08);
    color: $--color-primary;
  }
  .top-bar-component{
    height: 100%;
    margin: 0 -20px;
    display: flex;
    position: relative;
    .blank{
      flex: 1;
    }
    .qrcode{
      display: flex;
      height: 100%;
      align-items: center;
      position: relative;
      padding: 0 16px;
      cursor: pointer;
      i{
        font-size: 1.4em;
        color: #7662FE;
        margin-right: 6px;
      }
      .border-span{
        position: absolute;
        width: 2px;
        height: 70%;
        margin: auto;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #F0F1F4;
      }
      .icon-text{
        font-size: 12px;
      }
    }
    .profile{
      min-width: 200px;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      border-left: 1px solid #E8E8E8;
      .avatar{
        height: 56px;
        width: 56px;
        background-color: #f5f5f5;
        text-align: center;
        &:after{
          content: '';
          display: inline-block;
          height: 100%;
          width: 0;
          vertical-align: middle;
        }
        img{
          height: 80%;
          vertical-align: middle;
        }
      }
      .text{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        padding-left: 17px;
        flex: 1;
        h6{
          font-size: 12px;
          color: #262D48;
        }
        p{
          font-size: 12px;
          color: #919FAD;
          width: 118px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    @media (max-width: 768px){
      .profile{
        width: 30px;
        min-width: 20px;
        border-left: 0px;
        i{
          font-size: 20px;
          color: #666666;
        }
      }
    }
    .tooltip{
      font-size: 14px;
    }
    .qrcode-img{
      position: absolute;
      top: 100%;
      right: 0;
      padding-top: 4px;
      box-shadow: 2px 2px 2px #ccc;
      z-index: 97;
      transform-origin: 50% 0;
      p{
        text-align: center;
        background-color: #fff;
        font-size: 12px;
        padding-bottom: 12px;
        color:  #262D48;
      }
      .img-wrap{
        width: 160px;
        height: 160px;
        font-size: 0;
        canvas{
          display: block;
          max-width: 160px !important;
          max-height: 160px !important;
        }
      }
    }

    .controls, .links{
      width: 112px;
      border-right: 1px solid #E8E8E8;
      display: flex;
      flex-direction: row;
      cursor: pointer;
      &>div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          background-color: #F5F5F5;
        }
        i{
          font-size: 1.5em;
          color: #666;
        }
      }
    }
    .links{
      width: 56px;
    }
    .options-selected{
      background-color: #f5f5f5;
    }
    .slide-enter, .slide-leave-to{
      transform: scale(1, 0);
      opacity: 0;
    }
    .slide-enter-active, .slide-leave-active{
      transition: 0.3s;
    }
    .slide-enter-to, .slide-leave{
      transform: scale(1, 1);
      opacity: 1;
    }
  }
</style>
