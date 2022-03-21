module.exports = function (plop) {
  plop.setWelcomeMessage('请选择需要创建的模式：')
  plop.setGenerator('component', require('./plop-tpls/component/prompt'))
  plop.setGenerator('view', require('./plop-tpls/view/prompt'))
  plop.setGenerator('store', require('./plop-tpls/store/prompt'))
}
