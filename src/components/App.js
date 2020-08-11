import React from "react";
import Header from "./Header";
import QuotesANDAuthor from "./QuotesAndAuthor";
import Quotes from "./Quotes";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: Quotes[0].quote,
            author: Quotes[0].author,
        };
    }
    randomQuote() {
        const randomNumber = Math.floor(Math.random() * Quotes.length);
        return Quotes[randomNumber];
    }
    shuffleQuotes(array) {
        return array.sort(() => Math.random() - 0.5)
    }
    handleClick = () => {
        const generateRandomQuote = this.randomQuote();
        this.setState({
            quote: generateRandomQuote.quote,
            author: generateRandomQuote.author
        });
        this.shuffleQuotes(Quotes)
    };
    randomColor() {
        const color = `rgb(
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)}
        )`;
        return color;
    }
    render() {
        return (
            <div>
                <Header />
                <QuotesANDAuthor
                    displayColor={this.randomColor}
                    handleClick={this.handleClick}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;