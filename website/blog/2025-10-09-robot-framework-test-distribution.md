---
title: "Robot Framework test distribution"
date: 2025-10-09
authors: [franz, miikka]
tags: [embedded-systems, test-automation, robotframeworkpackaging, rpa-solutions, robot-framework]
slug: robot-framework-test-distribution
# Original: keeps search engines pointing at the canonical source until
# the Medium post is redirected or removed.
# medium_url: https://medium.com/@RobotFramework/robot-framework-test-distribution-9968ecdb1764
---
Franz Haas is an active member of the Robot Framework community who has contributed significantly to embedded and short-run hardware testing. In this post, Franz shares practical insights on distributing Robot Framework tests and RPA solutions in constrained or isolated environments — an important topic for those working beyond typical CI/CD pipelines.

{/* truncate */}

In some situations distributing Robot Framework tests/RPA including the libraries is cumbersome. We will go over some of the situations where this is relevant and propose a couple of solutions.

### Why does this matter?

Being able to reproduce results is what differentiates professional engineering and scientific research from religious believe. Some quality standards explicitly require reproducibility, others are easier to meet with reproducibility.

For many of us a CI/CD pipeline which is a well maintained infrastructure solves this problem. The devops tool set is extensive and well established. The environment runs in a climatised data center isolated from real world influences by dedicated teams. I have the deepest respect of those who make this possible, it is incredible what has been achieved.

![](/img/blog/0_5T72ROw1cepNLc8J.jpeg)

Thanks to [https://www.pexels.com/@brett-sayles/](https://www.pexels.com/@brett-sayles/)

This article is for those of us who can not benefit from that. Some of us interact with the real world, others are doing RPA in a locked down environment.

Robot Framework is highly modular, lives in the python ecosystem which is very diverse, runs on many operating systems or even without an operating system and easily integrates with the system level using interfaces like [CFFI](https://cffi.readthedocs.io/en/stable/) making it as powerful as C/C++/Rust for interacting with hardware.

This is great, but can be the source of headache when documenting how a measurement/test/RPA was made for future reference, or reproducing a setup on a new location. For example in the hardware production test environment reproducibility is a non negotiable must have requirement.

### Requirement sets discussed

- Close in time, access to wheels, uv preinstalled  
  (This is your typical laboratory setup. The network is often isolated but there is normally a way to install vetted wheels.)
- No access to wheels, python pre installed  
  (This is your typical production test environment. There are maintainers who will take care of keeping the environment stable after ramp-up, gate keeping updates.)
- No python infrastructure preinstalled  
  (This is your typical non cooperative destination)

### Close in time with access to wheels, uv available

[Uv](/blog/robot-framework-test-distribution) allows us to do this with an incredibly small overhead.

    uvx --python=3.13.6 --from robotframework==7.2.2 --with numpy==2.2.6 robot

Operating system drivers are not included. There is a dependency on uv which is owned by astral and the wheel distribution infrastructure, however not a lot of effort and resources is sunk for this solution.

The wheel distribution infrastructure is either pypi, or a dedicated in-house solution under local control. Astral is a private company.

Keep in mind that versions may not be provided indefinitely.

### No access to wheels python is available (zipapp)

Since python 3.5 it is possible to bundle python files into a zip file which can then be run using python. These can appear to be regular exe files on windows, and regular executable files on unix. However portable between those are the pyz files which can be executed by python like a script, but actually are a zip file.

While it is possible to include native dependencies, some of them are very tricky to be included and the resulting zipapp is much less portable. Native modules which consist of a single self contained pyd/so file are bearable (for example [polars](https://docs.pola.rs/api/python/stable/reference/index.html)), those who do something more complex are a headache (for example [numpy](https://numpy.org/)).

This is great for long term archiving and sharing in restricted environments. Only one relatively small file needs to get through, and there is no dependency beyond this single file and a specific version of python.

### No access to wheels, no python available (frozen app)

In frozen applications python, Robot Framework and everything to run these are frozen together, either as a single file executable (linux) or a installable file (msi, dmg, deb, rpm).

When using [cxfreeze](https://cx-freeze.readthedocs.io/en/stable/script.html) two pitfalls might get in your way.

1.  the cxfreeze script takes a parameter “ — script” which shall point to the script which starts the frozen application. When the src/robot/run.py file of the Robot Framework is used, this will fail, due to a missing module (pythonpathsetter). You need to provide a custom start script.
2.  cxfreeze will not include python libraries when it does not see them actually used, unless explicitly told to. All libraries intended to be used need to be explicitly included.

This has the advantage over zipapps that python is included and native modules are supported, on the downside they are not portable across operating systems and they are bigger.

![](/img/blog/0_J4IMnoT-WyQLQg5i.png)

Visualization of the dependencies covered

We did not touch on two important topics. Distributing the robot files, and distributing operating system, drivers and hardware, especially non standard hardware.

For the operating system drivers and non standard hardware no solution is offered here.

The robot / resource files, these can be stored as resources within python projects / wheels, and from there included inside of zipapps and frozen apps. Remember to put a “\_\_init\_\_.py” into these directories, to properly configure [setup.cfg](https://setuptools.pypa.io/en/latest/userguide/declarative_config.html) to include them. Use this context manager to access these files.:

    with importlib.resources.path(specification, "data") as path:
        robot.run(path)

Do not rely on the [\_\_file\_\_](https://docs.python.org/3/reference/datamodel.html#module.__file__), attribute, as it may not exist.

[Examples and implementation](https://github.com/MarketSquare/compact_testprogram_distribution) details are available on [MarketSquare](https://github.com/MarketSquare/) on github.

### Decision aid

![](/img/blog/0_pCNmjhrd6x3lfZ4D.png)

For topics like this the community day at [robocon](https://www.robocon.io/) is a very good address. If you are interested in Robot Framework for hardware production test this [itcweek](https://www.itctestweek.org/wp-content/uploads/2022/09/ITC2022_Final_Program.pdf) (paywalled) had a poster about that.

These tools have been discussed.:

- [frozen app](https://cx-freeze.readthedocs.io/en/stable/)
- [zipapp](https://docs.python.org/3/library/zipapp.html) / [pdm-packer](https://github.com/frostming/pdm-packer)
- [uv](https://docs.astral.sh/uv/)

Do you have something you’d like to share with the Robot Framework community? We’re always happy to feature community insights and experiences.

Thanks to **Franz Haas** for sharing his expertise and perspective with us.

Yours truly,  
**Miikka Solmela**  
Executive Director, Robot Framework Foundation
