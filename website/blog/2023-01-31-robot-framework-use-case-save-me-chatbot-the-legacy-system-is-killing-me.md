---
title: "Robot Framework use case: save me chatbot, the legacy system is killing me!"
date: 2023-01-31
authors: [miikka]
tags: [rpa-tools, robot-framework, roboticprocessautomation, chatbots]
slug: robot-framework-use-case-save-me-chatbot-the-legacy-system-is-killing-me
# medium_url: https://medium.com/@RobotFramework/robot-framework-use-case-save-me-chatbot-the-legacy-system-is-killing-me-68f75ef032dd
---

This Blog is based on an interview with Tommi Holmgren, the VP of Solutions at Robocorp, as part of a series of interviews to shed light on different use cases of Robot Framework.

{/* truncate */}

If you have a good use case of Robot Framework, please do [contact](mailto:executive.director@robotframework.org) me.

## Background

Robotic Process Automation (RPA) and chatbots are two technologies that are increasingly being used together to streamline business processes and improve customer experiences.

There are often numerous software platforms in use, different ERP- and CRM systems and legacy stuff that is either too hard, expensive or even impossible to use over API connections. At the same time, chatbots can help the users to by-pass a lot of the manual work in the riptide of the sea of software.

One of the [Robot Framework Foundation](/blog/robot-framework-foundation) members, Robocorp has built an example that brings the open-source conversational AI platform Rasa and Robot Framework together. Robocorp is a company with strong footing in RPA and bot automation.

## Chatbots with Robot Framework

It’s easy to think of chatbots as simple pre-programmed answer machines that seldom get the job done. Unfortunately that has been the case too often, but the world is changing fast. Advances in technologies like GPT-3 will change the way we interact with natural language.

So how do these two technologies work together? One way that RPA and chatbots can be combined is by using chatbots to handle initial customer inquiries and then using RPA to handle the more complex tasks that require data processing or other manual work. For example, a chatbot might be able to handle simple customer service inquiries, such as answering FAQs or providing information about a product, while an RPA bot could be used to process orders, update customer records, or perform other tasks that require more in-depth knowledge or manual work. This way the robots, RPA processes, provide chatbots with new skills they would not be able to perform otherwise.

As the processes are code, they can be managed in the CI/CD (continuous integration, continuous delivery) pipeline like with any other software project. Moreover, the functionalities needed can be multiplied and reused with the use libraries after the initial coding. In many ways, the chatbot paired up with a software robot can replace an app UI as well as an APIas a quick and effective way to get things done all the way from the user experience (being it for internal or external user) and in between systems communication.

Combination of RPA and chatbots can help businesses to automate a wide range of tasks and processes, improving efficiency, reducing the need for manual work, and enhancing the customer experience. By leveraging the strengths of both technologies, businesses can take full advantage of the benefits of automation and artificial intelligence.For more information on the technical solution you may check out their [blog](https://robocorp.com/portal/robot/robocorp/example-rasa-robot) or [Github examples](https://github.com/robocorp/example-rasa-robot) with Robot Framework.

![](/img/blog/0_cJAQBP-ba-bsuu3H.png)

## RPA Use cases of chatbots

Naturally, there are many use cases of chatbots. The power of using them with RPA is that you can actually do smart things with it. Especially when dealing with legacy systems or user -unfriendly solutions, making an interface to use the systems without actually using the system is a win for those struggling with the User interface.

It can be that you are using multiple systems to get information. Let’s imagine an insurance broker who needs to fetch the customer record from one system, then based on the records the prices for the insurance from another system and then make the offer for the client. Well, instead of scrolling, clicking and waiting the chatbot could fetch data from multiple systems for the broker while they have full focus on the client.

Similarly, chatbots can be used to compare records in different systems, automate tasks or a sequence of actions that are done often. This liberates time for people to focus on the more meaningful tasks.

## Closing words

Chatbots are revolutionizing the digital world. The ease of use of systems through a conversational user experience to get things done can be applied to a variety of systems, processes and industries. Even this post contains segments written with AI. Can you spot them?

Needless to say, the heavier the process and the higher the frequency the bigger the benefit. However, as we move forward I am sure this revolution also achieves smaller and smaller processes, systems and use cases.

Robot Framework is a solid automation framework that helps businesses to automate a wide range of tasks and processes, improving efficiency, reducing the need for manual work, and enhancing the customer experience. . By leveraging the strengths of both automation and natural language processing technologies, businesses can take full advantage of the benefits of automation and artificial intelligence.

In this blog we have discussed the chatbot solution of Robocorp, but naturally you may have a different solution. Regardless, we believe that the world is in need of automation and Robot Framework is there to make it happen.

Yours truly,

*Miikka Solmela*

Executive Director, Robot Framework Foundation
