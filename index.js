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
	RebaseOnPush: helloWorld,
});
