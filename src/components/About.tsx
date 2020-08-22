import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import polyImg from './images/polygon2.jpg';
import './mixin.scss';

const useStyles = makeStyles((theme) => ({
    hovers: {
        color: 'white',
        '&:hover': {
            color: 'rgba(255, 255, 255, .3)',
        },
    },
    imgs: {
        width: '70%',
        borderRadius: '50%',
    },
}));

interface Content {
    key: string;
    value: string;
    url: string;
}
const About: React.FC = () => {
    const classes = useStyles();
    let table_content: any[] = [];
    let data: Content[] = [
        { key: 'Name', value: 'Keisuke Nishiwaki', url: '' },
        {
            key: 'University',
            value: '京都大学情報学科',
            url: '',
        },
        { key: 'GitHub', value: 'mie998', url: 'https://github.com/mie998' },
        {
            key: 'Twitter',
            value: 'MIE98838',
            url: 'https://twitter.com/Mie98838',
        },
        { key: 'Contact', value: 'nishiwaki.kyoto[at]gmail.com', url: '' },
    ];

    const setUrl = (value: string, url: string) => {
        if (url !== '') {
            return (
                <td>
                    <a href={url} className={classes.hovers}>
                        {value}
                    </a>
                </td>
            );
        } else {
            return <td>{value}</td>;
        }
    };
    for (let i in data) {
        table_content.push(
            <tr>
                <th>{data[i].key}</th>
                {setUrl(data[i].value, data[i].url)}
            </tr>,
        );
    }

    return (
        <div id="about" className="content-wrapper">
            {/* <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            > */}
            <h2 className="title">About</h2>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
                className="content"
            >
                <Grid xs={3} item>
                    <img src={polyImg} className={classes.imgs} />
                    {/* <a href="https://github.com/mie998"> <i style={{ paddingLeft: '30px' }} className="fa fa-github fa-2x" ></i> </a> <a href="https://twitter.com/Mie98838"> <i style={{ paddingLeft: '30px' }} className="fa fa-twitter fa-2x" ></i> </a> */}
                </Grid>
                <Grid xs={3} item>
                    <div>
                        <table className="table-wrapper">{table_content}</table>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
