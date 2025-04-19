function startMinecraft(){
    console.log('瑞典原神，启动！')
    const startMinecraftUrl = document.createElement('a')
    startMinecraftUrl.href = localStorage.getItem("mcUrl");
    startMinecraftUrl.style.display = 'none'
    document.body.appendChild(startMinecraftUrl)
    startMinecraftUrl.click()
    document.body.removeChild(startMinecraftUrl)

    setTimeout(() => {
        // window.location = ""
    }, 500)
}