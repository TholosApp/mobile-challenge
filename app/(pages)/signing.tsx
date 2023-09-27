import { View, KeyboardAvoidingView, Text, TextInput, Platform, Keyboard, TouchableWithoutFeedback } from "react-native"
import NavButton from "../../components/NavButton"

export default function SigningPage() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                className="flex-1 justify-between items-center m-10"
            >
                <View>
                    <Text>Signing Page</Text>
                </View>
                <View>
                    <Text className="m-2">Enter Message</Text>
                    <TextInput 
                        className="border w-64 h-32"
                        editable
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                        scrollEnabled
                        returnKeyType="done"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        blurOnSubmit
                    />
                    <NavButton title="Sign" href="/signature" />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}