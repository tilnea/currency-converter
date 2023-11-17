## Run project

- pnpm install
- pnpm dev

## Architecture

Although you advised me to opt for a simple solution, I did want to add a separate Data and Domain layer in my BIF (Backend in Frontend) architecture. This is because I want to emphasize the importance of avoiding data transforms in layouts and definitely not in the components.

I'm not claiming that a BIF is the best way, but it's a method to keep the frontend clean and also facilitates handling backend changes more easily, as the data is transformed in one place.

In the Data layer, I call the API and transform my data.

In the Domain layer, I have the use cases, strictly adhering to one business logic per function. My layouts will only consume these use cases.

Layouts, in my world, are a place where components (and other layouts) and data come together. In a larger app, I would also have routes that can consist of many layouts.

Components are reusable and don't care about the data structure. In a larger app, I would develop these in a Storybook to ensure they are developed in isolation.

I decided to put all my types in a 'types' folder. Usually, I would have folders called 'Model' in the Domain and Data layers, but I decided to try out this approach for this project. Having them all in one place like this might not be as scalable.

In utils, I keep some helper functions to avoid making too many calculations in my layouts

## If I had more time

Now, I focused a lot on how I think it's important to have a separation of concerns in a frontend. If I had an endless amount of time to dedicate to this project, I would have added tests, especially for the calculations and transformations that are made. The extent of testing in components and layouts depends on the product and the team.

I would also have included error and loading states.

Additionally, I could have played around with animations, which is not something I have done a lot in my career, unfortunately, but is something I spend a lot of time trying out and playing with in my own time at the moment.

## More thoughts

I do have one folder per component, which I'm not sure I need when using styled-components. Usually, I use CSS-modules to ensure proper scoping of my styles, and in that case, a folder per component is definitely needed. Additionally, if I were to add tests to every component, I would also need the folder. However, I probably should have reconsidered that choice here.
