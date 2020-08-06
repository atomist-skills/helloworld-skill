echo '{
    "users": [
        "cd"
    ],
    "body": {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": ":wave: Hello World"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "Close"
                        },
                        "action_id": "command::close"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "Say hi!"
                        },
                        "action_id": "modal::say-hi"
                    }
                ]
            }
        ]
    },
    "options": {
        "actions": [
            {
                "id": "close",
                "command": "close",
                "parameters": []
            }
        ],
        "modals": [
            {
                "id": "say-hi",
                "view": {
                    "type": "modal",
                    "title": {
                        "type": "plain_text",
                        "text": "Greeting"
                    },
                    "blocks": [
                        {
                            "type": "input",
                            "block_id": "message",
                            "label": {
                                "type": "plain_text",
                                "text": "Message"
                            },
                            "element": {
                                "type": "plain_text_input",
                                "action_id": "input",
                                "placeholder": {
                                    "type": "plain_text",
                                    "text": "Your message"
                                },
                                "multiline": true
                            }
                        }
                    ],
                    "close": {
                        "type": "plain_text",
                        "text": "Cancel"
                    },
                    "submit": {
                        "type": "plain_text",
                        "text": "Send"
                    }
                }
            }
        ]
    }
}' > $ATOMIST_MESSAGES_DIR/test.json
