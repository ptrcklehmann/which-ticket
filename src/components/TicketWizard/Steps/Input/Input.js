import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function Input ({ label, children, type, ...props }) {
    const classes = useStyles();
    return (
        <>
            { type === "radio" ?
                (<>
                    <input type={type} {...props} />
                    <label htmlFor={label}>{label}</label>
                </>)
                : type === "text" ?
                    <div className="row">
                        <span>
                        
                            {/* <input  className="basic-slide" type={type} {...props} required />
                            <label htmlFor={label}>{label}</label> */}
                        </span>
                    </div>
                    : (<div className='input'>
                        <input type={type} {...props} />
                        <label htmlFor={label}>{label}</label>
                    </div>)
            }
        </>

    )
}
