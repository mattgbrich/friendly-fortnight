# Test concept for dir structure and HOC state management

## Config
- We can keep other configurations such as our Router and muiTheme in here to keep App clean and focused on just rendering the app
- API calls can be made from the HOC's and passed to the children (I showed two different approaches here, either one works fine)
- Instead of `WithForm` we might call this something like `AppStore`?

## Styles
- Keep styles in a `styles.js` file within the folder for each component and import it into the component
- Making this a function is helpful to allow us to pass things like the palette from muiTheme, and vars to be used for conditional application of styles

## Component folders
- Put each component inside it's own folder that contains the other files that go along with it (such as style and util files)
- Put helper functions in separate files in the component folder
- Put sub-components inside a `components` folder inside the main component folder

