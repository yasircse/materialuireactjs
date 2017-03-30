import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, DropDownMenu, MenuItem, Paper, TextField, RaisedButton, Divider,Drawer } from 'material-ui';
import { orange500,blue500 } from 'material-ui/styles/colors';


const styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  },
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      drpDnLabelChange: '',
      dropDnValue: 1,
      open:false

    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleMenuTouchTap = this.handleMenuTouchTap.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  handleMenuTouchTap() {
    this.setState({
      drpDnLabelChange: 'Account Profile'
    });
  }
  handleTouchTap() {
    const uName = this.state.username;
    this.setState({
      drpDnLabelChange: uName
    });
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  drawerClose(){
this.setState({
  open:false
});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Material-UI'
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={
              <div>
                <DropDownMenu
                  value={this.state.dropDnValue}
                >
                  <MenuItem value={1} primaryText={this.state.drpDnLabelChange} />
                  <MenuItem value={2} primaryText='Sign out'
                    onTouchTap={this.handleMenuTouchTap}
                  />
                </DropDownMenu>
              </div>
            }
          />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <Paper style={{ height: 180, width: 300, background: orange500 }}>
              <h1 style={{ color: '#FFFFFF', paddingTop: 60, paddingLeft: 80 }}>UCMS</h1>
            </Paper>
            <MenuItem onTouchTap={() => this.drawerClose()}>Dashboard</MenuItem>
            <MenuItem onTouchTap={() => this.drawerClose()}>Catalogue</MenuItem>
            <MenuItem onTouchTap={() => this.drawerClose()}>List</MenuItem>
            <MenuItem onTouchTap={() => this.drawerClose()}>School</MenuItem>
            <Divider />
            <MenuItem onTouchTap={() => this.drawerClose()}>New User </MenuItem>
            <MenuItem onTouchTap={() => this.drawerClose()}>User</MenuItem>
            <Divider />
            <MenuItem onTouchTap={() => this.drawerClose()}>History</MenuItem>
            <Divider />
            <MenuItem onTouchTap={() => this.drawerClose()}>Login</MenuItem>
          </Drawer>

          <Paper
            style={{ height: 280, width: 400, marginTop: 300, marginLeft: 700, textAlign: 'center' }} zDepth={2}>
            <h2>Login</h2>
            <TextField
              floatingLabelText="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleOnChange}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />

            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <RaisedButton
              label="Login"
              primary={true}
              onTouchTap={this.handleTouchTap}
              style={{ marginTop: 25, width: 200 }}

            />
          </Paper>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;