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

exports.handler = async (ctx) => {
     const issue = ctx.data.Issue[0];
     await ctx.message.send(
         `Bla Issue activity on ${issue.number}: ${issue.title}`,
         { channels: issue.repo?.channels?.map(c => c.name) || ctx.configuration[0].parameters.channel });
};
