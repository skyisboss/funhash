export const ws = {
    ws: {} as WebSocket,
    timeout: 5000,
    pingInterval:3000,//心跳连接时间
    lockReconnect: false,
    heartTimer: {} as NodeJS.Timeout,//心跳定时器
    serverTimer: {} as NodeJS.Timeout,//服务器超时 定时器
    reconnectTimer: {} as NodeJS.Timeout,//断开 重连倒计时
    reconnectCount: 0, // 重连统计
    reconnectMax: 10, // 最大重连次数
    handler: {} as {[x:string]: any},
    create(url?: string){
        try {
            if ('WebSocket' in window) {
                this.ws = new WebSocket(url || "ws://localhost:3000/ws");

                this.ws.onopen = (event) => {
                    console.log("WebSocket:已连接");
                    //心跳检测重置
                    this.resetPing().ping();
                    // 注册自定义回调
                    // if (this.handler?.onopen) {
                    //     this.handler.onopen(event)
                    // }
                }
                this.ws.onmessage = (event) => {
                    const message = JSON.parse(event.data)
                    console.log("服务端-->", message);

                    if (message.cmd == 'pong') {
                        this.resetPing().ping();
                        return;
                    }
                    // 注册自定义回调
                    if (this.handler?.onmessage) {
                        this.handler.onmessage(message)
                    }
                }
                this.ws.onerror = (event) => {
                    // 注册自定义回调
                    if (this.handler?.onerror) {
                        this.handler.onerror(event)
                    }
                    console.log("WebSocket:发生错误");
                    this.reconnect();
                }
                this.ws.onclose = (event) => {
                    // 注册自定义回调
                    if (this.handler?.onclose) {
                        this.handler.onclose(event)
                    }
                    console.log("WebSocket:已关闭");
                    this.resetPing();//心跳检测
                    this.reconnect();//重连
                }
                // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，
                // 防止连接还没断开就关闭窗口，server端会抛异常。
                window.onbeforeunload = () => this.close();
            }
        } catch (error) {
            console.log('catch' + error);
        }
    },
    ping(){
        this.heartTimer && clearTimeout(this.heartTimer);
        this.serverTimer && clearTimeout(this.serverTimer);
        this.heartTimer = setTimeout(()=>{
            this.send(JSON.stringify({cmd: 'ping'}));
            //超时关闭，超时时间为5s
            this.serverTimer = setTimeout(()=>{
                this.close()
                console.log('超时关闭服务');
            }, this.timeout);
        }, this.pingInterval)
    },
    resetPing(){
        this.reconnectCount = 0;
        clearTimeout(this.heartTimer);
        clearTimeout(this.serverTimer);
        return this;
    },
    reconnect(){
        if (this.reconnectCount == this.reconnectMax) {
            console.log('达到最大重连次数');
            return
        }
        //设置lockReconnect变量避免重复连接
        if (this.lockReconnect) {
            return;
        }
        this.reconnectCount++
        this.lockReconnect = true;
        this.reconnectTimer && clearTimeout(this.reconnectTimer);
        this.reconnectTimer = setTimeout(()=> {
            console.log('重连中...');
            this.lockReconnect = false;
            this.create()
        }, 4000);
    },
    close(){
        this.ws.close()
    },
    send(data:string){
        this.ws.send(data)
    },
}