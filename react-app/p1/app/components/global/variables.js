import { Navigator, PixelRatio} from 'react-native';

const variables = {
  $backgroundColor: '#ebeef0',
  $tipColor: '#fff8db',
  $infoColor: '#16d2d4',

  $aqua:  '#7FDBFF',
  $blue:  '#249af6',
  $navy:  '#001F3F',
  $teal:  '#39CCCC',
  $green: '#82de39',
  $olive: '#3D9970',
  $lime:  '#8BDE14',

  $yellow:  '#FFDC00',
  $orange:  '#FF851B',
  $red:     '#FF4136',
  $fuchsia: '#F012BE',
  $purple:  '#B10DC9',
  $maroon:  '#85144B',

  // Gray Scale

  $white:  '#fff',
  $silver: '#ddd',
  $gray:   '#ccc',
  $black:  '#111',

  touchUnderlayColor: '#E2E2E2',
  primaryColor: '#009af2',
  navBarHeight: Navigator.NavigationBar.Styles.General.TotalNavHeight,
  onePixel: 1 /PixelRatio.get()
};

export default variables;
