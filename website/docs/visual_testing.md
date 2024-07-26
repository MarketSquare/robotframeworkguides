---
sidebar_label: Visual Testing
title: Visual Testing
sidebar_position: 5
---

## WatchUI

WatchUI is visual testing library for visual difference testing as well as image content testing (including PDF documents). Supports testing with Selenium to generate screenshots, uses PyMuPDF to process PDFs and Tesseract OCR to recognize text.

Useful Links:

- [WatchUI GitHub](https://github.com/Tesena-smart-testing/WatchUI)
- [WatchUI KW Documentation](https://tesena-smart-testing.github.io/WatchUI/)

## Wopee.io

[Wopee.io](https://wopee.io) seamlessly integrates with Robot Framework to enhance test coverage, accelerate maintenance, and ensure more robust test runs. Designed with a vision of autonomous visual testing, Wopee.io allows for the easy incorporation of visual validation into your existing Robot Framework tests, adding an extra layer of quality assurance. With Wopee.io, you can effortlessly compare screenshots (from web and mobile testing), various images (including PDFs, desktop apps, or test data images captured or processed by your application under test), manage baselines, and automate visual testing within your Robot Framework test suite.

### Visual Testing - Wopee.io and Robot Framework

Wopee.io supports multiple methods for initiating visual testing within Robot Framework:

- **Browser Library**: For web-based visual testing.
- **Selenium Library**: For broader web automation and visual validation.
- **General Picture Comparison**: For comparing images from PDFs, mobile, or desktop applications.

### Methods of Integration

You can integrate Wopee.io with Robot Framework in two primary ways:

1. **Library Integration**: Add tracking keywords directly into your test cases.
2. **Listener Integration**: Collect visual validation data automatically without modifying your existing tests.

To explore the capabilities quickly, you can start with the Robot Framework Integration Template Project.

### Choosing the Right Approach

- **Listener Approach**: Easier to set up and ideal for initial integration.
- **Library Approach**: Offers greater customization and flexibility.

Select the method that best fits your project requirements and preferences for an optimal integration experience.

Useful Links:

- [Template Project](https://github.com/Wopee-io/robotframework-template)
- [Getting started w. Wopee.io](https://docs.wopee.io/integrations/robot-framework/02-getting-started/)
- [Visual Testing with Robot Framework](https://youtu.be/cSyMuWnOWWw)

<iframe width="560" height="315" src="https://www.youtube.com/embed/cSyMuWnOWWw?si=PYrD-Y7omLchYBEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
