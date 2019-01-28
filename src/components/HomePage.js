import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchData } from '../actions';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchData('theme');
        this.props.fetchData('modules');
    }

    showButtons() {
        const { buttonColor, textColor, modules } = this.props;
        const { button } = styles;
        const module = modules.map(({ label, slug, enabled }) => {
            return (
                <View key={slug}>
                    <TouchableOpacity style={[{ backgroundColor: buttonColor }, button]} disabled={!enabled} >
                        <Text style={{ color: textColor }}>{label}</Text>
                    </TouchableOpacity>
                </View>
            );
        });
        return module;
    }

    showModules() {
        const { hasLoadedModules, hasLoadedTheme } = this.props;
        if (hasLoadedModules && hasLoadedTheme) {
            return (<View>{this.showButtons()}</View>);
        }
        return (
            <ActivityIndicator loaded={hasLoadedModules && hasLoadedTheme} size="large" />
        );
    }


    render() {
        const { container } = styles;
        const { backgroundColor } = this.props;

        console.log(this.props);

        return (
            <View style={[{ backgroundColor }, container]} >
                <Text> This is EW Mobile</Text>
                {this.showModules()}
            </View >
        );
    }
}

const mapStatetoProps = ({ theme }) => {
    const {
        modules, backgroundColor, textColor, buttonColor,
        hasLoadedTheme, hasLoadedModules
    } = theme;

    return {
        modules, hasLoadedTheme, hasLoadedModules, backgroundColor, textColor, buttonColor
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
        margin: 10
    }
});


export default connect(mapStatetoProps, { fetchData })(HomePage);
