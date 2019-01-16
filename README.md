# 如何同步Git

## 1. 什么是Git

Git是什么？

Git是目前世界上最先进的分布式版本控制系统（没有之一）。

Git有什么特点？简单来说就是：高端大气上档次！

那什么是版本控制系统？

这个软件用起来就应该像这个样子，能记录每次文件的改动：

版本|文件名|用户|说明|日期
-|-|-|-|-
1|service.doc|张三|删除了软件服务条款5|7/12 10:38
2|service.doc|张三|增加了License人数限制|7/12 18:09
3|service.doc|李四|财务部门调整了合同金额|7/13 9:51
4|service.doc|张三|延长了免费升级周期|7/14 15:17

这样，你就结束了手动管理多个“版本”的史前时代，进入到版本控制的20世纪。

## 2. 本地Git
### 2.1 配置git

1. 安装git在此不再赘述。
2. 安装完成后，需要在命令行`Git Bash`里输入：
   ```
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"
   ```
   注意，如果使用了`--global`参数，表明机器上的所有Git仓库都会使用这个配置。（也可另外单独配置）

3. 创建一个目录，如`learnGit`，在目录中打开`Git Bash`输入：
   ```
   git init
   ```
   这样可以创建一个空的仓库，目录下多了`.git`的隐藏目录。
### 2.2 版本控制与管理
在管理本地仓库时，只需要`git add`和`git commit`两个命令。
添加文件到Git仓库，分两步：
1. 使用以下命令将工作区的文件添加到暂存区，可反复多次使用，添加多个文件；
    ```
    git add <file> (or .)
    ```
2. 使用以下命令将暂存区的文件添加到版本库中，完成；
   ```
   git commit -m <message>
   ```
3. 使用命令`git status`，查看工作区的状态； 
4. 如果需要撤销工作区修改，`git checkout -- <file>`，把工作区的修改全部撤销；
5. 如果需要撤销暂存区修改，`git reset HEAD <file>`，把暂存区的修改全部撤销，然后回到第4步。
## 3. 远程仓库github

下面分两种情况：
### 3.1 把本地内容同步到远程仓库
1. 首先在github上创建好repository，如`learnGit`；
2. 在本地的`learnGit`文件夹下运行命令：
   ```
   git remote add origin git@github.com:用户名/learngit.git
   ```
   添加后，远程库的名字就是`origin`，这是Git默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。
3. 把本地库的所有内容推送到远程库上:
   ```
   git push -u origin master
   ```
    把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。

    由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令，变成：
    ```
    git push origin master
    ```
### 3.2 把远程仓库内容同步（克隆）到本地
1. 创建一个本地文件夹`learnGit2`，用命令`git clone`克隆一个本地库：
   ```
   git clone git@github.com:用户名/learngit.git ./
   ```
   默认的`git://`使用`ssh`，速度更快。ssh放在C:\Users\用户名\\.ssh中，共有三个文件：
   `id_rsa`，`id_rsa.pub`，`known_hosts`。

    输入以下命令切换到`ssh`登陆，或者远端更改版本库名称：
    ```
    git remote set-url origin git@github.com:用户名/learngit.git
    ```
2. 获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）

    ```
    git pull --rebase origin master
    ```
## 4. 分支管理
未完待续