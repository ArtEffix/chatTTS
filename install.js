module.exports = {
    "run": [
        {
            "method": "shell.run",
            "params": {
                "message": "git pull"
            }
        },
        {
            "method": "shell.run",
            "params": {
                "message": "git clone https://gitee.com/arteffix/ChatTTS.git app"
            }
        },
        {
            "method": "shell.run",
            "params": {
                "message": "git clone https://www.modelscope.cn/pzc163/chatTTS.git model",
            }
        },
        {
            "method": "shell.run",
            "params": {
                "venv": "env",
                "path": "app",
                "message": "pip install -r requirements.txt  -i https://pypi.tuna.tsinghua.edu.cn/simple"
            }
        }
    ]
}
