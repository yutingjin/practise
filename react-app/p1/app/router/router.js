const hideNavBar = Platform.OS === 'android'
const paddingTop = Platform.OS === 'android' ? 0 : 8

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Schema
          name='boot'
          sceneConfig={Navigator.SceneConfigs.FadeAndroid}
          hideNavBar={true}
          type='replace'
        />
        <Schema
          name='main'
          sceneConfig={Navigator.SceneConfigs.FadeAndroid}
          hideNavBar={hideNavBar}
        />

        <Route schema='boot' component={SessionScreen} name='session' initial={true} />
        <Route schema='boot' component={AuthScreen} name='auth' />

        <Route name='main' hideNavBar={true} type='reset'>
          <SideDrawer>
            <Router
              sceneStyle={styles.scene}
              navigationBarStyle={styles.navigationBar}
              titleStyle={styles.title}
              barButtonIconStyle={styles.barButtonIcon}
              barButtonTextStyle={styles.barButtonText}
            >
              <Route schema='main' component={PlaceScreen} name='place' title='Places' />
              <Route schema='main' component={PaymentScreen} name='payment' title='Payment' header={Toolbar} />
            </Router>
          </SideDrawer>
        </Route>

      </Router>
    )
  }
}