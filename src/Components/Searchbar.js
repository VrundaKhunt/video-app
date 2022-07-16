import React from "react";

class Searchbar extends React.Component {
    state = { term: ''};

    onInputchange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <div>
                            <div className="ui action input">
                                <input 
                                type='text'
                                value={this.state.term}
                                onChange={this.onInputchange}
                                 />
                                <button className="ui button">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;