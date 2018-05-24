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
  state = {
    // auth: true,
    anchorEl: null
  };

  // handleChange = (event, checked) => {
  //   this.setState({ auth: checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

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
            <MenuTabs className={classes.menuButton} handleSearchTypeChange={this.props.handleSearchTypeChange} />
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
                        <Switch />
                      }
                      label={'Show Weather'}
                    />
                  </MenuItem>
                  <MenuItem >
                    <FormControlLabel
                      control={
                        <Switch />
                      }
                      label={'Show Clock'}
                    />
                  </MenuItem>
                  <MenuItem >
                    <FormControlLabel
                      control={
                        <Switch />
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
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleSearchTypeChange(event);
  };

  render() {
    const { value } = this.state;

    return (
      <Tabs value={value} onChange={this.handleChange}>
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