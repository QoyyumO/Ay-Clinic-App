import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const BiodataTab = () => {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [dateOfBirthError, setDateOfBirthError] = useState<string>('');
  const [dateOfRegistration, setDateOfRegistration] = useState<string>('');
  const [dateOfRegistrationError, setDateOfRegistrationError] = useState<string>('');
  const [yesNoInput, setYesNoInput] = useState<string>('');
  const [yesNoInputError, setYesNoInputError] = useState<string>('');

  const handleDateOfBirthChange = (text: string) => {
    setDateOfBirth(text);
    const validDate = /^\d{2}-\d{2}-\d{4}$/.test(text);
    setDateOfBirthError(validDate ? '' : 'Date of Birth should be in format DD-MM-YYYY');
  };

  const handleDateOfRegistrationChange = (text: string) => {
    setDateOfRegistration(text);
    const validDate = /^\d{2}-\d{2}-\d{4}$/.test(text);
    setDateOfRegistrationError(validDate ? '' : 'Date of Registration should be in format DD-MM-YYYY');
  };

  const handleYesNoInputChange = (text: string) => {
    setYesNoInput(text);
    const formattedText = text.toLowerCase().trim();
    setYesNoInputError(formattedText === 'yes' || formattedText === 'no' ? '' : "Please enter either 'yes' or 'no'");
  };

  const handleSubmit = () => {
    // Perform submit logic here (e.g., save data, send request)
    console.log("Form submitted!");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={20}
      enableOnAndroid={true}
    >
      <Text style={styles.label}>Patient ID:</Text>
      <TextInput style={styles.input} editable={false} placeholder="Auto-generated" />

      <Text style={styles.label}>First Name:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Surname:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Middle Name:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YYYY"
        value={dateOfBirth}
        onChangeText={handleDateOfBirthChange}
      />
      {dateOfBirthError ? <Text style={styles.error}>{dateOfBirthError}</Text> : null}

      <Text style={styles.label}>Home Address:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Date of Registration:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YYYY"
        value={dateOfRegistration}
        onChangeText={handleDateOfRegistrationChange}
      />
      {dateOfRegistrationError ? <Text style={styles.error}>{dateOfRegistrationError}</Text> : null}

      <Text style={styles.label}>_23120111056:</Text>
      <TextInput
        style={styles.input}
        value={yesNoInput}
        onChangeText={handleYesNoInputChange}
      />
      {yesNoInputError ? <Text style={styles.error}>{yesNoInputError}</Text> : null}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF9C4',
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    color: '#333333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 5,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default BiodataTab;
