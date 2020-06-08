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

const gitHub = require("@atomist/skill/lib/project/github").gitHub;
const project = require("@atomist/skill/lib/project");
const secrets = require("@atomist/skill/lib/secrets");

exports.handler = async (ctx) => {
    await ctx.audit.log("Adding new comment");

    const params = await ctx.parameters.prompt({ owner: {}, repo: {}, issue: {}, body: {} });
    const credential = await ctx.credential.resolve(secrets.gitHubAppToken(params));

    const api = gitHub(project.gitHubComRepository({ owner: params.owner, repo: params.repo, credential }));
    await api.issues.createComment({
        owner: params.owner,
        repo: params.repo,
        issue_number: +params.issue,
        body: params.body,
    });

};
