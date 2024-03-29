# Expense Tracker - Vanilla JS

## Table of Contents

- [Links](#links)
- [Description](#description)
- [Screenshot](#screenshot)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [Note](#note)
- [Contributing](#contributing)

## Links

- Solution URL: [GitHub Repository](https://github.com/aruntutter/expense-tracker)
- Live Demo: [Live Demo URL](https://nimble-taffy-71512b.netlify.app/)

## Description

The Expense Tracker is a web application built using Vanilla JavaScript that helps you keep track of your income and expenses. You can add transactions, categorize them as income or expenses, view your balance, monitor your income and expenses, and keep a history of your financial activities. The application allows you to track your financial transactions, categorize them, and see your balance update in real-time.

## Screenshot

![Expense Tracker Screenshot](./assets/images/screenshot.png)

## Demo

You can access the live demo of the Expense Tracker [Here](https://nimble-taffy-71512b.netlify.app/).

## Features

- **Add Transaction:** You can add new income or expense transactions by providing a transaction name and amount.
- **Real-time Balance:** The balance is calculated and updated in real-time as you add or remove transactions.
- **Categorized Display:** Transactions are color-coded as green for income and red for expenses, making it easy to differentiate.
- **Delete Transactions:** You can delete specific transactions from the transaction history.

## Technologies Used

- **HTML:** The structure of the web page is built using HTML.
- **CSS:** Custom styling is applied using CSS.
- **JavaScript:** Interactive features and functionalities are implemented using Vanilla JavaScript.
- **DOM Manipulation:** The application dynamically updates the user interface using DOM manipulation techniques.
- **LocalStorage:** Transaction data is stored locally in the browser using LocalStorage for persistence.
- **FontAwesome:** FontAwesome icons are used to enhance the visual representation of UI elements.

## How It Works

- When the page loads, the Expense Tracker initializes with an initial balance of ₹0.00.
- You can add transactions using the "Add New Transaction" form. Enter the transaction name and amount, and specify whether it's income or an expense.
- The balance, income, and expense sections are dynamically updated based on the transactions you add.
- The "History" section displays a list of transactions with their category and amount.
- You can use the "Delete" button next to each transaction to remove it from the history.

## Usage

1. Open the live demo of the Expense Tracker using the provided link.
2. Use the "Add New Transaction" form to add your income and expense transactions.
3. The "Your Balance" section reflects the updated balance after each transaction.
4. The "Income" and "Expenses" sections show the total income and total expenses, respectively.
5. The "History" section displays a list of your transactions, categorized and with corresponding amounts.
6. Use the "Delete" button next to each transaction to remove it from the history.

## Project Structure

- `index.html`: Contains the HTML structure of the Expense Tracker.
- `styles/normalize.css`: Normalize.css for consistent styling across different browsers.
- `styles/style.css`: Custom CSS styles for the Expense Tracker.
- `assets/images`: Directory containing images used in the project.
- `scripts/script.js`: JavaScript code for handling transaction data, UI updates, and user interactions.

## Credits

- FontAwesome: Used for adding stylish icons to the UI elements.
- Google Fonts: Utilized for the "Teko" and "Oswald" font families for improved typography.
- MDN Web Docs: Invaluable resource for understanding and utilizing JavaScript and DOM methods.

## Note

Please use this Expense Tracker responsibly and avoid storing sensitive information in the browser's local storage.

Feel free to use and customize this Expense Tracker for your financial management needs!

## Contributing

Contributions are welcome! If you find any issues, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request in the GitHub repository. Let's enhance this project together and make it more useful!
