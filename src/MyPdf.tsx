import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface MyPdfPropstype {
  name: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the top
    paddingTop: 30, // Adjust top padding
  },
  greeting: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  demoText: {
    fontSize: 14,
    textAlign: "center",
  },
});

// Create Document Component
const MyPdf = ({ name }: MyPdfPropstype) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.greeting}>Hi {name}!</Text>
        <Text style={styles.demoText}>
          Thank you for using this demo PDF generator. This is just a sample
          text to showcase the capabilities of @react-pdf/renderer in creating
          PDF documents using React components.
        </Text>
        <Text style={styles.demoText}>
          Feel free to customize and integrate this library into your projects
          for creating dynamic and interactive PDFs.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyPdf;
