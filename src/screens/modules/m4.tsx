import { Formik } from "formik";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

// interface FormValues {
//   email: string
// }

export default class Module4 extends React.Component {
  render() {
    return (
      <>
        <Text>Module 4 : Formulaires</Text>
        <FormWrapper>
          {/* <Formik initialValues={{ email: "emailparDefault@gmail.com" }} onSubmit={(values) => console.log(values)}>
            {(props) => (
              <View style={{ width: "100%" }}>
                <TextInput
                  autoFocus
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                />
                <Button onPress={props.handleSubmit} title="Submit" />
                <Text>{JSON.stringify(props, null, 2)}</Text>
              </View>
            )}
          </Formik> */}
        </FormWrapper>
      </>
    );
  }
}

const FormWrapper = styled.View`
  margin: 25px;
`;
