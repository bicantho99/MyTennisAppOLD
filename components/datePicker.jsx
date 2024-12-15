import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { StyleSheet } from "react-native";

export default function DatePicker() {
  const [date, setDate] = useState(dayjs());

  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
