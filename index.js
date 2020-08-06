/*
 * Copyright © 2020 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const skill = require("@atomist/skill");

const helloWorld = async ctx => {
	const msg = {
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: "Hello World, :wave:"
				}
			},
			{
				type: "actions",
				elements: [
					skill.slack.block.elementForCommand({
						type: "button",
						text: {
							type: "plain_text",
							text: "Say hi!",
						},
						value: "click_me_123",
					}, "helloWorld", { response: "hi"}),
				]
			}
		]
	};

	await ctx.message.send(msg, {users: ["cd"]});
	return skill.status.success();
};

exports.entryPoint = skill.entryPoint({
	helloWorld,
});
