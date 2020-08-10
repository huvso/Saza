import * as Linking from 'expo-linking';

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
          },
          Products: {
            screens: {
              ProductMain: 'product'
            }
          },
          Barcode: {
            screens: {
              BarcodeMain: 'barcode'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
