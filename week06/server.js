var http=require("http");

const server=http.createServer((req,res)=>{
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Foo','bar');
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end(
        `
        <html meta=a>
        <head>
        <style>
        body div #myid{
            width:100px;
            border:1px solid #fff000;
        }
        body div img{
            width:30px;
        }
        </style>
        </head>
        <body>
        <div>
        <img id="myid"/>
        <img/>
        </div>
        </body>
        </html>
        `
    );
})
server.listen(9090);
console.log(server);