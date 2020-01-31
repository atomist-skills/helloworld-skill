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

const project_1 = require("@atomist/skill/lib/project");
const secrets_1 = require("@atomist/skill/lib/secrets");

exports.handler = async (ctx) => {
    const params = await ctx.parameters.prompt({ owner: {}, repo: {} });
    const credential = await ctx.credential.resolve(secrets_1.gitHubAppToken(params));
    const project = await ctx.project.clone(project_1.gitHubComRepository(Object.assign(Object.assign({}, params), { credential })));
    await ctx.message.respond(`Project ${params.owner}/${params.repo} has ${await project.totalFileCount()} files`);
};
