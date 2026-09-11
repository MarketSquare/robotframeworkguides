---
title: "Robotframework-construct"
date: 2025-01-27
authors: [franz, miikka]
tags: [robot-framework, open-source, binary-data, community]
slug: robotframework-construct
# medium_url: https://medium.com/@RobotFramework/robotframework-construct-bdf7a2bc0c12
---
**In this blog post, we give voice to Franz Haas, a long-time Robot Framework community member.**

Franz’s project was part of the Ecosystem Project Funding Round and received support from the Robot Framework Foundation in Fall 2024. Read about how Franz has developed a new project, **Robot Framework Construct**, which tackles the challenge of working with binary data in a structured and intuitive way within Robot Framework. Enjoy!

{/* truncate */}

**Introduction, what is robotframework-construct**

This is a compact library that integrates the power of [construct](https://construct.readthedocs.io/) to Robot Framework.

Directly from the construct documentation.:

“Construct is a powerful **declarative** and **symmetrical** parser and builder for binary data.

Instead of writing *imperative code* to parse a piece of data, you declaratively define a *data structure* that describes your data. As this data structure is not code, you can use it in one direction to *parse* data into Pythonic objects, and in the other direction, to *build* objects into binary data.

The library provides both simple, atomic constructs (such as integers of various sizes), as well as composite ones which allow you form hierarchical and sequential structures of increasing complexity. Construct features **bit and byte granularity**, easy debugging and testing, an **easy-to-extend subclass system**, and lots of primitive constructs to make your work easier:

- Fields: raw bytes or numerical types
- Structs and Sequences: combine simpler constructs into more complex ones
- Bitwise: splitting bytes into bit-grained fields
- Adapters: change how data is represented
- Arrays/Ranges: duplicate constructs
- Meta-constructs: use the context (history) to compute the size of data
- If/Switch: branch the computational path based on the context
- On-demand (lazy) parsing: read and parse only the fields what you require
- Pointers: jump from here to there in the data stream
- Tunneling: prefix data with a byte count or compress it

Allowing us to access binary data in an intuitive and beautiful way.

![](/img/blog/0_KOD2NbAJ6wvJ2Okv.png)

## A long journey for binary data in Robot Framework

One of the very first open-source keyword libraries in the open-source ecosystem of Robot Framework is rammbock. Its oldest commit is from July 8, 2010. At the time Robot Framework was open source for just 2 years, and it was still roughly one year before I started using Robot Framework.

Rammbock is an awesome project and at the time it was instrumental in motivating me to start using Robot Framework . However although I loved the concept, I never ended up using it.

On the one hand, I did not work with binary network protocols. I always engaged with register access, UARTs, and I2C interfaces, which are not first-class citizens in rammbock.

On the other hand, it is the way my projects progressed. Initially, Robot Framework is used to explore the system, and bring it into a working state. But once this is achieved a different system without Robot Framework or Python would use what was learned. Usually, it either uses constant byte arrays or an independently developed parser/generator outside of the Python ecosystem. Constructs’ ability to transform between readable and byte array representation on the REPL is helpful in this situation.

## The situation of rammbock and construct right now

Both projects are awesome, and both are low on engineering time. Rammbock is looking for new maintenance, the last development commit was in January 2017. Construct is still maintained but at a slow pace.

Comparison of pypi stats of robotframework and construct

![](/img/blog/0_Pi_IqnVhY-M1hYYO.png)

![](/img/blog/0_kOy2r9SBVIrDR4zW.png)

On the other hand, constructs download stats according to pypistats are in the same ballpark as robot-framework (screenshots taken 05-Dec-2024). It is one of the struggling open-source libraries with a relatively large user base.

Together with my other experiences with construct (See for example here [PyConLT](https://www.youtube.com/watch?v=EKHmPFFu1Q4)), the fact that I am familiar with parts of its code base, and the already existing integration into other communities (construct -\> kaitai -\> C++/C#/Lua/etc…) convinced me that the best way to go forward would be to connect Robot Framework with construct, as opposed of maintaining rammbock.

## Where are we now?

## Available features with examples

Robotrfamework-construct has its first releases out and is generally operable. Examples are provided for these use cases.:

- Memory
- binary files
- TCP network communication
- UDP network communication
- Simulated register access
- USB HID tests for USB keyboards (currently only Linux is supported)
- NFC demo kit HW for STM32 + ST25R3916

## The bson example

## How the binary data structure is declared

Bson is a binary alternative to JSON. The declaration in construct can be derived from the [bson](https://bsonspec.org/spec.html) specification.

![](/img/blog/1_OZjdwVyOobgxWwW4JCYa6w.png)

Placing the specification text (right) next to the declaration in construct, the close matching of the two representations is obvious.

AI is reasonably good at performing this transformation. Supervising this AI process and verifying the very compact and readable result is easy.

## The result

Parsing and generating the binary payload is straightforward. The binary data and the human-readable visualization are available in the log file. This is helpful when dealing with trust issues in the team and allows the extraction of blobs.

![](/img/blog/0_Cx03ZreBg4qKHBab.png)

This example shows the equivalence between the construct solution and the official bson library as bundled with pymongo.

Please note how little transformations are between specification, declaration, and log entry. This makes it easy for engineers to move between those easily without straining the brain.

## The DNS example

The Domain Name System (DNS) is a hierarchical and distributed name service that provides a naming system on IP networks. This example shows how binary network protocols can be made accessible using robotframework-construct, and how a reflector can provide server functionality without implementing a server.

## How data is sent, received, and reflected

When testing clients, having control of the server can be very helpfull. However, it is relatively hard to control a server, as servers react to client requests, not to Robot Framework steps.

The chosen solution is to avoid having a server, instead there is a reflector, which forwards data between sockets. This allows to place server action as Robot Framework sequence steps.

Another solution could be to use both ends of a single socket, however, the accept step would be asymmetrical. The reflecting solution allows for small easily understood and documented steps, which can be redirected to a real server with little effort. This is a judgment call there is nothing wrong with a single socket approach, pull requests are welcome.

## The result

Starting the reflector creates 2 connections, which can be used with the client interface.

This example shows how this reflection can be used in practice. Note how binary data transmitted to connection1 shows up on conection2. The data can be stored in the connection, it is not necessary to read it out immediately.

![](/img/blog/0_d5IzTqnY4Du0aw2f.png)

For this to work, it is necessary that the receive and response steps can be separated.

## The NFC example

This example showcases how to use the binary interface in combination with a UART to control an NFC reader.

See also this interesting [blog](/blog/robot-framework-use-case-testing-payments-cards) article about the point of sales use case of NFC from Miikka Solmela.

Special recognition goes to STMicroelectronics for providing the hardware and supporting this effort.

## How to handle UART data reception

Pyserial supports reading with a timeout, however often it is helpful to have a keyword that waits for data to arrive.

Using the UART interface file on systems supporting select (basically everything but Windows) is a simple and elegant solution. On Windows polling is used to compensate for the lack of select.

![](/img/blog/0_Acwo1qtIXb6qQIpR.png)

While it is a shame that on Windows busy waiting needs to be used, it should be noted that this happens when a single-threaded Robot Framework system has nothing to do. An often-discussed alternative is to use threads. I advise against it. The decision to use threads means that fork system calls can not be used (note.: windows does not support fork). The sequence of events gets unpredictable and often undocumented. If threads are used, I recommend using message queues to share the data. Avoid shared mutable state.

## Breaking out of the ecosystem

Migrating the constructs to different ecosystems requires an understanding of the target ecosystem. Kaitai targets 11 languages, I chose C++ as a target as I have experience with it, and it is a very different ecosystem to Robot Framework .

## Generating and compiling the parser with kaitai

This xonsh script shows the involved steps.:

![](/img/blog/0_pbDN8SnBlQ1d3YEK.png)

Here “export_ksy” is part of construct, it creates a kaitai file that is language agnostic, and the kaitai-struct-compiler transforms this file into a cpp file. The C++ target needs some C++ code. This C++ dependency needs to be compiled as well.

The main file looks like this.:

![](/img/blog/0_0fPlZmzp54QOkO5f.png)

This is reasonably normal C++ code. Keep in mind that kaitai only supports parsing, not building binary data.

Also, keep in mind that disadvantages compound more easily than advantages.

## Quality control measures

Mutation testing ensures that the test suite finds bugs if bugs are there, by introducing bugs through mutating the code.

Unit tests are generally avoided. They are used to deal with code paths that are not reachable using Robot Framework due to automatic data type conversions. Instead, the focus is on acceptance tests and a high percentage of killed mutants.

This ensures that all error paths are executed and all error messages are at least looked at once during development.

## The limitations of mutation testing

Mutation testing is a potent tool to assess the effectiveness of quality control. It verifies if mutations in the code will be detected as a bug. There are false alarms if mutations lead to equivalent code, or if the difference is small enough to be negligible. Missing untested features can not be detected. This [goto; Copenhagen 2015](https://www.youtube.com/watch?v=jwB3Nn4hR1o) is a full-length presentation on the technique from Austin Bingham (Technical Director at Sixty North AS), this much shorter [robocon 2023 talk](https://www.youtube.com/watch?v=eWOzkWyqF28) covers this topic as one tool in a toolbox for quality controlling Robot Framework endeavors.

## Conclusion

Dealing with binary data in Robot Framework used to be an underserved topic. Rammbock is an interesting solution for binary network protocols, but many use cases remain unserved.

As far as I know, either hex representations or ad hoc parsers/generators (sometimes with construct) are used.

This structured approach provides a Robot Framework -independent parser/generator and parsers for many programming languages.

## Acknowledgments

Special thanks to the robotramework-foundation for funding this project, STMicroelectronics, and the construct project (especially Arkadiusz Bulski, Tomer Filiba, and Corbin Simpson).

## Closing words

Thank you, Franz, for this intriguing new project and blog post!

P.S. RoboCon 2025 is coming up soon! Please check the agenda and get your tickets here: [robocon.io](http://robocon.io)

Yours truly,

*Miikka Solmela*

The Executive Director of the Robot Framework Foundation
