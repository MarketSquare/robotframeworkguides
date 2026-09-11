---
title: "Integrating AI into Your Robot Framework Strategy: What to Expect at RoboCon 2026"
date: 2025-12-29
authors: [krzysztof]
tags: [robocon, software-testing, test-automation, ai, robot-framework]
slug: integrating-ai-into-your-robot-framework-strategy-what-to-expect-at-robocon-2026
# Original: keeps search engines pointing at the canonical source until
# the Medium post is redirected or removed.
# medium_url: https://medium.com/@RobotFramework/integrating-ai-into-your-robot-framework-strategy-what-to-expect-at-robocon-2026-99ed1d7351c3
---
*A preview of our upcoming RoboCon 2026 talk*

> **RoboCon 2026 Preview Series**

> In the lead-up to RoboCon 2026, we’re publishing a series of guest posts from contributors across the conference program. Each post previews a session and highlights ideas, approaches, or experiences related to Robot Framework.

{/* truncate */}

> This post was written by **Krzysztof Żminkowski**, member of the RoboCon 2026 organizing team and one of the workshop organizers, as part of the RoboCon 2026 Preview Series.

![](/img/blog/1_mxWwIzLNuf6jj9loPkliRA.jpeg)

The conference theme 2026 is the Aurora Borealis.

The intersection of Artificial Intelligence and test automation is no longer a theoretical discussion; it is a practical shift in how we build and maintain automation suites. At RoboCon 2026, the schedule features several sessions dedicated to bridging the gap between Large Language Models (LLMs) and the Robot Framework ecosystem.

If you are evaluating how to move beyond simple prompt engineering and into robust, AI-enhanced automation, these eight sessions offer a comprehensive look at the current state of the art.

1.  **Visual Workflows and Orchestration**

**Speaker: Namik Delilovic**

Automation rarely exists in a vacuum. Namik Delilovic introduces n8n-nodes-robotframework, a community node designed to run Robot Framework within n8n’s visual workflows. This approach allows teams to trigger Robot Framework tasks based on external events — such as IoT alerts or database updates — and process the results through AI analysis nodes.

It provides a self-hosted, visual way to integrate Robot Framework with hundreds of other APIs and messaging services.

2\. **Eliminating AI Hallucinations in Test Generation**

**Speaker: Many Kasiriha**

A common barrier to using AI in testing is the hallucination of non-existent keywords. RF-MCP addresses this by executing steps in a real Robot Framework runtime before generating code. By using LibDoc to discover keywords from your actual libraries, the tool ensures that the AI only suggests valid, executable steps.

This results in generated suites that include proper imports and validated logic, suitable for both engineers and business analysts.

3\. **Intent-Based Automation and Computer Vision**

Speakers: Abdelkader Hassine & Pavlo Ivashchenko

Moving away from brittle locator-based definitions, this session explores an AI Agent that interprets high-level testing goals. By combining LLMs with Visual Language Models (VLMs), the agent uses keywords like Agent.Do and Agent.Check to interact with GUI elements based on visual context and intent.

This prototype aims to create a more resilient, self-adaptive testing approach for applications with rapidly evolving user interfaces.

4\. **The Impact of GenAI on Engineering Education**

**Speaker: Arttu Taipale**

Beyond the tools themselves, the rise of code-by-prompt development is fundamentally changing how we learn and work. Arttu Taipale discusses the shifting role of the developer when knowing fundamentals is no longer a strict requirement for producing code.

The talk examines how open-source tools like Robot Framework might evolve to stay relevant in an ecosystem where AI models — rather than just humans — are primary consumers of documentation and code.

5\. **RPA and Local AI Agents: Privacy Meets Power**

**Speaker: Joshua Gorospe**

One of the biggest hurdles in enterprise AI is data privacy. Joshua Gorospe addresses this by demonstrating how to combine Robot Framework RPA with locally running AI agents.

Using tools like Ollama for private LLM instances and the Codename Goose framework, this talk shows how to automate both sequential and parallel tasks without sending sensitive data to the cloud. It is a practical look at building a powerful, private automation ecosystem on your own hardware.

6\. **Case Study: AI-Enhanced SAP Automation in Banking**

**Speakers: Yibo Wang & Hazem Khaled**

In highly regulated sectors like banking, consistency and traceability are non-negotiable. This session details a comprehensive SAP testing solution built for a major German bank.

The authors highlight how they use Generative AI not just for testing, but for Quality Governance — including an AI-driven Pull Request Analyzer that ensures code changes align perfectly with Jira user stories. Attendees will see how AI elevates documentation quality and test governance in complex enterprise landscapes.

7\. **Automated Bug Classification and Defect Triage**

**Speakers: Mohamed Sedky & Rwan Al-Halwan**

Extracting actionable insights from thousands of test logs is often a manual bottleneck. This talk introduces an automated pipeline that uses LLM reasoning to interpret Robot Framework reports and automatically generate structured bug tickets.

By classifying failures — separating functional bugs from environment issues — this AI-driven framework pushes detailed reports directly to Jira or TFS, significantly accelerating the release cycle.

8\. **Eliminating Global Resource Files with AI**

**Speaker: Silken Kleer**

Every long-term project eventually faces the import-everything anti-pattern: massive global resource files that make maintenance a nightmare. Silken Kleer presents a real-world case study on using AI to handle the grunt work of refactoring these files.

By utilizing AI for memory simulation and import redistribution, this session provides concrete strategies for breaking up monolithic files into manageable, clean code without the overwhelming manual effort.

Whether you are looking for new tools to implement immediately or a deeper understanding of where the industry is headed, these sessions provide a balanced perspective on AI’s role in modern automation.

> **Part of the RoboCon 2026 Preview Series**

> This post is part of a series highlighting sessions and ideas from across the RoboCon 2026 program. More previews will follow, covering a wide range of Robot Framework–related topics, use cases, and industries.

> *👉 The full RoboCon 2026 program is available at robocon.io*
