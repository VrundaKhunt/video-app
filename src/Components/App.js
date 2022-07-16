import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideDetail";


class App extends React.Component {
    state = { list: [], selectedvideo: null };

    componentDidMount() {
        this.onTermSubmit('video songs');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ 
            list: response.data.items,
            selectedvideo: response.data.items[0]
        });
    };

    onVideoSelect = (vid) => {
        this.setState({ selectedvideo: vid });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedvideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.list}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
