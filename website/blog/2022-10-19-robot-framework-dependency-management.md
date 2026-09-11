---
title: "Robot Framework dependency management"
date: 2022-10-19
authors: [tatu, eero, miikka]
tags: [robot-framework, ci-cd-pipeline, devops]
slug: robot-framework-dependency-management
# medium_url: https://medium.com/@RobotFramework/robot-framework-dependency-management-4ff3fbb5b279
---

Robot Framework 6.0 is out! But wait, what does it mean for your CI pipeline?

Do you have to manually update it or is there a better approach?

Eficode, one of our [Robot Framework Foundation](/blog/robot-framework-foundation) members, has written a blog about managing test automation dependencies with minimum effort.

{/* truncate */}

Please find their insight below. You may check the original blog [here](https://www.eficode.com/blog/how-the-experts-manage-test-automation-dependencies-with-minimal-effort).

## How experts manage test automation dependencies with minimal effort

A familiar challenge for most test automation experts is managing their Robot Framework dependencies. Updating them constantly is at best a tedious chore; at worst, you can break your whole CI pipeline with a single update.

However, if you don’t update your dependencies regularly, you will miss useful features and expose your pipeline to security risks. In this post, we look at a modern way you can manage your Robot Framework dependencies: automation.

## Basic dependency management

First of all, the best way to control your Robot Framework dependencies is to have them all in a single [requirements.txt](https://pip.pypa.io/en/stable/reference/requirements-file-format/) file.

**robotframework==3.0.4**

**junitparser==1.2.2**

**requests==2.27.1**

**PyYAML==3.13**

*An example of four dependencies with pinned version numbers (major, minor, and patch)*

In [semantic versioning](https://semver.org/), the first two numbers of a version number should refer to major and minor versions.

These versions should not be wildcards (\*) in your development or main branch because the changes to them may break your CI pipeline. In other words, the versions should be pinned.

Using a wildcard with patch versions is usually safe, but developers often interpret semantic versioning in different ways. An update one developer thought was an inconsequential patch release might still end up breaking your pipeline.

On the other hand, it may be even riskier not to use a wildcard with patch versions. By not using a wildcard, you need to remember to follow the patch releases and update them manually. If (when) you eventually forget to do this, you once again expose your pipeline to security breaches.

## Our two ways of versioning dependencies

Here at Eficode, we use two different approaches. One is more manual and the other more automated.

## Pinning major and minor versions that are updated manually

In the first approach, you pin major and minor versions of dependencies in a **requirements.txt** file and manually update them periodically — typically every couple of months.

As a general rule of thumb, in projects where the dependencies are complex, this works really well: any updates to major or minor versions usually require some manual work with the test harness anyway.

## Pinning the whole version and automating the pipeline

For relatively straightforward dependencies — especially security-critical ones — we recommend pinning the whole version (major, minor, and patch) and having an automated pipeline.

Configure this pipeline to update the dependencies for you weekly and report if new versions are easy to update or if the update is going to break something. The pipeline can e.g., report directly to your Slack, so you don’t miss the report.

Although there are a million ways to make such a pipeline, here’s an example of a simple implementation:

![](/img/blog/1_9Fx4xmblUSv6d6l4gpXY-Q.png)

*Go see the* [*post_to_slack.py*](https://gist.github.com/Tattoo/528eb25428ac16cb6d2e063960514cdc) *script to see the rest of the example*

After scheduling the job to run e.g. weekly, the team gets the following message if the job succeeds:

![](/img/blog/0_9enrcHVjbqTAnd_d.png)

The team can then update the dependencies manually.

Of course, you could make the pipeline even more elaborate by making it automatically open a merge request with new versions for pinned dependencies. With our example, we just want to demonstrate that even a relatively simple solution can make updating the dependencies a breeze.

## To sum up: “lagom” is best

In the end, to maintain your test automation effectively, you also need to maintain the dependencies it uses. Don’t let the constant updating of dependencies interrupt your actual, valuable work and break your pipeline. But you do need to update them with some regularity to at least keep your pipeline secure.

As with many things in life, the Swedish concept of [lagom](https://en.wikipedia.org/wiki/Lagom) proves useful (thank you, Swedish colleagues). There is no direct English equivalent term, but it roughly translates to “the right amount is the best.”

The original authors of the text are Tatu Kairi and Eero Laine.

The intro text and hard work of copy-pasting has been done by

yours truly,

*Miikka Solmela*

Executive Director, Robot Framework Foundation
