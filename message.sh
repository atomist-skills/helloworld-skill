echo '{
    "channels": [
        "say-it-in-slack-skill"
    ],
    "body": {
	"attachments": [{ "fallback": "test" }],
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
