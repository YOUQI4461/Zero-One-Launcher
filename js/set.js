function setMcUrl(){
    const mcUrlFor = localStorage.getItem('mcUrl')
    const mcUrlSet = prompt(`默认：minecraft://\n现在：${mcUrlFor}`)
    if(mcUrlSet != null){
      localStorage.setItem("mcUrl", mcUrlSet);
    }
}

if(localStorage.getItem('mcUrl') == null){
    localStorage.setItem('mcUrl', "minecraft://")
}

document.getElementById('mcUrlTip').innerText = localStorage.getItem('mcUrl')