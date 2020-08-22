import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import polyImg from './images/polygon2.jpg';
import './mixin.scss';

const useStyles = makeStyles((theme) => ({
    contact: {
        fontSize: '1.5rem',
    },
    hovers: {
        color: 'white',
        '&:hover': {
            color: 'rgba(255, 255, 255, .3)',
        },
    },
    imgs: {
        width: '70%',
        borderRadius: '50%',
        '@media(max_width: 670px)': {
            display: 'none',
        },
    },
}));

export const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return windowDimensions;
};

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
    const { width, height } = useWindowDimensions();
    console.log(width);
    return (
        <div id="about" className="content-wrapper">
            <h2 className="title">About</h2>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                {width > 670 ? (
                    <Grid xs={3} item>
                        <img src={polyImg} className={classes.imgs} />
                    </Grid>
                ) : (
                    <></>
                )}
                <Grid xs={width > 670 ? 5 : 8} item>
                    <p>
                        京都大学情報学科現4回生。ゲームは古来からの趣味であり、嵌まり込みすぎて情報学科に入学。現在は京都大学の神田研究室にて
                        Human Robot Interaction に関する研究を行なっている。
                    </p>
                    <p>
                        ゲーム開発やWEB開発,ロボット開発などさまざまな分野に対して広く興味を持っている。
                    </p>
                    <p className={classes.contact}>
                        連絡先: nishiwaki.kyoto[at]gmail.com
                    </p>
                </Grid>
                {/* <table className="table-wrapper">{table_content}</table> */}
            </Grid>
        </div>
    );
};

export default About;
