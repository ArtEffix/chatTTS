module.exports = {
    "daemon": true,
    "run": [
        {
            "method": "shell.execute",
            "params": {
                "path": "app",
                "message": "python webui.py --local_path=../model"
            }
        },
    ]
}
