

async function reqRoom(){
    const roomListJson = await fetch('https://api.miaaoo.com/list', {
        method: "POST"
    })
    if(!roomListJson.ok) {
        throw new Error(`HTTP ${roomListJson.status} Error`)
    }
    const data = await roomListJson.json()
    data.results.forEach(room => {
        if(room.customProperties.BroadcastSetting == 3){
            console.log(`[friend.js] [#] ${room.customProperties.worldName} 可以加入`)
            const roomInformation = document.createElement('div')
            roomInformation.innerHTML =  `
<br>
<div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-6 mdui-col-lg-4">
<div class="mdui-card">
    <div class="mdui-card-primary">
        <div class="mdui-card-primary-title">${room.customProperties.worldName}</div>
        <div class="mdui-card-primary-subtitle">
            ${room.customProperties.hostName} - ${room.customProperties.version}
            <br>
            ${room.customProperties.worldType}  (${room.customProperties.MemberCount}/${room.customProperties.MaxMemberCount})
        </div>
    </div>
    <div class="mdui-card-actions">
        <button class="mdui-btn mdui-ripple" onclick="joinRoom('${room.roomfrom}', '${room.id}', '${room.sessionRef.name}')">加入</button>
        <button class="mdui-btn mdui-ripple">分享</button>
    </div>
</div>
<div>
<br>`
            document.getElementById('roomShow').append(roomInformation)
        }
        else{
            console.log(`[friend.js] [ ] ${room.customProperties.worldName} 不可以加入`)
        }
    })
}

async function joinRoom(rf, ri, sn ){
    const XUID = localStorage.getItem('friendXuid')
    const ADDID = localStorage.getItem('friendAddId')
    let urlJoin = ''
    if(XUID == null){
        urlJoin = `https://api.miaaoo.com/join?roomfrom=${rf}&roomid=${ri}&sessionname=${sn}&addid=${ADDID}`
    }
    else{
        urlJoin = `https://api.miaaoo.com/join?roomfrom=${rf}&roomid=${ri}&sessionname=${sn}&addid=${ADDID}&userxuid=${XUID}`
    }
    mdui.snackbar({message: '准备中...'})
    const response = await fetch(urlJoin, {
        method: "POST"
    })
    if(response.status == 200){
        mdui.snackbar({message: '广播成功！请进入游戏接受邀请！'});
        startMinecraft()
    }
    else{
        mdui.snackbar({message: '请重试！'});
    }
}

function setUpFriend(){
    if(localStorage.getItem('friendAddId') === null){
        localStorage.setItem('friendAddId','5')
    }
    if(localStorage.getItem('friendXuid') === null){
        // localStorage.setItem('friendXuid','')
    }
    document.getElementById('friendSet').innerHTML = `<h1>联机设置</h1><p>XUID 前往 <a href='https://www.cxkes.me/xbox/xuid'>CXKES.ME</a> 查询你的（注意：请复制XIUD-DEC）</p><p><a href="https://mc.miaaoo.com/">第三方联机供应商官网</a></p>
    <div class="mdui-row-xs-2"><div class="mdui-col"><button onclick='setUpConfig("friendXuid")' class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">修改XUID</button></div><div class="mdui-col"><button onclick='setUpConfig("friendAddId")' class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">修改ADDID</button></div></div>`
}

function setUpConfig(cfg){
    const cfgLocal = localStorage.getItem(cfg)
    const cfgText = prompt(`更改你的${cfg}`,cfgLocal)
    localStorage.setItem(cfg,cfgText)
}

setUpFriend()
reqRoom()