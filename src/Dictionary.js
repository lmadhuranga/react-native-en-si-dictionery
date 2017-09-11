import React, {
    Component
} from 'react'
import {
    Image,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';
import {styles} from './styles'
const english2sinhala = require('../db/en-si.2.json');
const sinhala2english = require('../db/si-en.0.json');


class Dictionary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            input: '',
            output: '',
            switchEn2De: true,
            from: 'English',
            to: 'Sinhala'
        }
    }

    render() {
        return (
            <View style={ styles.parent }>
                <Text style={ styles.text }>
                    Type something in {this.state.from} => {this.state.to}:
                </Text>

                <TextInput text={ this.state.input }
                           autoFocus={true}
                           onChangeText={(e) => this.setState({input: e})}
                           onSubmitEditing={(e) => this.showMeaning(e) }
                           style={ styles.input }
                />

                <Switch onValueChange={(value) => this.switchLanguage(value)}
                        value={this.state.switchEn2De}/>

                <Text style={ styles.germanLabel }>
                    Its {this.state.to} equivalent is:
                </Text>

                <Text style={ styles.germanWord }>
                    { this.state.output }
                </Text>



            </View>
        )
    }


    switchLanguage(switchEn2De) {
        if (switchEn2De) {
            this.state.from = 'English'
            this.state.to = 'Sinhala'
            this.state.switchEn2De = false
        } else {
            this.state.to = 'English'
            this.state.from = 'Sinhala'
            this.state.switchEn2De = true
        }
        this.setState({switchEn2De})
    }

    showMeaning(e) {

        const input = this.state.input.toLowerCase()
        // Use the ternary operator to check if the word
        // exists in the dictionary.
        const meaning = input in english2sinhala ?
            english2sinhala[input] :
            null

        const meaningDe = input in sinhala2english ?
            sinhala2english[input] :
            null

        if (meaning) {
            this.switchLanguage(true)
        }

        if (meaningDe) {
            this.switchLanguage(false)
        }

        // Update the state
        this.setState({output: meaning || meaningDe || 'Not Found'})
    }
}

export {
    Dictionary,
    english2sinhala,
    // english2sinhala
}

