## Technologies Used:
- Angular.js 1.6.4
- SASS
- Bootstrap

## Best Practices Followed:
- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
  - Single Responsibility - Rule of 1 (One Component per file) and small functions
  - Use a capture variable for this when using the controllerAs syntax
  - Application Structured by LIFT Principle and Folders-by-Feature Structure
  - Bindable Members Up Top and Alphabetized
  - Data Services with Separate Data Calls

## Thought Process:
I decided to make this web app a simple one-page application to fit its simple use cases. I chose to make add companies and add people prompts into expandable columns to allow ease of accessibility while defering to the main content of the page when those use cases are not necessary.

## Things I'm proud of:
- Relatively clean coding style
- Straightforward UI

## Things I would do better next time:
- I would look more into Best Practices
- Consider better controller / component structure
- Form validation
- Visual UI improvements
- UI/UX animations
- Modularity could be improved. Ex: Maybe personItem and companyItem could be abstracted to a general item component
- Data service calls could be moved to potentially more sensible locations

## Disclaimers:
- I based some of my code from the "hero list" example found on https://docs.angularjs.org/guide/component# angular-sigfig-project
