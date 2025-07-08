// app/login.tsx
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup';
import { auth } from '../src/firebase';

// Validerings­schema for login-form
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ugyldig e-postadresse')
    .required('E-post er påkrevd'),
  password: Yup.string()
    .min(6, 'Passord må være minst 6 tegn')
    .required('Passord er påkrevd'),
});

export default function LoginScreen() {
  const router = useRouter();
  
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      router.replace('/'); // naviger til hjem-skjerm
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.Text}>Logg inn</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                label="E-post"
                mode="outlined"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email && !!errors.email}
                style={styles.input}
              />
              {touched.email && errors.email && (
                <HelperText type="error">{errors.email}</HelperText>
              )}

              <TextInput
                label="Passord"
                mode="outlined"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={touched.password && !!errors.password}
                style={styles.input}
              />
              {touched.password && errors.password && (
                <HelperText type="error">{errors.password}</HelperText>
              )}

              <Button
                mode="contained"
                onPress={() => handleSubmit()}
                style={styles.button}
                disabled={!values.email || !values.password}
              >
                Logg inn
              </Button>
            </>
          )}
        </Formik>

        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.link}>Har du ikke en konto? Registrer deg</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  inner: { padding: 16 },
  Text: { textAlign: 'center', marginBottom: 24 },
  input: { marginBottom: 16 },
  button: { marginTop: 8 },
  link: { marginTop: 16, textAlign: 'center', color: '#0077cc' },
});
