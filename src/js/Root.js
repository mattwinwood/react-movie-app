import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container} from 'react-bootstrap';
import Hero from '../js/common/components/Hero/Hero';
import Navigation from '../js/common/components/Navigation/Navigation';
import CreateView from './views/CreateView/CreateView';
import MoviesView from './views/MoviesView/MoviesView';
import CollectionView from "./views/CollectionView/CollectionView";
import CollectionDetailView from "./views/CollectionDetailView/CollectionDetailView";
import {CONFIG_HERO_IMAGE_URL, CONFIG_LOGO_IMAGE_URL} from "../config";

class Root extends Component {
    render() {
        console.log("activeView: ", this.props.activeView);
        // Root contains ALLL of our views
        return (
            <React.Fragment>
                <Hero image={CONFIG_HERO_IMAGE_URL}/>
                <Navigation logo={CONFIG_LOGO_IMAGE_URL}/>
                <Container>
                    {this.props.activeView.includes("CreateView") && <CreateView/>}
                    {this.props.activeView.includes("CollectionView") && <CollectionView/>}
                    {this.props.activeView.includes("CollectionDetailView") && <CollectionDetailView/>}
                    {this.props.activeView.includes("MoviesView") && <MoviesView/>}
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.activeView // Using activeView (array) so I don't need react-router
    };
};

export default connect(mapStateToProps)(Root);
