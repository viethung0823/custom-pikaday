const holidays = [
    "2023-01-02T00:00:00.000Z",
    "2023-04-08T00:00:00.000Z",
    "2023-09-03T00:00:00.000Z",
    "2023-12-25T00:00:00.000Z",
    "2023-04-10T00:00:00.000Z",
    "2023-01-26T00:00:00.000Z",
    "2023-04-25T00:00:00.000Z",
    "2023-10-02T00:00:00.000Z",
    "2023-12-26T00:00:00.000Z",
    "2023-12-24T00:00:00.000Z",
    "2023-01-01T00:00:00.000Z",
    "2023-04-09T00:00:00.000Z",
    "2023-04-07T00:00:00.000Z",
    "2023-05-01T00:00:00.000Z",
    "2023-05-14T00:00:00.000Z"
];
const holidayDates = holidays.map(dateString => new Date(dateString));

const picker = new Pikaday({
  field: document.getElementById('datepickerContainer'),
  format: 'DD-MM-YYYY',
  defaultDate: new Date(), // Set the default date to the current date
  setDefaultDate: true, // Update the default date if the field is empty
  showDaysInNextAndPreviousMonths: true,
  enableSelectionDaysInNextAndPreviousMonths: true,
  firstDay:1,
  position: 'top left',
  onSelect: function(date) {
    document.getElementById('datepickerInput').blur();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    const input = document.getElementById("datepickerInput");
    input.value = formattedDate;
  },
  i18n: {
    previousMonth : 'Previous Month',
    nextMonth     : 'Next Month',
    months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort : ['S', 'M','T','W','T','F','S']
  },
  offDays: holidayDates,
});


function focusInput() {
  document.getElementById('datepickerInput').focus();
  picker.show();
}