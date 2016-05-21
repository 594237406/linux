1.查看端口号被占用情况
lsof -i tcp:3001 -n
lsof -i udp:3001 -n
2.杀端口
kill pid