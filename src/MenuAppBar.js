import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { getShowClock, getShowWeather, getNTEnabled } from "./chromeAccessor";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    getShowWeather(function(result) {
      let showWeather = result.showWeather;
      if (showWeather == null) {
        showWeather = true;
      }
      this.setState({'showWeather': showWeather});
    }.bind(this));
    getShowClock(function(result) {
      let showClock = result.showClock;
      if (showClock == null) {
        showClock = true;
      }
      this.setState({'showClock': showClock});
    }.bind(this));
    getNTEnabled(function(result) {
      let nTEnabled = result.nTEnabled;
      if (nTEnabled == null) {
        nTEnabled = false;
      }
      this.setState({'nTEnabled': nTEnabled});
    }.bind(this));
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeShowWeather = event => {
    console.log('Changed show weather');
    console.log(event);
  }

  handleChangeShowClock = event => {
    console.log('Changed show clock');
    console.log(event);
  }

  handleChangeNTEnabled = event => {
    console.log('Changed NTEnabled');
    console.log(event);
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
              {/*<MenuIcon />*/}
            {/*</IconButton>*/}
            <MenuTabs className={classes.menuButton}
                      handleSearchTypeChange={this.props.handleSearchTypeChange}
                      searchType={this.props.searchType}/>
            <Typography variant="title" color="inherit" className={classes.flex}>
            </Typography>
            {(
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem >
                    <FormControlLabel
                      control={
                        <Switch checked={this.state.showWeather} onChange={this.handleChangeShowWeather}/>
                      }
                      label={'Show Weather'}
                    />
                  </MenuItem>
                  <MenuItem >
                    <FormControlLabel
                      control={
                        <Switch checked={this.state.showClock} onChange={this.handleChangeShowClock}/>
                      }
                      label={'Show Clock'}
                    />
                  </MenuItem>
                  <MenuItem >
                    <FormControlLabel
                      control={
                        <Switch checked={this.state.nTEnabled} onChange={this.handleChangeNTEnabled}/>
                      }
                      label={'NT Enabled'}
                    />
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>Background Color</MenuItem>
                  <MenuItem onClick={this.handleClose}>Background Image</MenuItem>
                  <MenuItem >
                    <TextField
                      select
                      value="Engine"
                      margin="normal"
                      onChange={this.props.handleSearchEngine}
                    >
                      <MenuItem value="Google" onChange={this.props.handleSearchEngine}>Google</MenuItem>
                      <MenuItem value="Yahoo" onChange={this.props.handleSearchEngine}>Yahoo</MenuItem>
                      <MenuItem value="Bing" onChange={this.props.handleSearchEngine}>Bing</MenuItem>
                      <MenuItem value="DuckDuckGo" onChange={this.props.handleSearchEngine}>DuckDuckGo</MenuItem>
                    </TextField>
                  </MenuItem>
                  {/*<FormGroup>*/}
                    {/*<Switch />*/}
                  {/*</FormGroup>*/}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

class MenuTabs extends React.Component {
  handleChange = (event, value) => {
    if (value == 0) {
      this.props.handleSearchTypeChange("Web");
    } else if (value == 1) {
      this.props.handleSearchTypeChange("Images");
    } else if (value == 2) {
      this.props.handleSearchTypeChange("Videos");
    }
  };

  searchTypeStrToInt(searchTypeStr) {
    if (searchTypeStr === 'Web') {
      return 0;
    } else if (searchTypeStr === 'Images') {
      return 1;
    } else if (searchTypeStr === 'Videos') {
      return 2;
    }
  }

  render() {
    return (
      <Tabs value={this.searchTypeStrToInt(this.props.searchType)} onChange={this.handleChange}>
        <Tab label="Web" />
        <Tab label="Images" />
        <Tab label="Videos" href="#basic-tabs" />
      </Tabs>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);