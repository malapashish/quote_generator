import React from "react";

class QuotesANDAuthor extends React.Component {
    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;
        return (
            <div style={{ backgroundColor: randomColor }} className="quotes_section">
                <div className="quotes_window" key={Math.random()}>
                    <p className="main_quote">{this.props.quote}</p>
                    <p className="author">{this.props.author ? this.props.author : "Unknown"}</p>
                    <button style={{ backgroundColor: randomColor }} id="newquote" onClick={this.props.handleClick} class="btn info">Genrate</button>
                </div>
            </div>
        );
    }
}

export default QuotesANDAuthor;