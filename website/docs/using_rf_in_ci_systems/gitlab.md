---
sidebar_label: GitLab
title: GitLab
---

## CI Job

.gitlab-ci.yml

```yaml
.RF_Test_Template:
  image: marketsquare/robotframework-browser
  stage: test
  variables:
    RF_SUITE: "$PWD/tests/"
  script:
    - python -m robot.run --outputdir ./results $RF_SUITE
  artifacts:
    paths:
      - results/
    when:
      - always

Acceptance Tests:
  extends: .RF_Test_Template

Some Other Tests:
  extends: .RF_Test_Template
  variables:
    RF_SUITE: "$PWD/otherpath/"
```