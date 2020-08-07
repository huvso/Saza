import * as Linking from 'expo-linking';
import UserMain from '../screens/user/UserMain';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          User: {
            screens: {
              UserMain: 'user'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
