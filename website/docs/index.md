---
sidebar_position: 0
sidebar_label: Robot Framework Guides
title: Robot Framework Guides
---

Welcome to the Robot Framework Guides!  
We hope these guides will help you get started with Robot Framework **faster and easier**.  
If you have any questions, please reach out to our awesome community on [Slack](https://robotframework.slack.com/).

```mdx-code-block
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '@site/src/components/HomepageComponents';
import ArrowUpDownIcon from '/icons/arrow-up-down.svg';
import BedIcon from '/icons/bed.svg';
import BotIcon from '/icons/bot.svg';
import BugIcon from '/icons/bug.svg';
import CarIcon from '/icons/car.svg';
import HeartHandshakeIcon from '/icons/heart-handshake.svg';
import HelpCircleIcon from '/icons/help-circle.svg';
import ListIcon from '/icons/list.svg';
import ListChecksIcon from '/icons/list-checks.svg';
import MonitorIcon from '/icons/monitor.svg';
import UsersIcon from '/icons/users.svg';

 <Section title="Getting Started">
            <Card
              title="Test Automation"
              icon=<BugIcon/>
              description="How to set up Robot Framework for testing"
              to="/getting_started/testing"
            />
            <Card
              title="RPA"
              icon=<BotIcon/>
              description="How to set up Robot Framework for Robotic Process Automation (RPA)"
              to="/getting_started/rpa"
            />
          </Section>

 <Section title="Libraries">
             <Card
              title="Which Library?"
              icon=<HelpCircleIcon/>
              description="How to choose the right library for your use case"
              to="/different_libraries/how_to_find_library"
            />
              <Card
              title="Library Overview"
              icon=<ListIcon/>
              description="A list of different libraries available for Robot Framework"
              to="/different_libraries/overview"
            />
            <Card
              title="UI"
              icon=<MonitorIcon/>
              description="Automate the User Interface"
              to="/different_libraries/ui"
            />
            <Card
              title="API"
              icon=<ArrowUpDownIcon/>
              description="Automate APIs"
              to="/different_libraries/ui"
            />
            <Card
              title="RPA"
              icon=<BotIcon/>
              description="Libraries for Robotic Process Automation (RPA)"
              to="/different_libraries/rpa"
            />
          </Section>

 <Section title="Examples">
            <Card
              title="Vehicle Insurance Application"
              icon=<CarIcon/>
              description="Example for a vehicle insurance web application"
              to="/examples/insurance"
            />
            <Card
              title="ToDo App"
              icon=<ListChecksIcon/>
              description="Example for a ToDo web application"
              to="/examples/todo"
            />
            <Card
              title="Restful Booker"
              icon=<BedIcon/>
              description="Example for a room booking RESTful API"
              to="/examples/restfulbooker"
            />
          </Section>

 <Section title="About Robot Framework Guides">
            <Card
              title="About Us"
              icon=<UsersIcon/>
              description="Who we are and what we do"
              to="/about_us"
            />
            <Card
              title="Contribute"
              icon=<HeartHandshakeIcon/>
              description="How to join and support us"
              to="/contribute"
            />
          </Section>
```



:::note How to contribute
The Robot Framework Guides project is always looking for contributors.
If you want to share your knowledge and practices, please join us on [GitHub](https://github.com/MarketSquare/robotframeworkguides).
You can find more details about how to contribute on our [contributing page](contribute.md).
:::

