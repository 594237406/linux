1. 发送Get请求

    curl http://www.centos.org

1. 下载

    ```
    # 将文件下载到本地并命名为mygettext.html
    curl -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html
    # 将文件保存到本地并命名为gettext.html
    curl -O http://www.gnu.org/software/gettext/manual/gettext.html
    ```

1. cookie
    
    ```
    #发送cookie
    curl -b "key1=val1;key2=val2;" http://localhost:8080
    #cookies保存到cookies文件
    curl -c cookies http://www.baidu.com
    #从文件中读取cookies
    curl -b cookies http://www.baidu.com
    ```

1. 提交数据

    ```
    #linux curl get方式提交数据：
    curl -G -d "name=value&name2=value2" http://localhost:8080 -b "key1=val1"
    #linux curl post方式提交数据：
    curl -d "name=value&name2=value2" http://www.baidu.com #post数据,数据放在request body内
    curl -d a=b&c=d&txt@/tmp/txt http://www.baidu.com  #post文件,数据放在request body内
    #以表单的方式上传文件,相当于设置form表单的method="POST"和enctype='multipart/form-data'两个属性。
    curl -F file=@/tmp/me.txt http://www.aiezu.com
    ```

1. 头部处理

    ```
    #设置http请求头信息：
    curl -A "Mozilla/5.0 Firefox/21.0" http://www.baidu.com #设置http请求头User-Agent
    curl -e "http://pachong.org/" http://www.baidu.com #设置http请求头Referer
    curl -H "Connection:keep-alive \n User-Agent: Mozilla/5.0" http://www.aiezu.com
    #设置http响应头处理：
    curl -I http://www.aiezu.com #仅仅返回header
    curl -D /tmp/header http://www.aiezu.com #将http header保存到/tmp/header文件
    ```

1. 认证

    ```
    curl -u aiezu:password http://www.aiezu.com #用户名密码认证
    curl -E mycert.pem https://www.baidu.com #采用证书认证
    ```

1. 其他：

    ```
    curl -# http://www.baidu.com #以“#”号输出进度条
    curl -o /tmp/aiezu http://www.baidu.com #保存http响应到/tmp/aiezu
    ```
