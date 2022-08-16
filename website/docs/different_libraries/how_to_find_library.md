---
sidebar_position: 0
sidebar_label: How to find the right library
title: How to find the right library
---

# What technology does your Application under Test use?

That's the main question, when searching for a library to steer your application.  
Sure, there are libraries out there, which use image and text recognition to find controls and interact with them.  
But nothing beats a library which can steer your application natively via it's exposed interfaces.

## Web Applications

### Libraries steering the UI of a Web Application in a Web Browser

There are two main libraries which can automate web applications in a web browser:    
- [Selenium Library](https://github.com/robotframework/SeleniumLibrary/)
- [Browser Library](https://github.com/MarketSquare/robotframework-browser)

### Libraries that can automate Web Services and RESTful APIs

- [Requests Library](https://github.com/MarketSquare/robotframework-requests)


## Desktop Applications

### Does if offer a User Interface ?
Automation via the User Interface is a common approach, even though it can be very unstable, slow and heavy on the maintenance.  
But if your Application offers a User Interface, there is also the possibility to automate it via that User Interface.  
That's where the used technology becomes important.

#### General Windows Desktop UI Libraries  

There are libraries out there for general windows desktop automation or image based automation.

- [FlaUI](https://github.com/GDATASoftwareAG/robotframework-flaui)
- [Sikuli Library](https://github.com/rainmanwy/robotframework-SikuliLibrary)
- [White Library](https://github.com/Omenia/robotframework-whitelibrary)
- [RPA Framework](https://rpaframework.org/)
- [ImageHorizon Library](https://github.com/eficode/robotframework-imagehorizonlibrary)
- [Zoomba Library](https://github.com/Accruent/robotframework-zoomba)
- [AutoIT Library](https://github.com/nokia/robotframework-autoitlibrary)

But if you know that it's wiritten in Java - check out some SWING or SWT Libraries!

#### Java Specific UI Libraries

Some Libraries to steer the User Interface of your Java Application

- [RemoteSwing Library](https://github.com/robotframework/remoteswinglibrary)
- [Swing Library](https://github.com/robotframework/SwingLibrary/wiki)
- [Eclipse Library](https://github.com/lcarbonn/robotframework-eclipselibrary)
- [RPA Framework JavaAccessBridge](https://rpaframework.org/libraries/javaaccessbridge/index.html)



