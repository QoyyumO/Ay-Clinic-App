import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ClinicalRecordTab = () => {
  const [clinicDate, setClinicDate] = useState('');
  const [clinicDateError, setClinicDateError] = useState('');
  const [nextAppointmentDate, setNextAppointmentDate] = useState('');
  const [nextAppointmentDateError, setNextAppointmentDateError] = useState('');
  const [natureOfAilment, setNatureOfAilment] = useState('');
  const [natureOfAilmentError, setNatureOfAilmentError] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [medicinePrescribedError, setMedicinePrescribedError] = useState('');
  const [procedureUndertaken, setProcedureUndertaken] = useState('');
  const [procedureUndertakenError, setProcedureUndertakenError] = useState('');

  const handleClinicDateChange = (text: string) => {
    setClinicDate(text);
    const validDate = /^\d{2}-\d{2}-\d{4}$/.test(text);
    setClinicDateError(validDate ? '' : 'Clinic Date should be in format DD-MM-YYYY');
  };

  const handleNextAppointmentDateChange = (text: string) => {
    setNextAppointmentDate(text);
    const validDate = /^\d{2}-\d{2}-\d{4}$/.test(text);
    setNextAppointmentDateError(validDate ? '' : 'Date of Next Appointment should be in format DD-MM-YYYY');
  };

  const handleTextInputChange = (text: string, setFieldValue: (value: string) => void, setErrorField: (value: string) => void, fieldName: string) => {
    setFieldValue(text);
    setErrorField(text.trim().length === 0 ? `${fieldName} cannot be empty` : '');
  };

  const handleSubmit = () => {
    if (!clinicDateError && !nextAppointmentDateError && !natureOfAilmentError && !medicinePrescribedError && !procedureUndertakenError) {
      console.log("Form submitted!");
    } else {
      console.log("Form contains errors!");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={20}
      enableOnAndroid={true}
    >
      <Text style={styles.label}>Records ID:</Text>
      <TextInput
        style={styles.input}
        editable={false}
        placeholder="Auto-generated"
      />

      <Text style={styles.label}>Clinic Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YYYY"
        value={clinicDate}
        onChangeText={handleClinicDateChange}
      />
      {clinicDateError ? <Text style={styles.error}>{clinicDateError}</Text> : null}

      <Text style={styles.label}>Nature of Ailment:</Text>
      <TextInput
        style={styles.input}
        value={natureOfAilment}
        onChangeText={(text) => handleTextInputChange(text, setNatureOfAilment, setNatureOfAilmentError, 'Nature of Ailment')}
      />
      {natureOfAilmentError ? <Text style={styles.error}>{natureOfAilmentError}</Text> : null}

      <Text style={styles.label}>Medicine Prescribed:</Text>
      <TextInput
        style={styles.input}
        value={medicinePrescribed}
        onChangeText={(text) => handleTextInputChange(text, setMedicinePrescribed, setMedicinePrescribedError, 'Medicine Prescribed')}
      />
      {medicinePrescribedError ? <Text style={styles.error}>{medicinePrescribedError}</Text> : null}

      <Text style={styles.label}>Procedure Undertaken:</Text>
      <TextInput
        style={styles.input}
        value={procedureUndertaken}
        onChangeText={(text) => handleTextInputChange(text, setProcedureUndertaken, setProcedureUndertakenError, 'Procedure Undertaken')}
      />
      {procedureUndertakenError ? <Text style={styles.error}>{procedureUndertakenError}</Text> : null}

      <Text style={styles.label}>Date of Next Appointment:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YYYY"
        value={nextAppointmentDate}
        onChangeText={handleNextAppointmentDateChange}
      />
      {nextAppointmentDateError ? <Text style={styles.error}>{nextAppointmentDateError}</Text> : null}

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

export default ClinicalRecordTab;
