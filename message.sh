echo '{
    "users": [
        "cd"
    ],
    "body": {
        "fallback": "Hello, this is a block message",
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Hello, this is a block message"
                }
            },
            {
                "type": "divider"
            }
        ]
    }
}' > $ATOMIST_MESSAGES_DIR/test.json
