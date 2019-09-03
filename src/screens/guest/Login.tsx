import { Formik } from "formik";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import SafeArea from "../../modules/ui/components/SafeArea";

// interface FormValues {
//   email: string
// }

class LoginScreen extends React.Component {
  render() {
    return (
      <SafeArea>
        <Text>Login form</Text>
        {/* <Formik initialValues={{ email: "emailparDefault@gmail.com" }} onSubmit={(values) => console.log(values)}>
        {(props) => (
          <View style={{ width: "100%" }}>
            <TextInput onChangeText={props.handleChange("email")} onBlur={props.handleBlur("email")} value={props.values.email} />
            <Button onPress={props.handleSubmit} title="Submit" />
          </View>
        )}
      </Formik> */}
      </SafeArea>
    );
  }
}

export default LoginScreen;
