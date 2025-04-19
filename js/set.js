function setMcUrl(){
  const mcUrlFor = localStorage.getItem('mcUrl')
  const mcUrlSet = prompt(`默认：minecraft://\n现在：${mcUrlFor}`, mcUrlFor)
  localStorage.setItem('mcUrl',mcUrlSet)
  console.log(`我被改成${mcUrlSet}为启动方式了！`)
}
function setZeroIframe(){
  const zeroIframe = localStorage.getItem('ZeroIframe')
  const zeroIframeNow = prompt('URL',zeroIframe)
  localStorage.setItem('zeroIframe',zeroIframeNow)
}

if(localStorage.getItem('mcUrl') == null){
  localStorage.setItem('mcUrl', "minecraft://")
}
if(localStorage.getItem('zeroIframe') == null){
  localStorage.setItem('zeroIframe','cn.bing.com')
}

document.getElementById('mcUrlTip').innerText = localStorage.getItem('mcUrl')
const zeroIframeNowUrl = localStorage.getItem('zeroIframe')
document.getElementById('zeroIframeE').innerHTML = `<iframe src='${zeroIframeNowUrl}' weight='100%' height='300'></iframe>`