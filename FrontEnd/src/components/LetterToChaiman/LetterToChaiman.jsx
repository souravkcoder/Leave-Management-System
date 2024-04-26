import React from 'react';
import './LetterToChaiman.css'; // Import CSS file for styling
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet ,Font} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import MyCustomFont from '../../assets/Fonts/Roboto-Regular.ttf'

Font.register({
  family: 'Roboto-Regular',
  src: MyCustomFont
})


// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: '1in', // Adjust the padding to set the margin
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  header: {
    marginBottom: 40,
    textAlign: 'justify', // Align text to justify
  },
  body: {
    marginBottom: 40,
    textAlign: 'justify', // Align text to justify
  },
  footer: {
    marginTop: 40,
    textAlign: 'justify', // Align text to justify
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'justify', // Align text to justify
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'justify', // Align text to justify
  },
});
const PdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text >To</Text>
        <Text>The Chairman</Text>
        <Text>University of Chittagong</Text>
        <Text>Chittagong, Bangladesh</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Subject: Prayer for issuing study leave to pursue Master's Degree Program in Harvard University, United States</Text>
        <Text>Dear Sir,</Text>
        <Text style={styles.paragraph}>
          I, the undersigned, joined the Department of Computer Science and Engineering at the University of Chittagong as a lecturer on 2023-06-09. It is my immense pleasure to inform you that I have been offered admission to pursue the Master's Degree Program at Harvard University, United States, starting from 2023-07-08. Along with the admission, I have also been awarded the "Chittagong University Welfare Fund," which covers my living allowances, registration/training/teaching fees, traveling costs, installation, and visa-related expenses.
        </Text>
        <Text style={styles.paragraph}>
          To participate in this 1-year program, it is required to have study leave from the University of Chittagong.
        </Text>
        <Text style={styles.paragraph}>
          Therefore, I earnestly request you to take necessary steps for issuing me study leave from 2023-07-08 and allowing me to join this very important academic program.
        </Text>
        <Text style={styles.title}>Kind Regards.</Text>
        <Text>
          Shajidul Islam {'\n'}
          Lecturer {'\n'}
          Department of Computer Science and Engineering {'\n'}
          Chittagong, Bangladesh {'\n'}
          University of Chittagong {'\n'}
          Chittagong-4331
        </Text>
      </View>

    </Page>
  </Document>
);

const Letter = () => {
  return (
    <div className="letter-container">
      <div className="letter-header">
        <h2>To</h2>
        <p>The Chairman</p>
        <p>University of Chittagong</p>
        <p>Chittagong, Bangladesh</p>
      </div>
      <div className="letter-body">
        <h2>Subject: Prayer for issuing study leave to pursue Master's Degree Program program in Harvard University, United States</h2>
        <p>Dear Sir,</p>
        <p style={{ textAlign: 'justify' }}>
          I, the undersigned, joined the Department of Computer Science and Engineering at the University of Chittagong as a lecturer on 2023-06-09. It is my immense pleasure to inform you that I have been offered admission to pursue the Master's Degree Program at Harvard University, United States, starting from 2023-07-08. Along with the admission, I have also been awarded the "Chittagong University Welfare Fund," which covers my living allowances, registration/training/teaching fees, traveling costs, installation, and visa-related expenses.
        </p>
        <p style={{ textAlign: 'justify' }}>
          To participate in this 1-year program, it is required to have study leave from the University of Chittagong.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Therefore, I earnestly request you to take necessary steps for issuing me study leave from 2023-07-08 and allowing me to join this very important academic program.
        </p>
        <h2>Kind Regards.</h2>
        <p>
          Shajidul Islam <br />
          Lecturer <br />
          Department of Computer Science and Engineering <br />
          Chittagong, Bangladesh <br />
          University of Chittagong <br />
          Chittagong-4331
        </p>
      </div>
      <div className="letter-footer">
        {/* PDF download link */}
        <PDFDownloadLink document={<PdfDocument />} fileName="StudyLeaveRequest.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default Letter;