import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Buttons from '../Buttons/Buttons'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        
        width: '25ch',
        stroke: '#f0d721'
      },
      inputProps: {
          focused: {
        background: "red"
      }}
    },
  }));
export default function Name ({ setForm, formData, navigation, index }) {
    const classes = useStyles();
    const { name } = formData
    return (
        <div className='step'>
            <div className="inputs">
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="What is your name?" name='name' value={name} onChange={setForm} />
            </form>
            {/* <Input
                name='name'
                value={name}
                onChange={setForm}
                type='text'
                label='What is your name?'
            /> */}
            </div>
            <Buttons controls={navigation} index={index} />
        </div>
    )
}
