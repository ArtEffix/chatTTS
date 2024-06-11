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
                "message": "git clone --depth 1 https://gitee.com/arteffix/ChatTTS.git app"
            }
        },
        {
            "method": "shell.run",
            "params": {
                "message": "git clone --depth 1 https://www.modelscope.cn/pzc163/chatTTS.git model",
            }
        },
        {
            "method": "shell.run",
            "params": {
                "message": "pip3 install transformers vocos vector_quantize_pytorch gradio omegaconf",
            }
        },
        {
            "method": "shell.run",
            "params": {
                "message": "conda install -c conda-forge pynini=2.1.5 && pip install WeTextProcessing",
            }
        },
        {
            "method": "shell.run",
            "params": {
                "venv": "env",
                "path": "app",
                "message": "pip3 install -r requirements.txt  -i https://pypi.tuna.tsinghua.edu.cn/simple"
            }
        }
    ]
}
