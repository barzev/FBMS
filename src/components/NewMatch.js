// Import a library to help create a component
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Picker } from 'native-base';

import Header from './Header';

const CLUBS_TEAMS_PLAYERS = {
    chelsea: {
        club: 'Chelsea',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    },
    arsenal: {
        club: 'Arsenal',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    },
    tottenham: {
        club: 'Tottenham',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    },
};

const Item = Picker.Item;
class NewMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }

    render() {
        return (
            <Container>
                <Header headerText={'Create a new match'} />
                <Content>
                    <Text>Pick Team 1</Text>
                    <Button>
                        <Picker
                            iosHeader="Team 1"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Chelsea" value="key0" />
                            <Item label="Arsenal" value="key1" />
                            <Item label="Tottenham" value="key2" />
                        </Picker>
                    </Button>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },
    mainContainer: {
        flex: 1,
    },
    mainSpace: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    teamSection: {
        flexDirection: 'column',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});

export default NewMatch;
