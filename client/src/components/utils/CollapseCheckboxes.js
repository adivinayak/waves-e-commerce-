import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import classes from '../../Resources/css/styles.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';




class CollapseCheckbox extends Component {

state={
    open: false,
    checked: []
}


componentDidMount(){
    if(this.props.initState){
        this.setState({
            open: this.props.initState
        })
    }
}
handleClick=()=>{
    this.setState({
        open: !this.state.open
    })
}

 handleAngle=()=>(
     this.state.open ? 
     <FontAwesomeIcon 
         icon={faAngleUp}
         className={classes.icon}
     />:<FontAwesomeIcon 
         icon={faAngleDown}
         className={classes.icon}
     />
 )
renderList=()=>(
    this.props.list ?
    this.props.list.map((value)=>(
       <ListItem key={value._id} style={{padding:'10px 0'}}>
       <ListItemText primary={value.name}/>
       <ListItemSecondaryAction>
           <Checkbox
                color="primary"
             onChange={this.handleToggle(value._id)}
             checked={this.state.checked.indexOf(value._id) !== -1}
           />
       </ListItemSecondaryAction>

       </ListItem>     
    )):null
)

handleToggle=value=>()=>{
     const {checked} = this.state
     const currenIndex = checked.indexOf(value)
     const newChecked = [...checked]

     if(currenIndex === -1){
         newChecked.push(value)
     }else{
         newChecked.splice(currenIndex,1)
     }

     this.setState({
         checked:newChecked
     },()=>{
        this.props.handleFilters(newChecked)
     })
}



    render() {
        return (
            <div className={classes.collapse_items_wrapper}>
                <List style={{
                    borderBottom: '1px solid #dbdbdb'
                }}>
                <ListItem onClick={this.handleClick}  style={{padding:'10px 23px 10px 0'}}> 
                <ListItemText
                            primary={this.props.title}
                            className={classes.collapse_title}
                        />
                        {this.handleAngle()}
                </ListItem>
<Collapse in={this.state.open} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
                            {this.renderList()}
                        </List>
</Collapse>
                </List>
            </div>
        );
    }
}

export default CollapseCheckbox;