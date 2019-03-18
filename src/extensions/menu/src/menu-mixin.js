export default {
  computed: {
    indexPath() {
      const path = [{
        id: this.item.id,
        index: this.index,
        item: this.item,
        siblings: this.siblings,
      }];
      let parent = this.$parent;
      const { visited } = this.rootMenu;
      if (this.rootMenu.isCollapsed) { // 折叠态时直接用循环获取indexPath在补上顶级
        while (parent.$options.componentName !== 'unex-aside-menu') {
          if (parent.index) {
            path.unshift({
              id: parent.item.id,
              index: parent.index,
              item: parent.item,
              siblings:parent.siblings
            });
          }
          parent = parent.$parent;
        }
        path.unshift({
          id: visited[0].item.id,
          index: visited[0].index,
          item: visited[0].item,
          siblings: visited[0].siblings
        });
      } else { // 打开态通过visited计算indexPath

        for (let i = visited.length - 1; i >= 0; i--) {
          path.unshift({
            id: visited[i].item.id,
            index: visited[i].index,
            item: visited[i].item,
            siblings: visited[i].siblings
          });
        }
      }
      return path;
    },
    isOpen() { // 目前根据id为唯一标识
      const opened = this.rootMenu.opened;
      return opened.some(open => open.id === this.item.id);
    }
  }
}
