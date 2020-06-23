echo '{
    "channels": [
        "say-it-in-slack-skill"
    ],
    "body": {
    "fallback": "test",
    "blocks": "[\n        {\n            \"type\": \"section\",\n            \"text\": {\n                \"type\": \"mrkdwn\",\n                \"text\": \"Hello, this is a block message\"\n            }\n        },\n        {\n            \"type\": \"divider\"\n        }\n    ]"
}
}' > $ATOMIST_MESSAGES_DIR/test.json
