export const graphConfig = {
  autoResize: true, // 画布自适应
  // 画布配置
  background: {
    color: '#F2F7FA'
  },
  // 网格线
  grid: {
    visible: true,
    type: 'doubleMesh',
    args: [
      {
        color: '#eee', // 主网格线颜色
        thickness: 1 // 主网格线宽度
      },
      {
        color: '#ddd', // 次网格线颜色
        thickness: 1, // 次网格线宽度
        factor: 4 // 主次网格线间隔
      }
    ]
  }
}
