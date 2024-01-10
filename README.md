#### 1. README.md show your lasted project or standard of init project structure and defined convention

```
project-name-1
    deployment
        - *.yaml
    src
        main.(go, ts)
        __test__
            - unit
            - integration
        app
            - 
        framework
            - http-client
            - db-client
        controllers
            - a.controller
        usecases
            - a.usecase
        repositories
            - a.repo
        models
            - a.model
        utils
            - some-date-format
            - some-date-format.test
    ...package,
    ...config,
    Dockerfile,
    .env.example
```

```
project-name-2
    deployment
        - *.yaml
    src
        main.module
            - imports [A, B]
        app
            - (domain, context) A
                - controller
                    - a.controller
                    - a.controller.test
                - service
                    - a.service
                    - a.service.test
                - dto
                    - in, out validation
                - module file
            - (domain, context) B
                - controller
                    - b.controller
                    - b.controller.test
                - service
                    - b.service
                    - b.service.test
                - dto
                    - in, out validation
                - module file
        framework
            - http-client
            - db-client
        utils
            - some-date-format
            - some-date-format.test
    ...package,
    ...config,
    Dockerfile,
    .env.example
```

# First setup project

```sh
git clone git@github.com:kraingkrai-k/nvs-backend.git
cd ./nvs-backend
npm install
```

# How to run

```sh
npm test
```
