import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";

const AuthForm = ({headerTitle, errorMessage, onSubmit, submitLabel}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerTitle}</Text>
            </Spacer>
            <Spacer/>
            <Input label="Email"
                   autoCapitalize="none"
                   autoCorrect={false}
                   value={email}
                   onChangeText={setEmail}
                // onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <Input label="Password"
                   secureTextEntry
                   autoCapitalize="none"
                   autoCorrect={false}
                   value={password}
                   onChangeText={setPassword}
            />
            {errorMessage ? <Text style={Styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title={submitLabel}
                    onPress={() => onSubmit({email, password})}
                />
            </Spacer>
        </>
    );
};

const Styles = StyleSheet.create({
    errorMessage: {
        marginLeft: 15,
        color: 'red',
        fontSize: 16
    }
});

export default AuthForm;
