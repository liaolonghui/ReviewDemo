## 为什么使用了.gitignore文件也不能忽略一些文件的上传？
使用git rm -r --cached . 命令清除缓存即可。因为.gitignore文件还未添加之前需要忽略的文件就已经被git追踪了，所以要清除本地缓存。
