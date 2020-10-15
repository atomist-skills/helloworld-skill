# Copyright © 2020 Atomist, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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
