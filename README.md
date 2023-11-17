## Run project

- pnpm install
- pnpm dev

## Architecture

Altrough you told me to make a simple solution, I did want to add a sepreate Data and Domain layer in my BIF (Backend in Frontend) architechture because I want to point out that I think its important not to do to data transforms in the layouts, and defenetly not in the componenets.

I don't say that a BIF is the best way, but its a way to keep the frontend clean and also makes changes in the backend easier to handle since the data is transformed in one place.

In the Data layer I call the API and transform my data.

In the Domain layer I have the use cases that is strickly one buisness logic per function. My layouts will only consume use cases.

Layouts is in my world a place where Components (and other Layouts) and data are put together. In a bigger app I would also have routes that can contain of many layouts.

Components are reusable and dont care about the data structure. In a larger app I would develope these in a Storybook to make sure they ar e developed in isolation.

I decided to put all my types in a types folder, usually I would have folders called Model in the Domain and Data layers but I decided to try out this approach for this project. Having them all in one place like this might not be as scalebale.

In utils I keep some helper functions, to not make to much calculations in my layouts.

## If I have more time

Now I focused a lot on how I think it's imortant to have a seperation of conserns in a frontend. If I had an endless amount of time to give this project I would have added tests, especially to the calculations and transformations that are made. I think the amount of testing in components and layouts depends on the product and the team.

I would also have added error and loading states.

I could also have played around with animations, which is not something I have done a lot in my carieer unfortunally, but is something I spend a lot time trying out and palying with in my own time at the momenet.

## More thoughts

I do have one folder per component, which I'm not sure I need using styled-components. Usually I use css-modules to make sure to scope my project. and in that case a folder per component is defenetly needed. Also If I would add tests to every component, I would also need the folder. But maybe I would have removed in here.
