exports.HelloWorld = () => async ci => {
    const params = await ci.promptFor({ name: { description: "Name of user" } });
    await ci.addressChannels(`Hello ${params.name}`);
};
