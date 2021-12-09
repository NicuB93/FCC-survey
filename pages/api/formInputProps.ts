export const textFieldData = [
  {
    name: 'name',
    rules: { required: true, pattern: /^[a-zA-Z ]+$/ },
    label: 'Name',
    type: 'text',
    errorText: 'Please enter a valid Name',
  },
  {
    name: 'age',
    rules: { required: false, pattern: /^[0-9]{1,2}$/ },
    label: 'Age (optional)',
    type: 'text',
    errorText: 'Please enter a valid age',
  },
  {
    name: 'email',
    rules: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    label: 'Email',
    type: 'email',
    errorText: 'Please enter a valid email',
  },
  {
    name: 'comments',
    rules: { required: false },
    label: 'Enter your comments here ...',
    type: 'text',
    rows: 10,
    multiline: true,
    errorText: '',
  },
];

export const selectValues = [
  {
    name: 'role',
    inputLabel: 'Select your current role',
    menuItem: [
      'Student',
      'Full time job',
      'Full time learner',
      'Prefer not say',
      'Other',
    ],
  },
  {
    name: 'favoriteFeature',
    inputLabel: 'Select your option',
    menuItem: [
      'Video Tutorials',
      'Articles',
      'Free lessons',
      'Step by step paths',
      'Other',
    ],
  },
];

export const radioValues = ['Definitely', 'Maybe', 'Not sure'];

export const checkboxValues = [
  {
    id: 1,
    value: 'Front-end Projects',
  },
  {
    id: 2,
    value: 'Data Visualization',
  },
  {
    id: 3,
    value: 'Challenges',
  },
  {
    id: 4,
    value: 'Open Source Community',
  },
  {
    id: 5,
    value: 'Gitter help rooms',
  },
  {
    id: 6,
    value: 'Videos',
  },
  {
    id: 7,
    value: 'City Meetups',
  },
  {
    id: 8,
    value: 'Wiki',
  },
  {
    id: 9,
    value: 'Forum',
  },
  {
    id: 10,
    value: 'Additional Courses',
  },
  {
    id: 11,
    value: 'Any comments or suggestions',
  },
];
