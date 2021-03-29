export default {
  pageHeader: 'Sign up',
  firstName: {
    required: 'You must enter first name!',
    pattern: 'Invalid first name. should be more than 3 characters, no special characters!'
  },
  lastName: {
    required: 'You must enter last name!',
    pattern: 'Invalid last name. should be more than 3 characters, no special characters!'
  },
  email: {
    required: 'You must enter email address!',
    pattern: 'Invalid email address. Please enter valid email!'
  },
  password: {
    required: 'You must enter password!',
    pattern: 'Invalid password. Please enter valid password!',
    crossFormPattern: 'Invalid password. Please enter valid password that don\'t include the first or last name',
  }
} as any
