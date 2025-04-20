if(localStorage.getItem('debug') == 'V'){
  var vConsole = new window.VConsole()
  console.log('Debug On')
  mdui.snackbar({
    message: '你开启了调试功能！',
    buttonText: '关闭',
    onClick: function(){},
    onButtonClick: function(){
        localStorage.setItem('debug','X')
      mdui.alert('关闭了调试模式！')
    }
  });
}
else{
    console.log('Debug Off')
}

function startDebug(){
    localStorage.setItem('debug','V')
    mdui.alert('开启了调试模式哦！')
    location.reload()
}