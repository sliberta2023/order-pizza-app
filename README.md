# OrderPizzaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## How to run the app in the docker environment
1. Make sure you are at the root directory of your application, and run the following to create the docker image
```
    docker build -t order-pizza-app-image:latest .
```

2. Make sure your image created successfully.
```
    docker image ls
```

3. Run the docker image of your app. The app will run at localhost:8080
```
    docker run -d -p 8080:80 order-pizza-app:latest
```

4. Check the running container
```
    docker ps
```
