---
title: "Beyond the Core: A Deep Dive into the RoboCon 2026 Ecosystem Talks"
date: 2026-01-23
authors: [krzysztof]
tags: [robocon, qa-engineering, software-testing, robot-framework, test-automation]
slug: beyond-the-core-a-deep-dive-into-the-robocon-2026-ecosystem-talks
# Original: keeps search engines pointing at the canonical source until
# the Medium post is redirected or removed.
# medium_url: https://medium.com/@RobotFramework/beyond-the-core-a-deep-dive-into-the-robocon-2026-ecosystem-talks-bff63cc5c9d9
---
> The future of the ecosystem is looking bright.

> **RoboCon 2026 Preview Series**

> In the lead-up to RoboCon 2026, we’re publishing a series of guest posts from contributors across the conference program. Each post previews a session and highlights ideas, approaches, or experiences related to Robot Framework.

{/* truncate */}

> This post was written by **Krzysztof Żminkowski**, member of the RoboCon 2026 organizing team and one of the workshop organizers, as part of the RoboCon 2026 Preview Series.

Let’s be honest — Robot Framework is a powerhouse, but the ecosystem is what gives it wings. It’s the difference between having a high-end engine and having a fully customized, race-ready vehicle. As we look ahead to RoboCon 2026, the lineup for the ecosystem track is shaping up to be one of the most practical and forward-thinking yet.

Whether you’re a veteran automation architect or a specialist looking to solve that one annoying “how do I test this legacy message queue?” problem, RoboCon 2026 is where the answers are coming to light. We’ve managed to get a look at the scheduled ecosystem talks, and if you haven’t booked your tickets yet, these highlights might just be the push you need.

![](/img/blog/1_mxWwIzLNuf6jj9loPkliRA.jpeg)

The conference theme 2026 is the Aurora Borealis.

### The Rise of Visual Automation: Robot Framework Meets n8n

Automation is rarely a lonely island anymore. Namik Delilovic is set to present **“Bringing Robot Framework into n8n Visual Workflows,”** introducing a community node that allows you to run Robot Framework tasks inside n8n’s visual canvas.

Imagine a world where a Slack alert or an IoT sensor trigger kicks off a Robot task, which then hands off data to an AI node for sentiment analysis before updating your CRM. This session promises to show us how to bridge the gap between low-code orchestration and high-power test automation. It’s the kind of cross-tool synergy that makes you feel like a literal wizard of the workflow.

### Scaling and Visibility: Performance Meets Data

Performance testing and visibility are the twin pillars of any mature automation strategy, and RoboCon 2026 isn’t skimping on either.

Dave Amies and Arkadiusz Kuczyński will be giving us a much-anticipated **RFSwarm Update**, sharing the roadmap for this load-testing powerhouse and discussing how community contributions from projects like NiceProject are pushing the tool further.

But what good is a test run if nobody can understand the results? Tim de Groot will be showcasing the evolution of **RobotDashboard**. Moving beyond simple visualization, Tim will demonstrate how this open-source project is becoming a hub for identifying flaky tests and analyzing long-running suites through custom database integrations.

If you’re tired of explaining to stakeholders why a “Red” result isn’t always a disaster, this talk is your new best friend.

### The “Must-Have” Foundations: Databases and Queues

Sometimes, we just need to get back to the basics — and by basics, we mean the heavy-duty infrastructure that keeps the world turning.

Andre Mochinin is returning with a vital **Database Library Update**. With a slew of improvements and changes over the last two years, this session is a must-attend for anyone who needs to ensure their data validation is as robust as their UI tests.

And for those working in the deep trenches of enterprise systems, Elout van Leeuwen and Niels Janssen are introducing **MQLibrary**. Specifically designed for IBM MQ — the backbone of many government and banking systems — this wrapper for pymqi finally brings native, production-like message queue interaction to the Robot Framework ecosystem.

No more clunky workarounds or “simulating” queues with folders; it’s time to test the real thing.

### Engineering for Speed: Medusa and the Art of Caching

If your test suite currently takes longer to run than a director’s cut of a fantasy trilogy, you’ll want a front-row seat for Edin Tarić.

He’ll be introducing **Medusa**, a resource-aware parallel execution tool. By using suite metadata to dynamically avoid resource conflicts, Edin’s team managed to cut 50 hours of sequential testing down to a mere five. That’s not just a speed boost; it’s a lifestyle change for your CI/CD pipeline.

To keep things even snappier, Sander van Beek will walk us through the **“5 Levels of Caching.”** We often forget that the fastest test is the one you don’t have to repeat. Sander will explore everything from simple test variables to persistent cache files that survive between runs, proving that efficiency is often just about “doing fewer things” by being smarter about what we’ve already done.

### Improving the Developer Experience (DX)

Developer Experience is a recurring theme for 2026, with a focus on making Robot Framework projects more maintainable and understandable.

Marc David Sutjipto and Julian Blanke will present **RoboView**, a VS Code extension designed to provide deep insights into your keyword structures through tabular and graph views. It’s the perfect tool for those moments when you realize your “simple” project has evolved into a 500-keyword labyrinth.

For teams looking to involve domain experts without forcing them to learn Python, Marduk Bolanos will showcase **KeyTA 2.0**. This web-based interface combines the familiarity of an Excel sheet with the flexibility of a REPL, allowing non-coders to execute keywords and even resume failed tests from a specific step.

It’s about democratizing automation without sacrificing power.

### The Eyes of the Robot: Advanced Image Recognition

Finally, Hélio Guilherme will dive into the visual side of automation with a session on **SikuliLibrary** and **ImageHorizonLibrary**.

When DOM identifiers are missing or too expensive to maintain, image recognition becomes the hero we need. Hélio will explore the “What, Why, and How” of these libraries, including a look at the future of SikuliLibrary as it migrates toward a more Python-centric, JRE-free integration.

### The Takeaway

The RoboCon 2026 ecosystem track is shaping up to be a masterclass in solving real-world automation headaches. From high-level AI orchestration to low-level message queues, the message is clear: the community is building the tools we need to stay ahead of the curve.

We’ll see you in Helsinki — make sure your laptop is charged and your curiosity is piqued. The future of the ecosystem is looking bright.

The future of the ecosystem is looking bright.

> **Part of the RoboCon 2026 Preview Series**

> This post is part of a series highlighting sessions and ideas from across the RoboCon 2026 program. More previews will follow, covering a wide range of Robot Framework–related topics, use cases, and industries.

> *👉 The full RoboCon 2026 program is available at robocon.io*
