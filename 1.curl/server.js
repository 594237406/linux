var koa = require('koa');
var app = koa();
var koaBody   = require('koa-body');
app.use(koaBody({formidable:{uploadDir: __dirname}}));
app.use(function *(next){
    this.body="";
    console.log('get参数',this.query);
    console.log('request body',this.request.body);
    console.log('cookies:key1',this.cookies.get('key1'));
});

app.listen(8080);